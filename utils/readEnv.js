// Read enviroment vars
const dotenv = require("dotenv");
const { rootPath } = require("./files");
const logger = require("./logger");

// read vars anche check for errors
const config = dotenv.config();
if (config.error) {
  logger.error(config.error);
  throw config.error;
}

// create data folders, if not present
//createFolder(process.env.DATA);

// export enviroment vars
const vars = {
  ...config.parsed,
  ROOT_PATH: rootPath,
};

module.export = vars;
