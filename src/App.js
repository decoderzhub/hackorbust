import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
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
  const [state, setState] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/home");
    }
    console.log(state);
    console.log(email, password);
    const authentication = getAuth();
    if (state === "Register") {
      createUserWithEmailAndPassword(authentication, email, password).then(
        (response) => {
          navigate("/home");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        }
      );
    }
    if (state === "Login") {
      signInWithEmailAndPassword(authentication, email, password).then(
        (response) => {
          navigate("/home");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        }
      );
    }

  }, [state]);

  return (
    <div className="App">
      <>
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
