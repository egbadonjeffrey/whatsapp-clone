import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import Logo from "../../image/ScarlettDigital-smaller.png";
import { auth, provider } from "../../Firebase";
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";

const Login = () => {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={Logo} alt="WhatsApp Thumbnail" />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
};

export default Login;
