const express = require("express");

const ycbm = require("./ycbm.json");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route to serve JSON data
app.use("/", function(req, res) {
	return res.json().status(200);
});

// Start the API server
app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
