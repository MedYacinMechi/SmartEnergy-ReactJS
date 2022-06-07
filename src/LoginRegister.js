
import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {getLogin} from "./Redux/actions/user.actions"
import { useHistory } from "react-router-dom";
import "./assets/css/Style.LoginRegister.scss";
import { SocialContainer, Link, Span, Head, Text, Div } from "./layouts/index.style.js";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { CircularProgress } from "@mui/material";


export const LoginRegister = () => {
  let errorsObj = {username: '', password: ''};
  const [errors, setErrors]=useState(errorsObj);

  // const [name, setName]=useState('');
  
    const history = useHistory()

    const [username, setUsername]=useState('amine@sofia-technologies.com');
    const [password, setPassword]=useState('amine25416990');
    const dispatch = useDispatch();

    const [loading, setLoadding]=useState(false);
    

    const handleSubmit = (e) => {
      setLoadding(true);
      e.preventDefault();
      const errorObj ={...errorsObj}
      let error =false;
       if  (username==='') {
          errorObj.username ="Please input your email.";
          error =true;
        } 
        
        if (password===''){
          errorObj.password ="Please input your password.";
          error =true;
        }
        setErrors(errorObj);

        if (error){ 
          setLoadding(false)
          return;}
          dispatch(getLogin(username, password, history.push));    
  }

  const [addclass, setaddclass] = useState("");
  return (
   
    <div className="AuthView">
    <div className={`container ${addclass}`} id="container">
      <div className="form-container  sign-up-container">
        <form onSubmit={()=>{}}> 
          <h1>Create Account</h1>
          <SocialContainer>
              <Link href="#" className="social">
                <i className="fab fa-google-plus-g"><GoogleIcon/></i>
              </Link>
              <Link href="#" className="social">
                <i className="fab fa-facebook"><FacebookIcon /></i>
              </Link>
          </SocialContainer>
          <Span>or use your email for registration</Span>
          <input type="text" placeholder="NAME" />
          {/* {errors.name && <Div>{errors.name}</Div> } */}
          <input type="email" placeholder="EMAIL" />
          {/* {errors.email && <Div>{errors.email}</Div> } */}
          <input type="password" placeholder="PASSWORD"  />
          {/* {errors.password && <Div>{errors.password}</Div> } */}
          
          <button type="submit">REGISTER</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <SocialContainer>
              <Link href="#" className="social">
                <i className="fab fa-google-plus-g" ><GoogleIcon/></i>
              </Link>
              <Link href="#" className="social">
                <i className="fab fa-facebook"><FacebookIcon /></i>
              </Link>
            </SocialContainer>
            <Span>or use your account</Span>
          <input type="email" placeholder="EMAIL" value={username} onChange={(e) => setUsername(e.target.value)} />
          {errors.username && <Div>{errors.username}</Div> }
          <input type="password" placeholder="PASSWORD" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <Div>{errors.password}</Div> }
          <Link href="#">Forgot your password?</Link>
          { !loading && <button type="submit" >LOGIN</button>}
          { loading && <button style={{paddingBottom:10, paddingLeft:50, paddingRight:50,display: 'flex',alignItems:'center'}} type="submit" disabled >
             
              <CircularProgress  size={20} color="inherit" />
          </button>}
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <Head>Welcome!</Head>
            <Text>If you already have an account, let's login to see something awesome!</Text>
            <button
              className="ghost"
              id="signIn"
              onClick={() => setaddclass("")}
            >
              GO TO LOGIN
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <Head>Hello, Friend!</Head>
            <Text>If you don't have an account, enter your personal details and start with us</Text>
            <button
              className="ghost"
              id="signUp"
              onClick={() => setaddclass("right-panel-active")}
            >
              GO TO REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

