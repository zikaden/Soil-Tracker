require("dotenv/config");
require("./db");
const express = require("express");
const { isAuthenticated } = require("./middleware/jwt.middleware");

const app = express();

require("./config")(app);

// Start handling routes here
const allRoutes = require("./routes");
app.use("/api", allRoutes);

//isAuthenticated comes from the middleware and checks if the user is logged in

//authentication route
const authRouter = require("./routes/auth.routes");
app.use("/api/auth", authRouter);

//authentication route
const sitesRouter = require("./routes/sites.routes");
app.use("/api/sites", sitesRouter);

const path = require('path');
app.use(express.static(path.join(__dirname, "/client/build")));

app.use((req, res) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/client/build/index.html");
});

require("./error-handling")(app);

module.exports = app;
