import React from "react";

function Hello({name,color}){
    return <div style={{color}}>{name}님 안녕하세요.</div>;
}

Hello.defaultProps = {
    name: 'Unknown'
};

export default Hello;