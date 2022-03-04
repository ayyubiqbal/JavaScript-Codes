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


const addToCalendar = (meetingDetails) => {
    const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
    return Promise.resolve(calendar)

}



/* meeting
    .then(addToCalendar)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    }) */


async function myMeeting() {
    try {
        const meetingDetails = await meeting;
        const calendar = await addToCalendar(meetingDetails);
        console.log(calendar);
    }
    catch {
        console.log(`Something happened wrong`);
    }
}
myMeeting()

console.log('hello world');