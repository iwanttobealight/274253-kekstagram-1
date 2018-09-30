const modules = [
  require(`./src/version`),
  require(`./src/description`),
  require(`./src/license`),
  require(`./src/author`),
  require(`./src/help`),
];
const defaultModule = require(`./src/default`);
const errorModule = require(`./src/error`);
const userCommand = process.argv[2];

if (userCommand === undefined) {
  defaultModule.execute();
  process.exit(0);
}

const currentCommand = modules.find((mod) => `--${mod.name}` === userCommand.toLowerCase());

if (currentCommand === undefined) {
  errorModule.execute(userCommand);
  process.exit(1);
} else {
  currentCommand.execute();
  process.exit(0);
}
