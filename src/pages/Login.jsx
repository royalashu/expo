import React from 'react'
import { useEffect } from "react";

function LoginRedirect() {
  useEffect(() => {
    window.location.href = "https://exponentialworld.exlyapp.com/login";
  }, []);

  return null; // Render nothing while redirecting
}


const Login = () => {
  return (
      <LoginRedirect />
  )
}

export default Login