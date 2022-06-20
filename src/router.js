import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import App from './routes/App';
import Films from './routes/Films';
import Cinema from './routes/Cinema';
import Center from './routes/Center';
import Detail from './routes/Detail';
import Login from './routes/Login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path="/" render={()=>{
          // eslint-disable-next-line no-unused-expressions
          return (
          <App>
            <Switch>
              <Route path='/films' component={Films}></Route>
              <Route path='/cinemas' component={Cinema}></Route>
              <Route path='/center' render={()=>{
                return localStorage.getItem('token')? <Center/>:<Redirect to='/login'/>
              }}></Route>
              <Route path='/detail/:id' component={Detail}></Route>
              <Redirect from='/' to='/films'></Redirect>
            </Switch>
          </App>
          )
        }} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
