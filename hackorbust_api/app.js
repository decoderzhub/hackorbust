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

app.get("/airmon-ng"), (req, res) => {
  

}

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

app.listen(port, () => {
  console.log(`HackOrBust API listening on port ${port}`);
});
