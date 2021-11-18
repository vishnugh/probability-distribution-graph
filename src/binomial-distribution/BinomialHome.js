import React, { useState } from 'react';

import Graph from './BinomialGraph';
import Slider from '../common-components/Slider'

const BinomialHome = () => {
    const [p, setP] = useState(0.5);
    const [n, setN] = useState(10);
    const [scaleYaxis, setScaleYaxis] = useState(false);
    const [showSimulation, setShowSimulation] = useState(false);

    const OnSliderChange = (e) => {
        setP(parseFloat(e.target.value));
    }

    const OnNchange = (e) => {
        setN(parseFloat(e.target.value));
    }

    return (<>
    <Graph n={n} p={p} scaleYaxis={scaleYaxis} showSimulation={showSimulation}/>
    <Slider onChange={OnSliderChange} id="slider" /> <label htmlFor="slider" >{p}</label>
    <input type="Number" onChange={OnNchange} value={n}></input>
    <input type="checkbox" onChange={() => setScaleYaxis(!scaleYaxis)} />
    <input type="checkbox" onChange={() => setShowSimulation(!showSimulation)} />

    </>)
}

export default BinomialHome;