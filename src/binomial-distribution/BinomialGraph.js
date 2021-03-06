import React, { useEffect, useState } from 'react';

import { Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, Brush, ComposedChart, Line } from 'recharts';
import { binomialDistribution, simulateBinomialDistribution } from '../utils/math-utils';

let intervalID = null;
const TIME_DELAY = 100;
const NO_OF_SUBITERATION = 10;
const SHOW_BRUSH_LIMIT = 70;

const BinomialGraph = ({ n = 10, p = 0.5, scaleYaxis = false, showSimulation = false, numberOfIteration = 1000, showNormalAproximation = false }) => {

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
                simResults.push(simulateBinomialDistribution(n, p, numberOfIteration / NO_OF_SUBITERATION));
            }

            if (intervalID) {
                clearInterval(intervalID);
            }
            // Start simulation
            intervalID = setInterval(() => {

                let simResultsByPart = {};
                for (let i = 0; i < iterationStep; i++) {
                    for (let s in simResults[i]) {
                        simResultsByPart[s] = (simResultsByPart[s] ? simResultsByPart[s] : 0) + simResults[i][s];
                    }
                }

                const newData = data.map(p => ({ ...p, h: simResultsByPart[p.x] }));
                Setdata(newData);

                iterationStep++;

                if (iterationStep > NO_OF_SUBITERATION) {
                    clearInterval(intervalID);
                }
            }, TIME_DELAY);
        } else {
            clearInterval(intervalID);
            const newData = data.map(p => ({ ...p, h: 0 }));
            Setdata(newData);
        }

        return () => {
            clearInterval(intervalID);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showSimulation])


    return (
        <ResponsiveContainer width="100%" height={500}>
            <ComposedChart
                data={data}
                margin={{ top: 60, right: 30, left: 0, bottom: 40 }}
            >
                <defs>
                    <linearGradient
                        id="main"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="100%"
                        spreadMethod="reflect">
                        <stop offset="0" stopColor="#8F75FF" />
                        <stop offset="1" stopColor="#B721FF" />
                    </linearGradient>

                    <linearGradient
                        id="simulate"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="100%"
                        spreadMethod="reflect">
                        <stop offset="0" stopColor="#85FFBD" />
                        <stop offset="1" stopColor="#CBFD9B" />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" />
                <YAxis type="number" yAxisId="left" orientation="left" stroke="#8884d8" domain={[0, scaleYaxis ? 'auto' : 1]} />
                <YAxis type="number" yAxisId="right" orientation="right" stroke="#82ca9d" domain={[0, scaleYaxis ? maxProbability * numberOfIteration : numberOfIteration]} />
                <Tooltip />
                <Legend verticalAlign="bottom" />
                <Bar name="Probability" yAxisId="left" dataKey="p" fill="url(#main)" />
                {showNormalAproximation ? <Line name="Approx Probability" yAxisId="left" type="monotone" dataKey="np" stroke="#82ca9d" strokeWidth={2.5} /> : null}
                {showSimulation ? <Bar name="Frequency of Heads" dataKey="h" yAxisId="right" fill="url(#simulate)" /> : null}
                {n >= SHOW_BRUSH_LIMIT ? <Brush dataKey="x" height={30} stroke="#8884d8" /> : null}
            </ComposedChart>
        </ResponsiveContainer>
    );
}


export default BinomialGraph;