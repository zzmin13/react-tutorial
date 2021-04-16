import React, {useState} from "react";

function InputSample(){
    const [text, setText] = useState('');
    const onChange = (event) => {
        setText(event.target.value);
    };
    const handleReset = () => {
        setText('');
    };
    return (
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={handleReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    )
}

export default InputSample;