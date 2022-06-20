import React, { useEffect, useState } from 'react'
import request from '../utils/request'

export default function Films(props) {
  const [list, setList] = useState([]);
  useEffect(()=>{
    request('https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=7163807',{
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"165294070798642513887233"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res =>{
      console.log(res.data.data.films);
      setList(res.data.data.films);
    })
  },[])
  return (
    <div>
      {list.map(item =>
        <div key={item.filmId} onClick={()=>{
          props.history.push(`/detail/${item.filmId}`)
        }}>
          {item.name}
        </div>)}
    </div>
  )
}
