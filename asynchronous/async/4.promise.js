const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Technical Meeting',
            time: '10:00 AM',
            location: 'Zoom Meeting',
        }
        resolve(meetingDetails);
    } else {
        reject(new Error('meeting already scheduled!'))
    }
})

/* const addToCalendar = (meetingDetails) => {
    return new Promise((resolve, reject) => {
        const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
        resolve(calendar)
    })
} */

const addToCalendar = (meetingDetails) => {
    const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
    return Promise.resolve(calendar)

}

// it'll not work
// addToCalendar().then((res) => console.log(res))

meeting
    .then(addToCalendar)
    .then((result) => {
        // resolved data
        console.log(result);
    })
    .catch((error) => { // one catch block can handle all error for 'then' block
        console.log(error);
    })
// .then(
//     (res) => console.log(res),
//     (error) => console.log(error)
// )



console.log('hello world');
// const arr = [1, 2, 3, 4, 4]
// console.log(arr);
// console.log(JSON.stringify(arr));