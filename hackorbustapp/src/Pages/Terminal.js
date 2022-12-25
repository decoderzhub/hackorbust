import { React, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../CSS/DarkSideMoon.css";
import Stack from "@mui/material/Stack";
import { useLocation, useSearchParams } from "react-router-dom";

export default function Terminal(props) {
    const [searchparams] = useSearchParams();
    const [course, setCourse] = useState("");
    

  useEffect(() => {
    let temp = searchparams.get("course");
    console.log(temp);
    setCourse(temp);

    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      props.navigate("/terminal");
    }

    if (!authToken) {
      props.navigate("/login");
    }
    return () => {
      <div>Home Page</div>;
    };
  }, []);

  function handleClick() {
    props.navigate("/novice");
  }

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <div className="background-container">
          <div className="stars" />
          <div className="twinkling" />
          <div className="clouds" />
          <img
            className="image"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
            alt="The Moon"
          />

          <div>{course}</div>
        </div>
      </main>
    </ThemeProvider>
  );
}
