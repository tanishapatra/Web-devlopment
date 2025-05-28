// 5.4+API+Authentication
import express from "express";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

const yourUsername = "Disha";
const yourPassword = "t12345t";
const yourAPIKey = "e1320fa2-c870-4819-8d30-9ce46a035357";
const yourBearerToken = "d4dde393-96b5-412f-9b63-20a66a2c564b";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Click a button to get a secret!" });
});

app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(`${API_URL}/random`);
    res.render("index.ejs", { content: JSON.stringify(result.data, null, 2) });
  } catch (error) {
    res.render("index.ejs", { content: "Error: " + error.message });
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const result = await axios.get(`${API_URL}/all?page=2`, {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data, null, 2) });
  } catch (error) {
    res.render("index.ejs", { content: "Basic Auth Error: " + error.message });
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const result = await axios.get(`${API_URL}/filter`, {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data, null, 2) });
  } catch (error) {
    res.render("index.ejs", { content: "API Key Error: " + error.message });
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(`${API_URL}/secrets/42`, {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data, null, 2) });
  } catch (error) {
    res.render("index.ejs", { content: "Bearer Token Error: " + error.message });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
