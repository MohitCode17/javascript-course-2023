/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 AJAX 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

/*
👉 What is AJAX ?

AJAX is an acronym for Asynchronous JavaScript and XML. It is a group of inter-related technologies like JavaScript, DOM, XML, HTML/XHTML, CSS, XMLHttpRequest, JSON etc. It is not a programming language.

AJAX allows you to send and receive data asynchronously without reloading the web page. So it is fast.

AJAX allows you to send only important information to the server not the entire page. So only valuable data from the client side is routed to the server side. It makes your application interactive and faster.

👉 How Ajax Works ?

1. An event occurs in a web page (the page is loaded, a button is clicked)
2. An XMLHttpRequest object is created by JavaScript
3. The XMLHttpRequest object sends a request to a web server through internet
4. The server processes the request
5. The server sends a response back to the web page
6. The response is read by JavaScript
7. Proper action (like page update) is performed by JavaScript


👉 We have 3 most common way to create and send request to server
1. xmlHTTPRequest (old way of doing)
2. fetch API (new way of doing)
3. AXIOS (this is third party library)
*/

/*
👉 Understanding XMLHttpRequest

An object of XMLHttpRequest is used for asynchronous communication between client and server.

It performs following operations:

1. Sends data from the client in the background
2. Receives the data from the server
3. Updates the webpage without reloading it.

*/

// 👉 Example of XMLHttpRequest(GET REQUEST)

/*
function myAxios(method, url) {
  // create new xhr request
  const xhr = new XMLHttpRequest();

  // Request established but not send yet
  xhr.open(method, url);

  // Request comes in string change it in json
  xhr.responseType = "json";

  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.log("Request Failed!!");
    } else {
      console.log(xhr.response);
    }
  };

  xhr.onerror = () => {
    console.log('Error !!');
  }

  // Send request to server
  xhr.send();
}

const url = "https://jsonplaceholder.typicode.com/users";

myAxios('GET', url);
*/

// 👉 Status code
// 1. Informational responses (100–199)
// 2. Successful responses (200–299)
// 3. Redirection messages (300–399)
// 4. Client error responses (400–499)
// 5. Server error responses (500–599)

// 👉 Example of XMLHttpRequest(POST REQUEST)

/*
function myAxios(method, url, body = null) {
  // create new xhr request
  const xhr = new XMLHttpRequest();

  // Request established but not send yet
  xhr.open(method, url);

  // Request comes in string change it in json
  xhr.responseType = "json";

  // Send content header
  xhr.setRequestHeader('CONTENT-TYPE', 'application/json');

  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.log("Request Failed!!");
    } else {
      console.log(xhr.response);
    }
  };

  xhr.onerror = () => {
    console.log('Error !!');
  };

  // Send request to server
  xhr.send(JSON.stringify(body));
}

const url = "https://jsonplaceholder.typicode.com/users";

myAxios('POST', url, {
    name: 'Mohit',
    job: 'Web Developer'
});
*/

// 👉 Example of XMLHttpRequest Using Promises

function myAxios(method, url, body = null) {
  return new Promise((resolve, reject) => {
    // create new xhr request
    const xhr = new XMLHttpRequest();

    // Request established but not send yet
    xhr.open(method, url);

    // Request comes in string change it in json
    xhr.responseType = "json";

    // Send content header
    xhr.setRequestHeader("CONTENT-TYPE", "application/json");

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.response);
    };

    // Send request to server
    xhr.send(JSON.stringify(body));
  });
}

const url = "https://jsonplaceholder.typicode.com/users";

myAxios("POST", url, {
  name: "Mohit",
  job: "Web Developer",
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
