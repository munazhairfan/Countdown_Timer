#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const question = await inquirer.prompt({
    type: "number",
    name: "ask",
    message: "Enter the time in seconds.",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter a number.";
        }
        else if (input <= 0 || input > 60) {
            return "seconds must be between 1 - 60.";
        }
        else {
            return true;
        }
    }
});
let input = question.ask;
function startTimer(value) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + value);
    const interval = new Date(intTime);
    setInterval(() => {
        let currentTime = new Date();
        const timeDiff = differenceInSeconds(intTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer has expired.");
            process.exit();
        }
        ;
        const minute = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const seconds = Math.floor(timeDiff % 60);
        console.log(`${minute.toString().padStart(2, "0")}:${seconds}`);
    }, 1000);
}
;
startTimer(input);
