import React from 'react';
import {Button} from 'react-bootstrap';

const SimulationBox = ({numberOfIteration, onChange, showSimulation, onSimulate, resetSimulation, n, p}) => {
    return (<div className="SliderInputForm" width="250px" height="200px">
        Number of Iterations: <input type="number" min={0} max={1000000} step={1} onChange={onChange} value={numberOfIteration}/>
        <Button onClick={showSimulation ? resetSimulation : onSimulate}>{showSimulation ? 'Reset' : 'Simulate' }</Button>
        {showSimulation ? `Tossing ${n} coins with probability of Heads = ${p} ${numberOfIteration} times...`: null}
        </div>
        );
}

export default SimulationBox;