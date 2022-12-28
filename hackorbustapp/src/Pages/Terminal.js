import { React, useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../CSS/DarkSideMoon.css";
import { useSearchParams } from "react-router-dom";
import VerticalLinearStepper from "../Components/VerticalLinearStepper";
import ShootingStars from "../Components/ShootingStars";
import { Typography } from "@mui/material";


export default function Terminal(props) {
  const [searchparams] = useSearchParams();
  const [course, setCourse] = useState("");

  useEffect(() => {
    let temp = searchparams.get("course");
    console.log(temp);
    if (temp) {
      setCourse(temp);
    }

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

  function Header() {
    switch (course) {
        case "airmon-ng":
            return ( 
                <Typography variant="h5" component="h2" marginTop="2%">
                learn {course} command instance
                </Typography>
            )
        default:
            break;
    }
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
          <ShootingStars />
          <Box sx={{ flexGrow: 1 }}>
                <Header/>
            <Grid container spacing={2}>
              <Grid xs={8}>
                <Box sx={{ flexGrow: 1 }}>
                  <iframe
                    title="terminal"
                    src={
                      "http://10.0.0.91:6807?hostname=kali&username=kali&password=a2FsaQo="
                    }
                    style={{
                      position: "relative",
                      marginTop: 50,
                      width: "95%",
                      height: "100vh",
                      opacity: 0.7,
                      outlineStyle: "outset",
                      outlineColor: "red",
                    }}
                  ></iframe>
                </Box>
              </Grid>
              <Grid xs={4}>
                <Box
                  sx={{
                    flexGrow: 1,
                    backgroundColor: "rgb(18, 18, 18, 0.7)",
                    height: "100vh",
                    alignContent: "center",
                    outlineStyle: "solid",
                    outlineColor: "red",
                    marginRight: "3%"
                  }}
                >
                  <div style={{ marginTop: 50, marginLeft: "10%" }}>
                    <VerticalLinearStepper />
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      </main>
    </ThemeProvider>
  );
}
