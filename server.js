const fs = require("fs");

const check = fs.existsSync("logs");
if (!check) {
  fs.mkdirSync("logs");
}

setInterval(() => {
  const now = new Date();
  fs.writeFileSync(
    "logs/" + now.toDateString() + now.toTimeString() + ".log",
    now.toLocaleDateString()
  );
}, 5000);
