import { withRouter } from 'dva/router'
import React from 'react'

function Center(props) {
  return (
    <div>
        {console.log(props)}
    </div>
  )
}

export default withRouter(Center);