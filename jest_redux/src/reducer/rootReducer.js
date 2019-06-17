

import {combineReducers} from 'redux';


const userDataReducer = (state={},action)=>{
    switch(action.type){
        case "FETCHASYNC" :
        console.log("I am third",action.payload,state);
        return ({
            ...state,
            data : action.payload
        })
        case "FETCHERROR":
        console.log("Error",action.payload);
        case "CURRENTDATA" :
        console.log("payload",action.payload)
        return ({
            ...state,
            currentData : action.payload
        })
      }
   return state;
}

/*const rootReducer = combineReducers({userDataReducer}) 
console.log("rootReducer",rootReducer)*/

export default userDataReducer;