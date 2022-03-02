/* 
* /user?username=[username]
* /post?user_id=[user_id]
* /comments?post_id=[post_id]
* /user?username=[username]
*/

// callback hell

/* function get(path, cb) {
    const data = {} // somehow process it
    cb(data)
}

function getUserNameFromComment(username) {
    get(`user?username=${username}`, (user) => {
        get(`post?user_id=${user.id}`, (posts) => {
            get(`comments?post_id=${posts[0].id}`, (comments) => {
                get(`user?username=${comments[0].username}`, (user) => {
                    console.log(user);
                })
            })
        })
    })
}

getUserNameFromComment('Ayyub') */


// --------------------------

/* function wait(ms) {
    const promise = new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
    return promise
}
 */
// ------------------------
/* 
const wait = (ms) => new Promise((resolver) => setTimeout(resolver, ms))

wait(1000).then(() => {
    console.log('Done in 1000 ms');
})

wait(2000).then(() => {
    console.log('Done in 2000 ms');
})

wait(3000).then(() => {
    console.log('Done in 3000 ms');
})
 */

/* 
* /user?username=[username]
* /post?user_id=[user_id]
* /comments?post_id=[post_id]
* /user?username=[username]
*/

const get = (url) => Promise.resolve()

get(`user?username=ayyub`)
    .then((user) => {
        // do other ops here
        return get(`post?user_id=${user.id}`)
    })
    .then((posts) => {
        const latestPost = posts[0]
        return get(`comments?post_id=${latestPost.id}`)
    })
    .then((comments) => {
        const latestComments = comments[0]
        return get(`user?username=${latestComments.username}`)
    })
    .then((user) => {
        console.log(user);
    })
    .catch(() => {
        console.log('Error');
    })


async function getUserName(username) {
    try {
        const mainUser = await get(`user?username=${username}`)
        const post = await get(`post?user_id=${mainUser.id}`)
        const comments = await get(`comments?post_id=${post[0].id}`)
        const user = await get(`user?username=${comments[0].username}`)
        console.log(user);
    }
    catch (e) {
        console.log(e);
    }
}