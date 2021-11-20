import React, { useEffect, useState } from 'react';

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, Brush } from 'recharts';
import { binomialDistribution, simulateBinomialDistribution } from '../utils/math-utils';

let intervalID = null;
const TIME_DELAY = 100;
const NO_OF_SUBITERATION = 10;
const SHOW_BRUSH_LIMIT = 70;

const BinomialGraph = ({ n = 10, p = 0.5, scaleYaxis = false, showSimulation = false, numberOfIteration = 1000 }) => {

    const [data, Setdata] = useState(binomialDistribution(n, p));
    const [maxProbability, SetMaxProbability] = useState(1);

    
    let iterationStep = 0;

    useEffect(() => {
        const pmf = binomialDistribution(n, p); 
        const probabilities = pmf.map(p => p.p);
        SetMaxProbability(Math.max(...probabilities));

        Setdata(pmf);
    }, [n, p])

    useEffect(() => {
        if (showSimulation) {

            const simResults = [];
            for (let i = 0; i < NO_OF_SUBITERATION; i++) {
                simResults.push(simulateBinomialDistribution(n, p, numberOfIteration/NO_OF_SUBITERATION));
            }

            if (intervalID) {
                clearInterval(intervalID);
            }
            // Start simulation
            intervalID = setInterval(() => {

                let simResultsByPart = {};
                for (let i = 0; i < iterationStep; i++) {
                    for (let s in simResults[i]) {
                        simResultsByPart[s] = (simResultsByPart[s] ? simResultsByPart[s] : 0 ) + simResults[i][s];
                    }  
                }
                
                const newData = data.map(p => ({ ...p, h:  simResultsByPart[p.x] }));
                Setdata(newData);

                iterationStep++;

                if (iterationStep > NO_OF_SUBITERATION ){
                    clearInterval(intervalID);
                }
            }, TIME_DELAY);
        } else {
            clearInterval(intervalID);
            const newData = data.map(p => ({ ...p, h:  0}));
            Setdata(newData);
        }

        return () => {
            clearInterval(intervalID);
        }
    }, [showSimulation])


    // const LerpZoom = () => {
    //     if (Math.abs(targetZoom - zoomLevel) < EPSILON) {
    //         clearInterval(intervalID);
    //         return;
    //     }

    //     setZoomLevel((targetZoom + zoomLevel)/2)
    // }


    return (
        <ResponsiveContainer width="70%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis type="number" yAxisId="left" orientation="left" stroke="#8884d8" domain={[0, scaleYaxis ? 'auto' : 1]} />
            <YAxis type="number" yAxisId="right" orientation="right" stroke="#82ca9d" domain={[0, scaleYaxis ? maxProbability * numberOfIteration : numberOfIteration]} /> 
            <Tooltip />
            <Legend verticalAlign="bottom"/>
            <Bar yAxisId="left" dataKey="p" fill="#8884d8" />
            {showSimulation ? <Bar dataKey="h" yAxisId="right" fill="#82ca9d" /> : null}
            {n >= SHOW_BRUSH_LIMIT ? <Brush dataKey="x" height={30} stroke="#8884d8" /> : null}
        </BarChart>
        </ResponsiveContainer>
    );
}


export default BinomialGraph;