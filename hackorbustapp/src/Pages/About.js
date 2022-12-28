import { React, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import logo from "../Images/Logo.png";
import "../CSS/DarkSideMoon.css";
import ShootingStars from "../Components/ShootingStars";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.HackOrBust.com/">
        HackOrBust
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Logo() {
  return (
    <img
      src={logo}
      alt="Logo"
      style={{
        height: "60%",
        width: "100%",
        marginTop: "-100px",
        marginBottom: "0px",
        padding: "0px 0px 0px 0px",
      }}
    />
  );
}

const cards = [1, 2, 3];

export default function Home() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(true);

  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/", { setEmail: "", setPassword: "", setState: "" });
  };

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/home");
    }

    if (!authToken) {
      navigate("/");
    }
    return () => {
      <div>Home Page</div>;
    };
  }, []);

  const handleImage = (index) => {
    switch (index) {
      case 0:
        return "https://images.nightcafe.studio/jobs/maWArkJZKHIdmOtatM1I/maWArkJZKHIdmOtatM1I--1--8rodo.jpg";
      case 1:
        return "https://images.nightcafe.studio/jobs/U7M6MkSoJKx9Z6dRMS6K/U7M6MkSoJKx9Z6dRMS6K--1--96hcx.jpg";
      case 2:
        return "https://images.nightcafe.studio/jobs/pjxEh1aO98pQq42LIwIB/pjxEh1aO98pQq42LIwIB--1--61rk7.jpg";
      default:
        break;
    }
  };

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar handleLogout={handleLogout}/>
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
          <Container maxWidth="sm" style={{ zIndex: "1000 !important" }}>
            <Logo />
          </Container>
          <Container maxWidth="sm">
            <Typography
              variant="h6"
              align="center"
              color="text.primary"
              paragraph
              style={{ marginTop: "-100px" }}
            >
              Weclome to HackOrBust where you can learn how to penetrate
              wireless networks. These wireless networks range from routers to
              wireless devices. Come here to practice and compete agains others
              in our HackOrBust battlegrounds!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
              style={{ paddingBottom: "30px" }}
            >
              <Button variant="contained">Subscribe</Button>
              <Button variant="outlined">Learn More</Button>
            </Stack>
          </Container>
          <Container sx={{ py: 1 }} maxWidth="md">
            <Grid container spacing={8}>
              {cards.map((card, index) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      width: "120%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      style={{ paddingTop: "0px" }}
                      component="img"
                      sx={{
                        // 16:9
                        pt: "56.25%",
                      }}
                      image={handleImage(index)}
                      alt="random"
                    ></CardMedia>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {index === 0 && "Novice"}
                        {index === 1 && "Intermediate"}
                        {index === 2 && "Professional"}
                      </Typography>
                      <Typography>
                        {index === 0 &&
                          "Enter here if you know the basics and ready to get more keystroke reps."}
                        {index === 1 &&
                          "You know what you're doing and ready for a challenge."}
                        {index === 2 &&
                          "Earn incentives for your hardwork. Get the Flags and pop some tags!"}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" sx={{ flexGrow: 1 }}>
                        {index === 0 && "You gonna learn today!"}
                        {index === 1 && "Let the games begin!"}
                        {index === 2 && "Danger zone!"}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>

          {/* Footer */}
          <Typography variant="h6" align="center" gutterBottom>
            Don't give up...
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            You&apos;re A God D*#? Wi-Fi Professional!
          </Typography>
          <Copyright />
          {/* End footer */}
        </div>
      </main>
    </ThemeProvider>
  );
}
