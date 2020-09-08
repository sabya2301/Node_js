var path = require("path");
// console.log("The filename is " + path.basename(__filename));
// process.stdout.write("Hello\n" + path.basename(__filename));
// process.stdout.write("\nWorld ");

const questions = [
    "Name ?",
    "Favourite food ?",
    "LM10 or CR7"
];

const ask = (i = 0) => {
    process.stdout.write("\n\n" + questions[i]);
    process.stdout.write(" > ");
};

ask();
const answers = [];

process.stdin.on("data", data => {
    // process.stdout.write("\ndata: " + data.toString().trim());
    // process.exit();
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        const [name, food, player] = answers;
        process.stdout.write(`
        Thank you ${name}.
        Your favourite food is ${food}.

        ${player} is the best.
        `);
        process.exit();
    }
});