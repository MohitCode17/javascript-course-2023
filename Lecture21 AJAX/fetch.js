// 👉 FETCH API

// The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

// The fetch() method starts the process of fetching a resource from a server.

// The fetch() method returns a Promise that resolves to a Response object.


// 👉 GET REQUEST IN FETCH

/*
function myAxios(method, url) {
    return fetch(url).then((res) => res.json());
}

const url = "https://jsonplaceholder.typicode.com/users";

myAxios('GET', url).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})
*/


// 👉 GET REQUEST IN FETCH
/*
function myAxios(method, url, body = null) {
    const headers = {
        'CONTENT-TYPE': 'application/json'
    };

    return fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body),
    }).then((res) => res.json());
}

const url = "https://jsonplaceholder.typicode.com/users";

myAxios('POST', url, {name: 'Mohit', job: 'Web Developer'}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})
*/


// 👉 ASYNC AND AWAIT 

// Async and await is an elegant way to handle promises. It is easy to understand and it clean to write. The word async in front of a function means that function will return a promise. The above square function instead of a value it returns a promise.

const url = "https://jsonplaceholder.typicode.com/users";

const myAxios = async () => {
    try {
        const res = await fetch(url);
        const users = await res.json();
        console.log(users);
    } catch (error) {
        console.log(error);
    }
}

myAxios();