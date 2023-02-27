// A promise is a pattern where the eventual response and how it will take to receive it is unknown.

// Promises have 3 states:
// 1. Pending - the outcome is not yet determined
// 2. Resolved - the outcome is completed successfully
// 3. Rejected - the outcome is completed with errors

// Example:
const noMondays = new Promise( (resolve, reject) => {
    if(new Date().getDay() !== 1) {
        resolve("Good, it's not Monday!");
    } else {
        reject("Someone has a case of the Mondays!");
    }
});
noMondays
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
