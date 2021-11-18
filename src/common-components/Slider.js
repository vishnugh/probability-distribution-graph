import React from 'react';

const Slider = ({min = 0, max = 1, step = 0.01, onChange = () => {}}) => {
    return <input type="range"  min={min} max={max} step={step} onChange={onChange} />;
}

export default Slider;