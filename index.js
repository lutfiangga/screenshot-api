import express from "express";
import cors from "cors";
import puppeteer from "puppeteer";

const app = express();
app.get("/", (_, res) => {
  res.status(200).send("API OK");
});
app.get("/screenshot", async (req, res) => {
  const { url } = req.query;
  !url && res.status(400).send("URL is Required");
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle2" });
    const screenshot = await page.screenshot({
      encoding: "base64",
      fullPage: true,
    });
    await browser.close();

    res.setHeader("contentType", "text/html");
    res.send(
      `<img src="data:image/png;base64,${screenshot}" alt="screenshot" style="max-width:100%; height:auto">`
    );
  } catch (error) {
    res.status(500).send("error generating screenshot: " + error.message);
  }
});
app.use(cors());
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
