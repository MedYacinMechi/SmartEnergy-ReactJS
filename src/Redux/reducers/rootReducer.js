import { combineReducers } from "redux";
import chartReducer from "./chartReducer";
import Reducer from "./user.reducer";
import { assetReducer } from "./assetsReducer";

const rootReducer = combineReducers({
    chart : chartReducer,
    user : Reducer,
    asset : assetReducer
    
})

export default rootReducer;