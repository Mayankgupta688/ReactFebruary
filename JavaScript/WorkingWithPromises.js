debugger;

var myPromise = new Promise((resolve, reject) => {
    debugger;
    setTimeout(() => {
        debugger;
        reject("No...");
    }, 5000)
});


debugger;

myPromise.then((data) => {
    debugger;
    console.log(data)
}, (errMsg) => {
    console.log(errMsg)
})

debugger;