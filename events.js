const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("Custom Event", (message, user) => {
    console.log(`${user}: ${message}`);
});

// emitter.emit("Custom Event", "Hello World", "Computer");
// emitter.emit("Custom Event", "This is Sabya", "Sabyasachi");

process.stdin.on("data", data =>{
	const input = data.toString().trim();
	if(input === "exit"){
		emitter.emit("Custom Event", "Bye Bye !", "Computer");
		process.exit();
	} else{
		emitter.emit("Custom Event", input, "User");
	}
})