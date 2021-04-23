import React from "react";

function CreateUser({username, email, onChange, onCreate}){
    return(
        <div>
            {console.log(`CreateUser 컴포넌트가 렌더링 되었습니다.`)}
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
export default React.memo(CreateUser);