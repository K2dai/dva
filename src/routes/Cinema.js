import { connect } from 'dva'
import React, { useEffect } from 'react'

function Cinema(props) {
  let {cinemaList} = props
  useEffect(()=>{
    if(cinemaList.length === 0){
      props.dispatch({
        type:'maizuo/getCinemaList'
      })
    }
    else{
      console.log("走缓存")
    }
  },[])
  return (
    <div>
      {cinemaList.map(item=>
        <div key={item.name}>{item.name}</div>)}
    </div>
  )
}

const changeStateToProps = (state)=>{
  return{
    cinemaList:state.maizuo.list
  }
}

export default connect(changeStateToProps)(Cinema)