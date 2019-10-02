const http = require("http");
const fs = require("fs");
let counter = 0;
const server = http.createServer((request, response) => {
  const res = new Promise((resolve, reject) => {
    fs.readFile("../readable.json", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      const toJson = JSON.parse(data);
      let bufferFile;
      for (let i in toJson["web-app"].taglib) {
        counter++;
      }
      do {
        toJson["web-app"].taglib[`request${counter - 1}`] = `request${counter -
          1}`;
        counter = 0;
      } while (toJson["web-app"].taglib == !undefined);
      {
      }
      bufferFile = JSON.stringify(toJson);
      fs.writeFile("../readable.json", bufferFile, (err, data) => {
        if (err) {
          console.log(`Error while writing file ${err}`);
        }

        console.log("Ok, write success");
      });

      resolve(JSON.stringify(toJson));
    });
  });
  res.then(data => response.end(data)).catch(data => response.end(data));
});

server.listen(3000, "127.0.0.1");
console.log("Server listen on port 3000");
