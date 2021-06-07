import thunk from "redux-thunk";

import {createStore, combineReducers, applyMiddleware} from "redux";
import authReducer from "../reducers/auth";



//esto de aca abajo hace que cuando importe el default de este archivo, obtenga el store ya creado y configurado con sus reducers
export default (()=>{
    const store = createStore(
        combineReducers({
            auth:authReducer
        }),
        applyMiddleware(thunk));

    return store;
})

