import React, { useState, useEffect } from 'react';

import Graph from './BinomialGraph';
import SliderInputForm from '../common-components/SliderInputForm';
import SimulationBox from './SimulationBox';

const MAX_N = 150;

const BinomialHome = () => {
    const [p, setP] = useState(0.5);
    const [n, setN] = useState(10);
    const [scaleYaxis, setScaleYaxis] = useState(false);
    const [showSimulation, setShowSimulation] = useState(false);
    const [numberOfIteration, setNumberOfIterations] = useState(1000);


    useEffect(() => {
        setShowSimulation(false);
    }, [n, p])


    const OnSliderChange = (e) => {
        setP(parseFloat(e.target.value));
    }

    const OnNchange = (e) => {
        if (e.target.value < 0) {
            setN(0);
        } else if (e.target.value > MAX_N) {
            setN(parseFloat(MAX_N));
        } else {
            setN(parseFloat(e.target.value));
        }
    }

    const OnNumberOfIterationsChange = (e) => {
        setShowSimulation(false);
        if(e.target.value >=0 && e.target.value <= 1000000){
            setNumberOfIterations(parseFloat(e.target.value));
        }
    }

    const onSimulate = () => {
        setShowSimulation(true);
    }

    return (<>
        <h1>Binomial Distibution</h1>
        <Graph n={n} p={p} scaleYaxis={scaleYaxis} showSimulation={showSimulation} numberOfIteration={numberOfIteration}/>
        <div className="form-row">
            <SliderInputForm onChange={OnSliderChange} id="slider" value={p} min={0} max={1} step={0.01} title="p: Probability of Success" />
            <SliderInputForm onChange={OnNchange} value={n} min={0} max={150} step={1} title="n: Number of Trials" />
        </div>
        Scale Y Axis: <input type="checkbox" onChange={() => setScaleYaxis(!scaleYaxis)} />
        {/* <input type="checkbox" onChange={() => setShowSimulation(!showSimulation)} /> */}
        <SimulationBox numberOfIteration={numberOfIteration} onChange={OnNumberOfIterationsChange} showSimulation={showSimulation} onSimulate={onSimulate} n={n} p={p}/>
    </>)
}

export default BinomialHome;