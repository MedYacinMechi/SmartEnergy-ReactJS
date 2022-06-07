
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "Redux/store/store";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.5.0";
import "assets/css/demo.css";
import App from './App';

//axios.defaults.baseUrl="https://things.sofia-networks.com:443"

ReactDOM.render(
  <React.Fragment>
    <Provider store ={store}>
    <App />
    </Provider>
    
  </React.Fragment>,
  document.getElementById("root")
);
