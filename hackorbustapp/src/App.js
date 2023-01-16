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
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import app from "./Utilities/firebase-config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";

let _email = ""
let _username = ""

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
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
    //console.log(email, password, username);
    const authentication = getAuth();
    async function register() {
      await createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
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
      let auth = getAuth()
      console.log(auth.currentUser)
      await updateProfile(auth.currentUser, { displayName: username }).catch((err) => toast.error(err));
      navigate("/home");
    }

    if (state === "Register") {
      register()
    }
    if (state === "Login") {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
          setUsername(response.user.displayName)
          _username = response.user.displayName
          setEmail(response.user.email)
          _email = response.user.email
          navigate("/home");
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
    if(state === "airmon-ng") {
      let auth = getAuth()
      setUsername(auth.displayName)
      navigate("/terminal", { state })
    }
    switch (state) {
      case "Novice":
        navigate("/Novice")
        break;
      case "airmon-ng":
        navigate("/terminal", { state })
        // navigate({
        //   pathname: '/terminal',
        //   search: `?username=${_username}`,
        // })
        break;
      default:
        break;
    }
   
  }, [state, email, password, username]);


  

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
              setUsername={setUsername}
              setState={setState}
            />
          }
        />
        <Route
          path="/home"
          element={
            <div>
              <ResponsiveAppBar
                navigate={navigate}
                handleLogout={handleLogout}
              />
              <Home navigate={navigate} setState={setState}/>
              <Footer />
            </div>
          }
        />
        <Route
          path="/novice"
          element={
            <div>
              <ResponsiveAppBar
                navigate={navigate}
                handleLogout={handleLogout}
              />
              <Novice navigate={navigate} location={location} setState={setState} />
              <Footer />
            </div>
          }
        />
        <Route
          path="/terminal"
          element={
            <div>
              <ResponsiveAppBar
                navigate={navigate}
                handleLogout={handleLogout}
              />
              <Terminal navigate={navigate} location={location} setState={setState} username={_username}/>
              <Footer />
            </div>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
