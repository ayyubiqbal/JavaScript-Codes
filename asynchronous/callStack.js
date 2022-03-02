function main() {
    setTimeout(() => {
        console.log('inside setTimeout, last print');
    }, 100)

    setTimeout(() => {
        console.log('inside setTimeout, first print');
    }, 10)

    test()
}

function test() {
    console.log('hello world, test');
}

main()