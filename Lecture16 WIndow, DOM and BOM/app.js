/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 WINDOW, BOM AND DOM 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

// 👉 WINDOW

// The window object represents a window in the browser containing the DOM document. The window is not the object of the JavaScript. It is the object of the browser. The developers use the window object to close and open browser window, displaying alert and prompt dialogs.

// console.log(window);    // Return List of window object methods


// 👉 SOME OF THE METHODS TO INTERACT WITH WINDOW

// ✋ window.alert(): Used to invoke a mini window with a message.

// alert('Welcome to JavaScript Course');


// ✋ window.prompt(): Used to take user input as string.

// console.log(prompt('Enter you age', 18));


// ✋ window.confirm(): Displays a dialog box with a specified message, along with an OK and a Cancel button. A confirm box is often used to ask permission from a user to execute something. Window confirm() takes a string as an argument. Clicking the OK yields true value, whereas clicking the Cancel button yields false value.

// console.log(confirm('Are you sure to want to delete?'));





// 👉 BOM(BROWSER OBJECT MODEL)

// The browser object model (BOM) represents additional object provided by the browser(host environment) for working with everything except document. The function alert, confirm, prompt are also a part of the BOM.

// ✋ Window Size

// Two properties can be used to determine the size of the browser window.

// Both properties return the sizes in pixels:

// window.innerHeight - the inner height of the browser window (in pixels)
// window.innerWidth - the inner width of the browser window (in pixels)


let height = window.innerHeight;
let width = window.innerWidth;

// console.log(`Inner width of window is ${width} & height is ${height}`);


// Other Window Methods

// window.open() - open a new window
// window.close() - close the current window
// window.moveTo() - move the current window
// window.resizeTo() - resize the current window


// ✋ Window Location

// The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.

// console.log(window.location);
// console.log(window.location.href);
// console.log(window.location.host);





// 👉 DOM(DOCUMENT OBJECT MODEL)

// The Document object Model(DOM) is an application programming interface(API) for manipulating HTML and XML documents. When a web page is loaded, the browser creates a Document object Model of the page. In the DOM tree, the document is the root of node or object.

// With the DOcument object model, JavaScript gets all the power it needs to create dynamic HTML:
// 1. JavaScript can change all the HTML elements in the page
// 2. JavaScript can change all the HTML attributes in the page
// 3. JavaScript can change all the CSS styles in the page
// 4. JavaScript can remove existing HTML elements and attributes
// 5. JavaScript can add new HTML elements and attributes
// 6. JavaScript can react to all existing HTML events in the page.
// 7. JavaScript can create new HTML events in the page


// 👉 Window vs Document
// Window is the main container or we can say the global Object and any operations related to entire browser can be a part of window object, whereas the DOM(Document) is the child of Window Object.








// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 DOM MANIPULATION 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟


// 👉 GET HTML ELEMENTS USING JAVASCRIPT

// We can access already created element or create elements using JavaScript. To access or get elements we use different methods.


// ✋ getElementById(): Targets a single HTML element using id.

// const heading = document.getElementById('heading');
// console.log(heading);


// ✋ getElementsByTagName(): Takes a tag name as a string parameter and this method returns an HTMLCollection object. An HTMLCollection is an array like object of HTML elements. The length property provides the size of the collection. Whenever we use this method we access the individual elements using index or after loop through each individual items. An HTMLCollection does not support all array methods therefore we should use regular for loop instead of forEach.

// const heading = document.getElementsByTagName('h1');
// console.log(heading);

// for(let i=0; i<heading.length; i++) {
//     console.log(heading[i]);
// }


// ✋ getElementsByClassName: Takes a class name to access HTML elements and returns an HTMLCollection object.

// const heading = document.getElementsByClassName('heading');
// console.log(heading);


// ✋ querySelector(): Can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.

// const heading = document.querySelector('.heading');
// console.log(heading);


// ✋ querySelectorAll(): Can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods. We can use for loop or forEach to loop through each nodeList elements.

// const heading = document.querySelectorAll('.heading');
// console.log(heading);

// heading.forEach((elem) => console.log(elem));





// 👉 TRAVERSING IN DOM

// ✋ parentNode: Property returns the parent node of an element or node. The parentNode property is read-only.

// const heading = document.querySelector('.heading');
// const parent = heading.parentNode;
// console.log(parent);


// ✋ childNodes: Property returns a collection (list) of an elements's child nodes.

// childNodes returns nodes like Element nodes, text nodes, and comment nodes. Whitespace between elements are also text nodes.

// const parent = document.querySelector('.parent');
// console.log(parent.childNodes);


// ✋ nextElementSibling: Property returns the next element in the same tree level.

// const heading = document.querySelector('.heading');
// console.log(heading.nextElementSibling);


// ✋ previousElementSibling: Property returns the previous element in the same tree level.

// const subHeading = document.querySelector('h3');
// console.log(subHeading.previousElementSibling);





// 👉 MANIPULATE ELEMENTS

// const heading = document.querySelector('.heading');
// heading.innerHTML = 'Web Dev is Awesome!';
// heading.style.color = 'yellow';
// heading.style.fontSize = '80px';
// heading.classList.add('title');
// heading.classList.remove('heading');

// The classList method is a good method to append additional class. It does not override the original class if a class exists rather it adds additional class for the element.