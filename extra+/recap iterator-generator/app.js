const axios = require('axios').default

async function getUser() {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const { data: user } = await axios.get(url);
    return user;
}

async function* getPostByUser(users) {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    for (let i = 0; i < users.length; i++) {
        const { data: posts } = await axios.get(`${url}?userId=${users[i].id}`);
        yield posts;
    }
}

getUser()
    .then(async (users) => {
        console.log(users);
    })
    .catch(e => {
        console.log(e);
    })