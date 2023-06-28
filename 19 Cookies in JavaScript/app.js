/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 COOKIES IN JAVASCRIPT 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟*/

/*
👉 Cookies are small strings of data directly stored in the browser. In JavaScript document.cookie provides access to cookie.

Cookies are set by a web server using the Set-cookie HTTP-header. Next time when request is send to the same domain, the browser send cookie using the cookie HTTP-header, That way the server knows who sent the request.
*/

// 👉 Access cookie
console.log(document.cookie);

/*
👉 Writing a cookie

An assignment to document.cookie is treated specially in a way that a write operation doesn't touch the other cookie
*/

document.cookie = 'user = mohit1234500'
console.log(document.cookie);


/*
👉 encode URI component
This function helps keep the valid formating. It is used like this:
*/

// let key = prompt('Enter your key');
// let value = prompt('Enter your value');

// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
// console.log(document.cookie);


// For Decode key = decodeURIComponent('value of key');



/*
👉 Cookie Options
Cookie have serveral options which can be provided after key = value to a set call like this:

document.cookie = "user=bla; path=/a; expires=Tue, 29 June 2023 03:41:22 GMT"
*/