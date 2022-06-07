import axios from "axios";
import moment from "moment";
export const getData = ({time},dataName) => async dispatch => {
    try{
        dispatch({
            type : "FETCH_DATA"
        })
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/historical-chart/${time}/BTCUSD?apikey=2d88602f8fa14049eb3c1b94c62c86ef`)
        console.log(response)
        const labels = [];
        const data = [];
        const name = dataName;
        for (let i=0; i < response.data.length; i++){
            data.unshift(response.data[i].close)
            labels.unshift(moment(response.data[i].date).format('LT'))
        }
        dispatch({
            type: "FETCH_SUCCESS",
            payload: {
                name,
                data,
                labels
            }
        })

    } catch (e){
        dispatch({
            type : "FETCH_FAILURE",
        })

    }
}