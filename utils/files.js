// File utilities
const appRoot = require("app-root-path");
const { join } = require("path");
const { existsSync, mkdir } = require("fs");

// application root path
const rootPath = appRoot.path;

// create folder
const createFolder = path => {
  const fullPath = join(rootPath, path);
  if (!existsSync(fullPath)) {
    mkdir(fullPath, err => {
      if (err) {
        console.error(err);
      }
    });
  }
};

module.exports = {
  rootPath,
  createFolder,
};
