import React, { Component } from 'react'
import Tabbar from '../components/Tabbar'
import { connect } from 'dva';

class App extends Component {
  render() {
    let {isShow} = this.props;
    return (
      <div>
        {this.props.children}
        {isShow && <Tabbar></Tabbar>}
      </div>
    )
  }
}

const changeStateToProps = (state) =>{
  return{
    isShow: state.maizuo.isShow
  }
}

export default connect(changeStateToProps)(App)