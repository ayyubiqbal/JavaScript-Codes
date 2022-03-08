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
        // console.log(users);
        const userIterator = await getPostByUser(users)

        // console.log(userIterator);

        // userIterator.next()
        // userIterator.next()
        // userIterator.next()

        // console.log((await userIterator.next()).value);
        for await (let value of userIterator) {
            console.log(value.map((data) => {
                return [
                    data.id, data.title
                ]
            }));
        }
    })
    .catch(e => {
        console.log(e);
    })