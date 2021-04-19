import React from "react";

function CreateUser({username, email, onChange, onCreate}){
    return(
        <div>
            <input
            name="username"
            onChange={onChange}
            placeholder="이름"
            value={username}
            />
            <input
            name="email"
            onChange={onChange}
            placeholder="이메일"
            value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}
export default CreateUser;