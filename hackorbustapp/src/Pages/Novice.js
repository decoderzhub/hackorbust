import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../CSS/DarkSideMoon.css";
import ShootingStars from "../Components/ShootingStars";
import Stack from "@mui/material/Stack";
import StickyHeadTable from "../Components/StickyHeadTable";
import { baseURL } from "../Utilities/static";
import { authToken, fetchData } from "../Utilities/functions";

export default function Novice(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(baseURL, props, setData)
  }, []);

 
  useEffect(() => {

    if (authToken()) {
      props.navigate("/novice");
    }

    if (!authToken()) {
      props.navigate("/");
    }

  }, []);

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
          <Container maxWidth="sm">
            <Typography
              variant="h6"
              align="center"
              color="text.primary"
              paragraph
              style={{ marginTop: "100px" }}
            >
              In the Novice room you can learn the basics before entering the
              battlegrounds. Prove that you are worthy of being a WiFi
              Professional. Complete all Novice exercises before entering the
              battlegrounds. Good Luck!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
              style={{ paddingBottom: "30px" }}
            ></Stack>
          </Container>
          <Container sx={{ py: 1, paddingTop: "0", justifyContent: "center" }} maxWidth="lg">
              <StickyHeadTable tableData={data} props={props}/>
          </Container>
        </div>
      </main>
    </ThemeProvider>
  );
}
