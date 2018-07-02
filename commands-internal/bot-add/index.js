const execSync = require("child_process").execSync;
const last = require("lodash/last");
const path = require("path");
const fs = require("fs");

module.exports = function(vorpal) {
  vorpal
    .command("add <repository>")
    .description("Add a command from a github repository adress")
    .action(function(args, callback) {
      const rootDirectory = process.cwd() + "/";
      const repositoryShortName = last(args.repository.split("/"));
      const targetFolder = path.join(
        rootDirectory,
        "commands",
        repositoryShortName
      );

      if (fs.existsSync(targetFolder)) {
        console.log(
          `Command ${repositoryShortName} is already present in ${targetFolder}`
        );
        callback();
      } else {
        //Clone the command repository
        execSync(`git clone ${args.repository} ${targetFolder}`);

        //Download dependencies
        execSync("yarn");

        //Register the command
        const command = require(targetFolder + "/index.js");
        vorpal.use(command);

        callback(`Command was added in ${targetFolder}`);
      }
    });
};
