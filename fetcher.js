const request = require("request");
const fs = require("fs");
const args = process.argv.slice(2);

const fetcher = function (URL, filePath, callback) {
  //http request to the URL
  request(URL, (error, response, body) => {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    // console.log("body:", body); // Print the HTML for the Google homepage.
    if(body) {
      callback(filePath, body);
      console.log("Downloaded and saved " + body.length + " bytes to " + filePath);
    }else{
      return error;
    }
  });
};


const writeFile = function (path, content) {

  fs.writeFile(path, content, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      //file written successfully
    }
  );
};

fetcher(args[0], args[1], writeFile);