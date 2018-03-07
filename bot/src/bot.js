const vorpal = require("vorpal")();
const chalk = vorpal.chalk;
const repl = require("vorpal-repl");
const loadConfig = require("./loadConfig");
const listAvailableCommands = require("./listAvailableCommands");

vorpal.config = loadConfig();

vorpal.use(repl);

const commandPaths = listAvailableCommands();

commandPaths.map(commandPath => {
  const command = require(commandPath);
  vorpal.use(command);
});

vorpal.delimiter(chalk.magenta("bot~$"));

const bot = {
  cli: () => vorpal.show(),
  send: (message, callback) => vorpal.exec(message.toLowerCase(), callback)
};

module.exports = bot;
