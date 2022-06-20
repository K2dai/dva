import { getCinemaList } from "../services/getCinemaList";

export default {

    namespace: 'maizuo',
  
    state: {
        isShow:true,
        list:[]
    },
  
    reducers: {
      show(oldState, action){
        return {...oldState, isShow:true}
      },
      hide(oldState, action){
        return {...oldState, isShow:false}
      },
      changeCinemaList(oldState, action){
        return {...oldState, list:action.payload}
      }
    },
    effects: {
      *getCinemaList({ payload }, { call, put }) {  // eslint-disable-line
        let res = yield call(getCinemaList);
        yield put({ 
          type: 'changeCinemaList',
          payload: res.data.data.cinemas
        });
      },
    },
  };
  