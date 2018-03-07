const cosmiconfig = require("cosmiconfig");
const path = require("path");

const rootDirectory = process.cwd() + "/";
const configPath = path.join(rootDirectory, "config.yaml");

function loadConfig() {
  const configLoader = cosmiconfig("bot", { configPath, sync: true });
  return configLoader.load().config;
}

module.exports = loadConfig;
