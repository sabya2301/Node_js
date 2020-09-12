const fs = require("fs");

const writeStream = fs.createWriteStream("streamFile.txt", "UTF-8");
const readStream = fs.createReadStream("README.md", "UTF-8");

readStream.on("data", data =>{
	writeStream.write(data);
})