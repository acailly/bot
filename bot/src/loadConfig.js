const cosmiconfig = require("cosmiconfig");
const path = require("path");
const chalk = require("chalk");

const rootDirectory = process.cwd() + "/";
const configPath = path.join(rootDirectory, "config.yaml");

function loadConfig() {
  try {
    const configLoader = cosmiconfig("bot", { configPath, sync: true });
    return configLoader.load().config;
  } catch (e) {
    const warning = chalk.bgYellow(chalk.black(" WARNING "));
    const configFileName = chalk.yellow("config.yaml");
    console.log(`${warning} File ${configFileName} was not found or was empty`);
    return {};
  }
}

module.exports = loadConfig;
