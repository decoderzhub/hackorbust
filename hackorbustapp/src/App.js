import React, { useState, useEffect } from "react";
import "./CSS/App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Novice from "./Pages/Novice";
import Terminal from "./Pages/Terminal";
import NotFoundPage from "./Components/NotFoundPage";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Routes,
  Route,
  useNavigate,  
  useLocation,
} from "react-router-dom";
import app  from "./Utilities/firebase-config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [onload, setOnload] = useState("");
  const [state, setState] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setOnload(1);
    

    // let authToken = sessionStorage.getItem("Auth Token");
    
    // if (authToken) {

    //   navigate("/home");
    // }
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
          navigate("/home", { setEmail, setPassword });
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

  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    setEmail("");
    setPassword("");
    setState("");
    navigate("/");
  };

  return (
    <div className="App">
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              <Login
                setEmail={setEmail}
                setPassword={setPassword}
                setState={setState}
                onload={onload}
                location={location}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                setEmail={setEmail}
                setPassword={setPassword}
                setState={setState}
              />
            }
          />
          <Route
            path="/home"
            element={
              <div>
                <ResponsiveAppBar navigate={navigate} handleLogout={handleLogout} />
                <Home navigate={navigate} />
                <Footer />
              </div>
            }
          />
          <Route
            path="/novice"
            element={
              <div>
                <ResponsiveAppBar navigate={navigate} handleLogout={handleLogout} />
                <Novice navigate={navigate} location={location}/>
                <Footer />
              </div>
            }
          />
          <Route
            path="/terminal"
            element={
              <div>
                <ResponsiveAppBar navigate={navigate} handleLogout={handleLogout} />
                <Terminal navigate={navigate} location={location}/>
                <Footer />
              </div>
            }
          />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    </div>
  );
}

export default App;
