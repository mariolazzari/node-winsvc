const dotenv = require("dotenv");
dotenv.config();

const logger = require("./utils/logger");

setInterval(() => {
  const x = Math.random();
  const y = Math.random();

  if (y > x) {
    logger.error("Program exited: " + x + " < " + y);
    process.exit(1);
  } else {
    logger.info("Program running: " + x + " > " + y);
  }
}, 5000);
