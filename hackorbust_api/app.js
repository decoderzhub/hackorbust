const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    id: 1,
    title: "HackOrBust WiFi Professionals!",
  });
});

app.get("/novice", (req, res) => {
  res.json([
    {
      id: "airmon-ng",
      course: "airmon-ng",
      level: 1,
      info: "Identifying interfaces and putting in monitor mode",
      difficulty: "easy",
      time: 5,
      completed: -1,
    },
    {
      id: "airodump-ng",
      course: "airodump-ng",
      level: 1,
      info: "Utilize airodump-ng to visualize Wi-Fi networks",
      difficulty: "easy",
      time: 5,
      completed: -1,
    },
    {
      id: "aireplay-ng",
      course: "aireplay-ng",
      level: 1,
      info: "Utilize aireplay-ng attacks and commands",
      difficulty: "easy",
      time: 10,
      completed: -1,
    },
    {
      id: "Deauth",
      course: "Deauth",
      level: 1,
      info: "Disconnect Wi-Fi clients from access point",
      difficulty: "easy",
      time: 10,
      completed: -1,
    },
    {
      id: "Capture",
      course: "Capture",
      level: 1,
      info: "Capture packets from access points to file",
      difficulty: "easy",
      time: 10,
      completed: -1,
    },
    {
      id: "Aircrack-ng",
      course: "Aircrack-ng",
      level: 1,
      info: "Crack Wi-Fi Passwords",
      difficulty: "easy",
      time: 5,
      completed: -1,
    },
  ]);
});

app.get("/airmon-ng", (req, res) => {
  res.json([
    {
      label: "Monitor Mode",
      description: `Place your wireless interface in monitor mode,
                    by running the command:$ sudo airmon-ng start wlan0`,
    },
    {
      label: "Create an ad group",
      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },
    {
      label: "Create an ad",
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
  ]);
});

app.listen(port, () => {
  console.log(`HackOrBust API listening on port ${port}`);
});
