require("./install_dependencies");

//Start bot
const chalk = require("chalk");

try {
  console.log(chalk.cyanBright("Launching bot..."));
  require("../src/cli");
} catch (e) {
  console.log("Failed!", e);
}
