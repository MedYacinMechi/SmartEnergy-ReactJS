import {LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS} from "../constants/user.constants";   

import { login } from "./userService";

export function getLogin (username, password, onSuccess){
    return (dispatch) => {
        login(username,password).then((response) => {
            console.log(response.data);
            dispatch(LoginSuccess(response.data));
            onSuccess("/admin")
        }).catch((error) => {
            if (error.response) {
                const errorMsg = error.response.data.message;
                alert(errorMsg);
                dispatch(LoginFailure(errorMsg));
              } else if (error.request) {
                console.log("network error");
              } else {
                console.log(error);

              }
        });
    }
}

export function LoginSuccess(payload){
    return{
        type : LOGIN_SUCCESS,
        payload,
    };
}

export function LoginFailure(message){
    return{
        type : LOGIN_FAILURE,
        payload: message,
    };
}


// async function login (username, password) {
//     return axios
//       .post('https://things.sofia-networks.com:443/api/auth/login', { username, password })
//       .then((response) => {
//         if (response.data.accessToken) {
//           console.log(JSON.stringify(response.data));
//         }
//         return response.data;
//       });
//   }


// export const getLogin = (username, password) => (dispatch) => {
//     return login(username,password).then(
//         (data) => {
//             dispatch({
//               type: LOGIN_SUCCESS,
//               payload: { user: data },
//             });
//             return Promise.resolve();
//           },
//           (error) => {
//             const message =
//               (error.response &&
//                 error.response.data &&
//                 error.response.data.message) ||
//               error.message ||
//               error.toString();
//             dispatch({
//               type: LOGIN_FAILURE,
//             });
//             dispatch({
//                 type: SET_MESSAGE,
//                 payload: message,
//             });
//             return Promise.reject();
            
//           }
//     )
// }




export const getLogout = () => {
    return({
        type: LOGOUT_SUCCESS
    })
}


