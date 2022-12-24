import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { grey } from "@mui/material/colors";
import Logo from "../Components/Logo";
import BackgroundEffect from "../Components/BackgroundEffect";
import "../CSS/BackgroundEffect.scss";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.HackOrBust.com/">
        HackOrBust.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Login({ setEmail, setPassword, setState, onload }) {
  const location = useLocation();
  const [image, setImage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setEmail(data.get("email"));
    setPassword(data.get("password"));
    setState("Login");
  };

  useEffect(() => {
    setEmail(location.setEmail);
    setPassword(location.setPassword);
    setState(location.state);
    return () => {};
  }, [setEmail, setPassword, setState, location]);

  useEffect(() => {
    if (onload === 1) {
      let min = Math.ceil(1);
      let max = Math.floor(6);
      let randnum = Math.floor(Math.random() * (max - min + 1)) + min;
      imageSelector(randnum);
    }
    return () => {};
  }, [onload]);

  function imageSelector(num) {
    switch (num) {
      case 1:
        setImage(
          "url(https://images.nightcafe.studio/jobs/uMyx3vNEDMXKLGbjeKkw/uMyx3vNEDMXKLGbjeKkw--1--910dr.jpg)"
        );
        break;
      case 2:
        setImage(
          "url(https://images.nightcafe.studio/jobs/5U8N1CR5Is9x6xHhj4yW/5U8N1CR5Is9x6xHhj4yW--1--aofva.jpg)"
        );
        break;
      case 3:
        setImage(
          "url(https://images.nightcafe.studio/jobs/L3Ft3QLEYTrtMjqi1Ywq/L3Ft3QLEYTrtMjqi1Ywq--1--q71og.jpg)"
        );
        break;
      case 4:
        setImage(
          "url(https://images.nightcafe.studio/jobs/S8xkw87IxXLiZZXOqaIv/S8xkw87IxXLiZZXOqaIv--1--lfw60.jpg)"
        );
        break;
      case 5:
        setImage(
          "url(https://images.nightcafe.studio/jobs/wpehXmCpMRKxDyfyBzP4/wpehXmCpMRKxDyfyBzP4--1--vx872.jpg)"
        );
        break;
      case 6:
        setImage(
          "url(https://images.nightcafe.studio/jobs/Qv1Cais36KlYgnLT6oiz/Qv1Cais36KlYgnLT6oiz--1--985tf.jpg)"
        );
        break;
      default:
        return "";
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: image,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <BackgroundEffect/>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            style={{zIndex: 1, position: "absolute", top: 0}}
          >
            <Logo />
            <Avatar sx={{ m: 1, bgcolor: grey }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
