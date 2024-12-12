// server\index.cjs

const pino = require("pino");
const pretty = require("pino-pretty");
const stream = pretty({ colorize: true });
const logger = pino(stream);

require("dotenv").config();

const application = require("./application/application.cjs");

const port = process.env.APPLICATION_PORT;

application
  .listen(port, () => {
    logger.info("Server is listening...");
  })
  .on("error", (error) => {
    logger.error(error);
  });
