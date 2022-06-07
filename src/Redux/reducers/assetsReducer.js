import { AssetActions } from "Redux/constants/user.constants";
const initialState = {
    assets : [],
}
export const assetReducer =(state = initialState, {type, payload}) =>{
    switch(type){
        case AssetActions.GET_ASSETS :
            return {
                ...state,
                assets: payload,
            }
        default :
            return state;    
    }

}