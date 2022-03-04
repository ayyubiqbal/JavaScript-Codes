const processOrder = (customer) => {
    console.log('Processing order for customer 1');

    setTimeout(() => {
        console.log('cooking completed');
    }, 3000)

    console.log('Order processed for customer 1');
}

console.log('take order for customer 1');

processOrder()

console.log('completed order for customer 1');