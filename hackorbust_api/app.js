const express = require("express");
const cors = require("cors");
const app = express();
const port = 55623;

var https = require('https');
var fs = require('fs');


var https_options = {
key: fs.readFileSync("ssl/key.pem"),
cert: fs.readFileSync("ssl/cert.pem"),
ca: [
fs.readFileSync('ssl/rootca.pem'),
// fs.readFileSync('./rootca.crt')
]
};

app.use(cors());

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });

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
      description: `Place your interface wlan1 into monitor mode with the command: sudo ip link set wlan1 down`,
    },
    {
      label: "Change Mode",
      description:
        "Next command to change wlan1 to monitor mode: sudo iwconfig wlan1 mode monitor",
    },
    {
      label: "Device Up",
      description: `last step is to bring the wireless interface back up: sudo ip link dev wlan1 up`,
    },
    {
      label: "Check Interface",
      description: `by running the command: sudo ip show wlan1 you can check to see if the device is back up`,
    },
    {
      label: "Check Mode",
      description: `finally we will check that the mode is in monitor mode by using command: iwconfig wlan1`,
    },

  ]);
});

// app.listen(port, () => {
//   console.log(`HackOrBust API listening on port ${port}`);
// });


https.createServer(https_options, app, function (req, res) {
  res.writeHead(200);
  res.end("Welcome to Node.js HTTPS Servern");
},
console.log(`HackOrBust API listening on port ${port}`)

  ).listen(port)
