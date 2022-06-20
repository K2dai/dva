import React, { Component } from 'react'
import Tabbar from '../components/Tabbar'

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Tabbar></Tabbar>
      </div>
    )
  }
}
