import { NavLink } from 'dva/router'
import React from 'react'
import style from './tabbar.module.css'

export default function Tabbar(props) {
  return (
    <ul className={style.tab}>
        <li>
            <NavLink to='/films' activeClassName={style.active}>电影</NavLink>
        </li>
        <li>
            <NavLink to='/cinemas' activeClassName={style.active}>影院</NavLink>
        </li>
        <li>
            <NavLink to='/center' activeClassName={style.active}>个人中心</NavLink>
        </li>
    </ul>
  )
}
