import {LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_FAILURE} from "../constants/user.constants"

const initialState = {
    isAuthenticated: localStorage.getItem('authApp') || false,
    user:{
        token: "",
        refreshToken:"",         
    },
    errorMessage: "",
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('authApp', true)
            return {
                ...state,
                isAuthenticated: true,
                user: {
                    token:action.payload.token,
                    refreshToken:action.payload.refreshToken,
                },
            }
        case LOGIN_FAILURE:
            return {
                 ...state,
                isAuthenticated: false,
                errorMessage: action.payload,
    
            }    
        case LOGOUT_SUCCESS:
            localStorage.setItem('authApp', false)
            console.log('logged out')
            return {
                ...initialState,
                isAuthenticated: false,
            }    
        default:
            return state
    }
}
export default Reducer