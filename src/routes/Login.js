import React from 'react'

export default function Login(props) {
  return (
    <div>
        <button onClick={()=>{
            localStorage.setItem('token','mai');
            props.history.goBack();
        }}>点击</button>
    </div>
  )
}
