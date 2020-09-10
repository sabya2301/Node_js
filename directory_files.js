<<<<<<< HEAD
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
=======
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
>>>>>>> 15aef618956a08b557d90e6cc9d0bae5ed683b10
console.log(contents);