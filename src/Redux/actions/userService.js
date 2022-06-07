import axios from "axios";

export function login(username, password){
    //axios call
    const postData = {
        username,
        password,
    };
    return axios.post(`https://things.sofia-networks.com:443/api/auth/login`,postData );
}


