import React, {useState } from "react";
import { useToast } from "@chakra-ui/react";


export default function SignUp() {
  const [username, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {

      e.preventDefault();

      console.log(username,email, password);
      fetch("http://localhost:8080/users/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data) {
            // alert("Registration Successful");
            toast({
              title: "Register Successful",
              description: "You have successfully Registered.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            window.location.href = "/sign-in";
          } 
          else {
            // alert("Something went wrong");
            toast({
              title: "Register Failed",
              description: "There is some error",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
            
          }
        });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>User name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setUname(e.target.value)}
            />
          </div>

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

          <div className="d-grid">
            <button type="submit" className="btn btn-dark">
              Sign Up
            </button>
          </div>
          <p  className="forgot-password text-right">
            Already registered <a style={{color:"black"}} href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}