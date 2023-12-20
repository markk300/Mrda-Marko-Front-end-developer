const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

const SPACEX_API_BASE_URL = "https://api.spacexdata.com/v3";
const SPACEX_API_KEY = "276ee53e1f3b703c0181f2ac3322a788bb87b301015fa7049a2577b0ef6722f3";

app.get("/capsules", async (req, res) => {
  try {
    const response = await axios.get(`${SPACEX_API_BASE_URL}/capsules`);
    const data = res.json(response.data);
    console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/capsules-authorized", async (req, res) => {
  try {
    const response = await axios.get(`${SPACEX_API_BASE_URL}/capsules`, {
      headers: {
        Authorization: `Bearer ${SPACEX_API_KEY}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/send-data", express.json(), (req, res) => {
  const receivedData = req.body;
  // Process the received data and perform necessary actions
  res.json({ message: "Data received successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
