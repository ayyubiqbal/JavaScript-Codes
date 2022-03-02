/* 
* /user?username=[username]
* /post?user_id=[user_id]
* /comments?post_id=[post_id]
* /user?username=[username]
*/

function get(path, cb) {
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

getUserNameFromComment('Ayyub')