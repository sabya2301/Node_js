var waitTime = 6000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
        currentTime += waitInterval;
        const p = Math.floor(currentTime / waitTime * 100);
        process.stdout.clearLine();
        process.stdout.cursorTo(10);
        process.stdout.write(`waiting ${p}%`);

    }
    // console.log(typeof(waitTime));
const timerFinished = () => {
    // setTimeout(i);
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(10);
    process.stdout.write(`Delay for ${waitTime/1000} secs done\n`);
};

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
// process.stdout.write("\nEnter Delay time > ");

// process.stdin.on("data", data => {
//     // console.log(typeof(data));
//     waitTime = Number(data);
//     setTimeout(timerFinished, waitTime);
//     process.stdout.write("\nEnter Delay time > ");
// });