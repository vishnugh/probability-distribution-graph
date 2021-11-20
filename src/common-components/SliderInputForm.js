import React from 'react';

const SliderInputForm = ({ min = 0, max = 1, step = 0.01, onChange = () => { }, value, title = ''}) => {
    return (
        <div className="SliderInputForm">
            {title ? title : null}
            <div>
                <span>{min}</span>
                <input type="range" min={min} max={max} step={step} onChange={onChange} value={value} />
                <span>{max}</span>
            </div>
            {/* <label htmlFor="slider" >{value}</label> */}
            <input type="number" min={min} max={max} onChange={onChange} value={value} />
        </div>
    );
}

export default SliderInputForm;