import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
    <Header />
        <div className="flex flex-col gap-2 w-full py-52 justify-center align-center">
        <h1 className="font-mono text-2xl text-center">Buy a course first, if you haven't.</h1>
        <p className='text-center text-2xl text-red-500'>or</p>
        <button onClick={()=>{window.location.href = "https://exponentialworld.exlyapp.com/login"}} className="mx-auto bg-primary text-lg rounded-lg text-bg py-2 px-6">Login</button>
        </div>
        <Footer />
        </>
  )
}

export default Login