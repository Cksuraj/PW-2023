
const delay = 3; // the delay of 3 seconds before generating the random number

// countdown message every second

let loading = delay;
const countdownInterval = setInterval(() => {
    console.log(`loading... ${loading} more seconds`);
    loading--;
    if (loading === 0) {
        clearInterval(countdownInterval);        // clearing the interval
        generateRandomNumber();                  // calling randome function 
    }
}, 1000);

//  random number genreating function

function generateRandomNumber() {
    const randNum = Math.floor(Math.random() * 20) + 1;
    console.log(`\nRandom number generated: ${randNum}`);
}
