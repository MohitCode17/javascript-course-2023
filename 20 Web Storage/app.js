/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 LOCAL & SESSION STORAGE 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

/*
👉 Web Storage(sessionStorage and localStorage) is a new HTML5 API offering important benefits over traditional cookies. Before HTML5, application data had to be stored in cookies, included in every server request.

Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. The data storage limit of cookies in many web browsers is about 4 KB per cookie. We Storages can store far larger data (at least 5MB) and never transferred to the server. All sites from the same or one origin can store and access the same data.

HTML web storage provides two objects for storing data on the client:

➡️ window.localStorage - stores data with no expiration date
➡️ window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)

It should be noted that data stored in either localStorage or sessionStorage is specific to the protocol of the page.
The keys and the values are always strings (note that, as with objects, integer keys will be automatically converted to strings).
*/

// 👉 sessionStorage

// sessionStorage is only available within the browser tab or window session. It’s designed to store data in a single web page session. That means if the window is closed the session data will be removed. Since sessionStorage and localStorage has similar methods, we will focus only on localStorage.

// 👉 localStorage

// The localStorage is used to store data on the browser with no expiration data. The data will be available on the browser even after the browser is closed.

// 👉 Use case of Web Storages

// Some use case of Web Storages are

// ➡️ Store data temporarily
// ➡️ Saving products that the user places in his shopping cart
// ➡️ Data can be made available between page requests, multiple browser tabs, and also between browser sessions using localStorage
// ➡️ Can be used for user authentication method


// 👉 HTML5 Web Storage Objects

// localStorage - to display the localStorage object
// localStorage.clear() - to remove everything in the local storage
// localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
// localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
// localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
// localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.


// ✋ Storing string in a localStorage

localStorage.setItem('product-id', 1);
localStorage.setItem('product', 'Samsung Galaxy s23');

const cart = ['Milk', 'Vegetables', 'Fruits'];

localStorage.setItem('cart', cart); // Stored as string
localStorage.setItem('cart', JSON.stringify(cart));

const shoppingCart = [
    {
        id: 1,
        product: 'Mobile Phone',
        price: 50000,
    },
    {
        id: 2,
        product: 'Sneaker',
        price: 20000,
    },
    {
        id: 3,
        product: 'Shirt',
        price: 2200,
    },
]
localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));


// 👉 GETTING ITEM FROM LOCALSTORAGE

let getShoppingCart = JSON.parse(localStorage.getItem('shopping-cart'));    // this stored as string we need to convert in object
console.log(getShoppingCart);


// 👉 CLEARING THE LOCALSTORAGE

// The clear method, will clear everything stored in the local storage

localStorage.clear();

// localStorage.clear()