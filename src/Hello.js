import React from "react";

function Hello({name,color, isSpecial}){
    return (
        <div style={{color}}>
            {isSpecial && <span>⭐</span>}
            {name}님 안녕하세요.
        </div>
    ) 
}

Hello.defaultProps = {
    name: 'Unknown'
};

export default Hello;