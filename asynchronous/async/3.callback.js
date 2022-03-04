const takeOrder = (customer, callback) => {
    console.log(`take order for ${customer}`);
    callback(customer, completeOrder)
}

const processOrder = (customer, callback) => {
    console.log(`Processing order for ${customer}`);

    setTimeout(() => {
        console.log('cooking completed');
        console.log(`Order processed for ${customer}`);
        callback(customer)
    }, 3000)


}

const completeOrder = (customer) => {
    console.log(`completed order for ${customer}`);
}

takeOrder('customer 1', processOrder)



console.log('----------------------------');

// --------------------------------
// --------------------------------


const takeOrder2 = (customer, callback) => {
    console.log(`take order for ${customer}`);
    callback(customer)
}

const processOrder2 = (customer, callback) => {
    console.log(`Processing order for ${customer}`);

    setTimeout(() => {
        console.log('cooking completed');
        console.log(`Order processed for ${customer}`);
        callback(customer)
    }, 3000)


}

const completeOrder2 = (customer) => {
    console.log(`completed order for ${customer}`);
}

takeOrder2('customer 1', (customer) => {
    processOrder2(customer, (customer) => {
        completeOrder2(customer)
    })
})