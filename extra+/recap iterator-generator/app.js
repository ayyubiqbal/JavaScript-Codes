const axios = require('axios').default

async function getUsers() {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const { data: users } = await axios.get(url);
    return users.map((user) => axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`))
}


(async () => {
    // console.log(await getUser());
    const users = await getUsers()
    for await (value of users) {
        // const { data: post } = await value;
        console.log(value.data.map(post => {
            return [post.id, post.title]
        }));
    }
})()