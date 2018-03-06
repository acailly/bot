const fs = require("fs");
const path = require("path");
const R = require("ramda");

const rootDirectory = process.cwd() + "/";

const listDirectories = rootPath =>
  fs
    .readdirSync(rootPath)
    .filter(file => fs.statSync(path.join(rootPath, file)).isDirectory());

const listAvailableCommands = () =>
  R.flatten(
    listDirectories(rootDirectory)
      .filter(R.startsWith("commands"))
      .map(commandRootDirectory => {
        const commandRootFullDirectory =
          rootDirectory + commandRootDirectory + "/";
        return listDirectories(commandRootFullDirectory).map(
          commandDirectory => {
            return commandRootFullDirectory + commandDirectory + "/index.js";
          }
        );
      })
  );

module.exports = listAvailableCommands;
