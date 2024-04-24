const express = require("express");
const { exec } = require("child_process");

const app = express();
const PORT = process.env.PORT || 33046;

app.use(express.json());

app.post("/webhook", (req, res) => {
  // TODO: add secret
  console.log("req", req);
  //	console.log('res', res);
  // Verify webhook payload authenticity (if using a secret token)

  // Handle different events (e.g., push)
  console.log("🚀 - app.post - req.headers:", req.headers);

  if (req.headers["x-github-event"] === "push") {
    const payload = req?.body;
    const branch = payload?.ref?.split("/")?.pop(); // Extract branch name from ref

    console.log("payload", payload);
    console.log("branch", branch);

    if (typeof branch !== "undefined" && branch === "dev") {
      // Execute deployment script
      res.status(200).send("Deployment process started!");
      exec("bash deploy.sh", (err, stdout, stderr) => {
        if (err) {
          console.error("Deployment failed:", err);
          //  res.status(500).send('Deployment failed');
        } else {
          console.log("Deployment successful");
        }
      });
    } else {
      res.status(400).send("Payload is not valid!");
    }
  } else {
    res.status(400).send("Request is not supported!");
  }
});

app.listen(PORT, () => {
  console.log(`Webhook receiver listening on port ${PORT}`);
});
