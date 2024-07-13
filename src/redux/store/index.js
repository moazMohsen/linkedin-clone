import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import userReducer from "../reducer/userReducer";
import articalReducer from "../reducer/articalReducer";
const rootReducer = combineReducers({
    userState: userReducer,
    articalState: articalReducer

});


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;