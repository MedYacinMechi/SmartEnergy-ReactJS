import { AssetActions } from "Redux/constants/user.constants"

export const getAssets = (assets) =>{
    return{
        type: AssetActions.GET_ASSETS,
        payload : assets
    };
}

export const selectedAsset = (asset) =>{
    return{
        type: AssetActions.SELECTED_ASSET,
        payload : asset
    };
}