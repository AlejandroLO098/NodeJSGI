let showText = require("fs");
showText.readFile("hello.txt", (err, data) => {
  console.log("" + data);
});
