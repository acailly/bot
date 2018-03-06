// Install dependencies
const fs = require("fs");
const execSync = require("child_process").execSync;

try {
  if (!fs.exists("./node_modules")) {
    console.log("Installing dependencies...");
    execSync("yarn");
    console.log("Installing dependencies... done");
  }
} catch (e) {
  console.log("Failed to install dependencies", e);
}