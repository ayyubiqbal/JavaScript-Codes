const isPromised = true

const promise = new Promise(function (resolved, rejected) {
    if (isPromised) {
        resolved(true)
    }
    else {
        rejected('data')
    }
})

console.log(promise);

promise
    .catch(function (e) {
        console.log(e);
    })
    .then((result) => {
        console.log(result);
    })
