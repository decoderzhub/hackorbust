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
import { authToken } from "../Utilities/functions";
import { useInterval } from "../Components/useInterval";
import BasicModal from "../Components/BasicModal";
import Logo from "../Components/Logo";
import { orderBy, query, collection, getDocs } from "firebase/firestore";
import { db } from "../Utilities/firebase-config";

const FETCH_REFRESH_INTERVAL = 3000;

export default function Terminal(props) {
  const [searchparams] = useSearchParams("");
  const [course, setCourse] = useState("");
  const [acceptSSL, setAcceptSSL] = useState(false);
  const [data, setData] = useState([
    {
      label: "Loading...",
      description: `Retreving...`,
    },
  ]);

  useInterval(
    async () => {
      console.log("Fetching Url");
      const response = await fetch("https://198.58.120.118:4433", {
        mode: "no-cors",
      }).catch((error) => {
        if (error) {
          console.log("SSL needs to be accepted");
        } else {
          setAcceptSSL(true);
        }
      });
      console.log(response);
      if (response) {
        setAcceptSSL(true);
        sessionStorage.setItem("acceptSSL", true);
        console.log(response.status);
      }
    },
    FETCH_REFRESH_INTERVAL,
    acceptSSL
  );

  useEffect(() => {
    let ssl = sessionStorage.getItem("acceptSSL");

    if (ssl) {
      setAcceptSSL(true);
    }

    let params = searchparams.get("course");

    if (params !== "") {
      setCourse(params);
    }
    retrieveDocs();
  }, []);

  // useEffect(() =>{
  //   fetchData(baseURL, course, setData);
  //     console.log(data);
  // })

  async function retrieveDocs() {
    let data = [];
    let docCollections = collection(
      db,
      "Courses",
      "airmon-ng",
      "airmon-ng-course"
    );
    const docQueryRef = query(docCollections, orderBy("id", "asc"));
    const result = await getDocs(docQueryRef);
    result.forEach((doc) => {
      data.push(doc.data());
    });
    // console.log(data)
    setData(data);
  }

  useEffect(() => {
    if (authToken()) {
      props.navigate("/terminal");
    }

    if (!authToken()) {
      props.navigate("/");
    }
  }, []);

  function Header() {
    switch (course) {
      case "airmon-ng":
        return (
          <div>
            <Typography variant="h5" component="h2" marginTop="2%">
              learn {course} command instance
            </Typography>
          </div>
        );
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
      {acceptSSL ? null : <BasicModal />}
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
            <Header />
            <Grid container spacing={2}>
              <Grid xs={8}>
                <Box sx={{ flexGrow: 1}}>
                  {acceptSSL ?  
                    (
                    <iframe
                      title="terminal"
                      src={
                        "https://198.58.120.118:4433/?port=6807&hostname=198.58.120.118&username=wifipro&password=a2FsaQo=&command=tmux"
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
                    ):(
                    <div>
                      <Logo
                        style={{
                          position: "relative",
                          marginTop: 50,
                          width: "95%",
                          height: "100vh",
                          opacity: 0.7,
                          outlineStyle: "outset",
                          outlineColor: "red",
                        }}
                      />
                      <h2>Awaiting SSL to continue...</h2>
                    </div>
                  )}
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
                    marginRight: "3%",
                  }}
                >
                  <div style={{ marginTop: 50, marginLeft: "10%" }}>
                    <VerticalLinearStepper data={data} />
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
