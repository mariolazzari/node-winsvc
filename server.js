const fs = require("fs");

const check = fs.existsSync("logs");
if (!check) {
  fs.mkdirSync("logs");
}

setInterval(() => {
  const now = new Date();
  fs.writeFileSync(
    "logs/" +
      now.getDate() +
      (now.getMonth() + 1) +
      now.getDate() +
      now.getHours() +
      now.getMinutes() +
      now.getSeconds() +
      ".log",
    now.toLocaleString()
  );
}, 5000);
