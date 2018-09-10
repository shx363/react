import * as types from './types';

const reducer = (state,{type,payload}) => {
  switch (type) {
    case types.VIEW_NAV:
      return Object.assign({},state,{bNav:payload});
    case types.VIEW_FOOT:
      return Object.assign({},state,{bFoot:payload});
    case types.VIEW_LOADING:
      return Object.assign({},state,{bLoading:payload});
    case types.UPDATE_HOME:
      return Object.assign({},state,{home:payload});
    case types.UPDATE_INVEST:
      return Object.assign({},state,{invest:payload});
    case types.UPDATE_USER:
    return Object.assign({},state,{user:payload});
    case types.UPDATE_DETAIL:
      return Object.assign({},state,{detail:payload.data[payload.id-1]});
    default:
      return state;
  }
};

export default reducer;