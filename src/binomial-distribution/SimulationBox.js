import React from 'react';

const SimulationBox = ({numberOfIteration, onChange, showSimulation, onSimulate, n, p}) => {
    return (<div className="SliderInputForm">
        Number of Iterations: <input type="number"  min={0} max={1000000} step={1} onChange={onChange} value={numberOfIteration}/>
        <button disabled={showSimulation} onClick={onSimulate}>Simulate</button>
        {showSimulation ? `Tossing ${n} coins with probability of Heads = ${p} ${numberOfIteration} times...`: null}
        </div>
        );
}

export default SimulationBox;