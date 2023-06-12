import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import counterReducer from "./reducer";
import thunk from "redux-thunk";
const combineRedux = combineReducers({
  counter: counterReducer,
});
const composeReducer = window.__REDUX_DEVOOL_EXTENTION_COMPOSE__ || compose;
const store = createStore(combineRedux, composeReducer(applyMiddleware(thunk)));
export default store;
