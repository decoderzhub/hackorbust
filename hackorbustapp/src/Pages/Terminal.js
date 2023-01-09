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
import { orderBy, query, collection, getDocs } from "firebase/firestore";
import { db } from "../Utilities/firebase-config";

export default function Terminal(props) {
  const [searchparams] = useSearchParams("");
  const [course, setCourse] = useState("");
  const [data, setData] = useState([
    {
      label: "Loading...",
      description: `Retreving...`,
    },
  ]);

  useEffect(() => {
    let params = searchparams.get("course");

    if (params !== "") {
      setCourse(params);
    }
    retrieveDocs();
  }, []);

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
            <Grid container spacing={1}>
              <Grid xs={2}></Grid>
              <Grid xs={8}>
                <Box
                  sx={{
                    flexGrow: 1,
                    backgroundColor: "rgb(18, 18, 18, 0.7)",
                    maxHeight: "80vh",
                    alignContent: "center",
                    outlineStyle: "solid",
                    outlineColor: "red",
                    margin: "0 20px 0 30px",
                  }}
                >
                  <div style={{ marginTop: 50, marginLeft: "25%" }}>
                    <VerticalLinearStepper data={data} />
                  </div>
                </Box>
              </Grid>
              <Grid xs={2}></Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid xs={12}>
                <Box sx={{ flexGrow: 1 }}>
                  {
                    <iframe
                      title="terminal"
                      src={
                        "https://hackerbust.com/?port=6807&hostname=198.58.120.118&username=wifipro&password=a2FsaQo=&command=tmux"
                      }
                      style={{
                        position: "relative",
                        margin: "100px 20px 0 30px",
                        width: "97.5%",
                        height: "100vh",
                        opacity: 0.7,
                        outlineStyle: "outset",
                        outlineColor: "red",
                      }}
                    ></iframe>
                }
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      </main>
    </ThemeProvider>
  );
}
