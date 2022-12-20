import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation
} from "react-router-dom";
import { app } from "./Utilities/firebase-config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [state, setState] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.setState === ""){
      return
    }

    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/home");
    }
    //console.log(state);
    //console.log(email, password);
    const authentication = getAuth();
    if (state === "Register") {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/home");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          toast.error("Email Already in Use");
          if (error.code === "auth/email-already-in-use") {
          }
        });
    }
    if (state === "Login") {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/home", {setEmail, setPassword});
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            toast.error("Please check the Password");
          }
          if (error.code === "auth/user-not-found") {
            toast.error("Please check the Email");
          }
        });
    }
  }, [state, email, password]);

  return (
    <div className="App">
      <>
        <ToastContainer />
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                setEmail={setEmail}
                setPassword={setPassword}
                setState={setState}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                setEmail={setEmail}
                setPassword={setPassword}
                setUsername={setUsername}
                setState={setState}
              />
            }
          />
          <Route path="/home" element={<Home />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
