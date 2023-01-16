import { React, useEffect } from "react";
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
import ShootingStars from "../Components/ShootingStars";
import Stack from "@mui/material/Stack";
import { homeImages, cards } from "../Utilities/static";
import { authToken } from "../Utilities/functions";
import { getAuth } from "firebase/auth";

export default function Home(props) {
  useEffect(() => {
    if (authToken()) {
      props.navigate("/home");
    }

    if (!authToken()) {
      props.navigate("/");
    }
  }, []);

  const handleImage = (index) => {
    return homeImages[index];
  };

  function handleClick(e) {
    const target = e.currentTarget.id;
    switch (parseInt(target)) {
      case 0:
        props.setState("Novice");
        break;
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
          <Container maxWidth="sm">
            <Typography
              variant="h6"
              align="center"
              color="text.primary"
              paragraph
              style={{ marginTop: "100px" }}
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
            ></Stack>
          </Container>
          <Container sx={{ py: 1, paddingTop: "0" }} maxWidth="lg">
            <Grid container spacing={12}>
              {cards.map((card, index) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      width: "100%",
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
                      <Button
                        size="small"
                        sx={{ flexGrow: 1 }}
                        id={index}
                        onClick={handleClick}
                      >
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
        </div>
      </main>
    </ThemeProvider>
  );
}
