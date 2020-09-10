const fs = require("fs");

// const files = fs.readdirSync("../Node_js");
// console.log(files);


// fs.readdir("../Node_js", (err, files) =>{
// 	if(err){
// 		console.log(err);
// 	} else{
// 		console.log(files);
// 	}
// });
// console.log("Reading files");

//READING FILE CONTENTS

const contents = fs.readFileSync("./events.js", "UTF-8");
console.log(contents);