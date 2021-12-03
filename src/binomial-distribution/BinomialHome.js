import React, { useState, useEffect } from 'react';

import Graph from './BinomialGraph';
import SliderInputForm from '../common-components/SliderInputForm';
import SimulationBox from './SimulationBox';
import 'bootstrap/dist/css/bootstrap.min.css';

const MAX_N = 150;

const BinomialHome = () => {
    const [p, setP] = useState(0.5);
    const [n, setN] = useState(10);
    const [scaleYaxis, setScaleYaxis] = useState(false);
    const [showSimulation, setShowSimulation] = useState(false);
    const [numberOfIteration, setNumberOfIterations] = useState(1000);
    const [showNormalAproximation, setShowNormalAproximation] = useState(false);


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
        if (e.target.value >= 0 && e.target.value <= 1000000) {
            setNumberOfIterations(parseFloat(e.target.value));
        }
    }

    const onSimulate = () => {
        setShowSimulation(true);
    }
    const resetSimulation = () => {
        setShowSimulation(false);
    }

    return (<>
        <h1>Binomial Distribution</h1>
        <div className="grid-row">
            <div className="form-col">
                <div className="SliderInputForm">
                    Scale Y Axis:
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onChange={() => setScaleYaxis(!scaleYaxis)} />
                    </div>
                </div>
                <SliderInputForm onChange={OnSliderChange} id="slider" value={p} min={0} max={1} step={0.01} title="p: Probability of Success" />
                <SliderInputForm onChange={OnNchange} value={n} min={0} max={150} step={1} title="n: Number of Trials" />
                <div className="SliderInputForm">
                    Show Normal Approximation:
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onChange={() => setShowNormalAproximation(!showNormalAproximation)} />
                    </div>
                </div>
                <SimulationBox numberOfIteration={numberOfIteration} onChange={OnNumberOfIterationsChange} showSimulation={showSimulation} onSimulate={onSimulate} resetSimulation={resetSimulation} n={n} p={p} />
            </div>
            <div style={{ margin: "5rem", width: "60%", background: "white", borderRadius: "15px", boxShadow: "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px" }}>
                <Graph n={n} p={p} scaleYaxis={scaleYaxis} showSimulation={showSimulation} numberOfIteration={numberOfIteration} showNormalAproximation={showNormalAproximation} />
            </div>
        </div>
        {/* <input type="checkbox" onChange={() => setShowSimulation(!showSimulation)} /> */}
    </>)
}

export default BinomialHome;