import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CssBaseline from "@mui/material/CssBaseline";

function Footer() {
  function Copyright() {
    return (
      <Typography variant="body2" color="lightgrey" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://www.HackOrBust.com/">
          HackOrBust
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "92vh",
        zIndex: -1,
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) => theme.palette.grey[900],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" color="white">
            You&apos;re A God D*#? Wi-Fi Professional!
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
