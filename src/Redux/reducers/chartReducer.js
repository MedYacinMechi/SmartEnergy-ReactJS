const initialState = {
    loading : false,
    chartsData : {},
};

const chartReducer = (state = initialState, action) => {
    const {type, payload}= action;
    switch(type){
        case "FETCH_DATA":
            return {
                ...state,
                loading: true,
            }
        case "FETCH_FAILURE" :
            return {
                ...state,
                loading: false
            }  
        case "FETCH_SUCCESS" :
            return {
                ...state,
                loading: false,
                chartsData : {
                    ...state.chartsData,
                    [payload.name]:{
                        data:payload.data,
                        labels:payload.labels}
                    },
            }     
        default:
            return state;
    }

}

export default chartReducer;