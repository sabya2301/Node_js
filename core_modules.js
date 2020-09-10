const util = require("util");
const v8 = require("v8");
const readline = require("readline")


const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
// util.log("This is util log");
// util.log(v8.getHeapStatistics());
rl.question("What's your name ?", ans =>{
	util.log(`Greetings, ${ans}`);
	process.exit();
});
