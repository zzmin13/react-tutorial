import React, { useState } from 'react';

function InputSample(){
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const { name, nickname } = inputs;
    const onChange = (event) => {
        const {name, value} = event.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    }
    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
    }
    return (
        <div>
            <input name="name" onChange={onChange} value={name}/>
            <input name="nickname" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>값: {name}({nickname})</div>
        </div>
    )
}

export default InputSample;