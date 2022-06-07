import { createStore, applyMiddleware, compose} from "redux"
import thunk from 'redux-thunk'
import rootReducer from "Redux/reducers/rootReducer";
//import {composeWithDevTools} from "redux-devtools-extension";
//npm rm for removing a dependancy

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)) );
export default store;