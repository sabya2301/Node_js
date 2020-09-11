const fs = require("fs");


//READING DIRECTORIES
// const files = fs.readdirSync("../Node_js");
// console.log(files);

//READING DIRECTORIES USING ASYNC 
// fs.readdir("../Node_js", (err, files) =>{
// 	if(err){
// 		console.log(err);
// 	} else{
// 		console.log(files);
// 	}
// });
// console.log("Reading files");


//READING FILE CONTENTS
// const contents = fs.readFileSync("./events.js", "UTF-8");
// console.log(contents);



//WRITING FILES
// const md = `
// This is a new file.
// This is written by filesystems module in Nodejs.
// Uploaded by Sabyasachi Das.

// `;
// fs.writeFile("../Node_js/newFile.md", md, err =>{
// 	if(err){
// 		throw(err);
// 	} else{
// 		console.log("File Saved");
// 	}
// });



//CREATING A DIRECTORY
// if(fs.existsSync("demoFiles")){
// 	console.log("Directory already exists");
// } else{
// 	fs.mkdir("demoFiles", err =>{
// 		if(err){
// 			throw(err);
// 		} else{
// 			console.log("Directory created");
// 		}
// 	});
// }

//APPENDING A FILE
const text = require("./assets/colors.json");
text.colorList.forEach(c =>{
	fs.appendFile("appendedFile.md", `${c.color}\n`, err =>{
		if(err){
			throw(err);
		} else{
			console.log("File Appended");
		}
	});
});
