import * as types from './types'
export const asyncAction =  (url,dispatch,type)=>{
  setTimeout(() => {
    fetch(
      url
    ).then(
      res => res.json()
    ).then(
      data => {
        dispatch({type:types.VIEW_LOADING,payload:false});
        //修改状态管理状态
        dispatch({type:type,payload:data});
      }
    )                                                        
  }, 1000);

  return {type:types.VIEW_LOADING,payload:true};

};

export const asyncAction2 =  (url,dispatch,type,id)=>{
  setTimeout(() => {
    fetch(
      url
    ).then(
      res => res.json()
    ).then(
      data => {
        dispatch({type:types.VIEW_LOADING,payload:false});
        //修改状态管理状态
        dispatch({type:type,payload:{data, id}});
      }
    )
  }, 1000);

  return {type:types.VIEW_LOADING,payload:true};
};

// export const asyncAction3 =  (url,dispatch,type)=>{
//   setTimeout(() => {
//     fetch(
//       url
//     ).then(
//       res => res.json()
//     ).then(
//       data => {
//         dispatch({type:types.VIEW_LOADING,payload:false});
//         // dispatch({type:types.UPDATE_USER,payload:{auth:true}})
//         //修改状态管理状态
//         dispatch({type:type,payload:data});
//         // console.log(data)
//       }
//     )
//   }, 1000);

//   return {type:types.VIEW_LOADING,payload:true};
// };


