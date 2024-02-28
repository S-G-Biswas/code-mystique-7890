import React, { Component, useState } from "react";
import { useToast } from "@chakra-ui/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:8080/users/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.accessToken) {
          // alert("login successful");
          // toast({
          //   title: "Login Successful",
          //   description: "You have successfully logged in.",
          //   status: "success",
          //   duration: 5000,
          //   isClosable: true,
          // });
          window.localStorage.setItem("email",email)
          window.localStorage.setItem("token", data.accessToken);
          window.localStorage.setItem("loggedIn", true);
              ///for admin
                if(email=="admin@gmail.com"){
                  toast({
                    title: "Login Successful",
                    description: "You have successfully logged in.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                  });
            window.location.href="/adminstocks"
            }
              else{
                toast({
                  title: "Login Successful",
                  description: "You have successfully logged in.",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                });
            //forusers
          window.location.href = "/";
          }
        }else{
          alert("user not found")
        }
        
      }).catch(err=>{console.log(err)});
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <a style={{color:"black"}} href="/sign-up">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}