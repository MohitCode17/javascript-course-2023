/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 WINDOW, DOM AND BOM 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

// 👉 Window

// The window object represents a window in the browser containing the DOM document. The window is not the object of the JavaScript. It is the object of the browser. The developers use the window object to close and open browser window, displaying alert and prompt dialogs.

// Some of the methods to interact with window, which we already cover in previous lecture:

// ➡️ window.alert()
// ➡️ window.prompt()
// ➡️ window.confirm()



// 👉 BOM(Browser object model)

// The browser object model (BOM) represents additional object provided by the browser(host environment) for working with everything except document. The function alert, confirm, prompt are also a part of the BOM.

// ➡️ Window Size

// Two properties can be used to determine the size of the browser window.

// Both properties return the sizes in pixels:

// window.innerHeight - the inner height of the browser window (in pixels)
// window.innerWidth - the inner width of the browser window (in pixels)


let height = window.innerHeight;
let width = window.innerWidth;

// console.log(`Inner width of window is ${width} & height is ${height}`);


// ➡️ Other Window Methods

// window.open() - open a new window
// window.close() - close the current window
// window.moveTo() - move the current window
// window.resizeTo() - resize the current window


// ➡️ Window Location

// The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.

// console.log(window.location);
// console.log(window.location.href);
// console.log(window.location.host);



// 👉 DOM(Document object model)

// The Document Object Model, or DOM for short, represents all page content as objects that can be modified. The document object is the main “entry point” to the page. We can change or create anything on the page using it.

// With the DOM, JavaScript gets all the power it needs to create dynamic HTML:-
// ➡️ JavaScript can change all the HTML elements in the page
// ➡️ JavaScript can change all the HTML attributes in the page
// ➡️ JavaScript can change all the CSS styles in the page
// ➡️ JavaScript can remove existing HTML elements and attributes
// ➡️ JavaScript can add new HTML elements and attributes
// ➡️ JavaScript can react to all existing HTML events in the page.
// ➡️ JavaScript can create new HTML events in the page



// 👉 DOM tree

// The backbone of an HTML document is tags. According to the Document Object Model (DOM), every HTML tag is an object. Nested tags are “children” of the enclosing one. The text inside a tag is an object as well.

// All these objects are accessible using JavaScript, and we can use them to modify the page.

// For example, document.body is the object representing the <body> tag.

// document.body.style.background = 'red'; // make the background red


// 👉 DOM Manipulation

// ➡️Getting HTML element using JavaScript

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

// const paragraph = document.getElementsByClassName('para');
// console.log(paragraph);


// ✋ querySelector(): Can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.

// const heading = document.querySelector('#heading');
// console.log(heading);


// ✋ querySelectorAll(): Can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods. We can use for loop or forEach to loop through each nodeList elements.

// const heading = document.querySelectorAll('.heading');
// console.log(heading);

// heading.forEach((elem) => console.log(elem));


//  👉 Traversing in DOM

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



// 👉 Manipulate Elements

// const heading = document.querySelector('.heading');


// ➡️ Add text content to HTML elements

// There are many ways to add content to HTML elements. Let see some of the methods.

// ✋ textContent: Used to add text to and HTML elements.

// heading.textContent = '<h1>WELCOME TO DOM MANIPULATION</h1>';    // Cannot add HTML element itself.
// heading.textContent = 'WELCOME TO DOM MANIPULATION';


// ✋ innerHTML: Used to add a text or HTML elements or elements as a child.

// Most people get confused between textContent and innerHTML. textContent is meant to add text to an HTML element, however innerHTML can add a text or HTML element or elements as a child.

// heading.innerHTML = '<h1>WELCOME TO DOM MANIPULATION</h1>';  // We can add HTML element itself with innerHTML.
// heading.innerHTML = 'WELCOME TO DOM MANIPULATION';


// ➡️ Add style to HTML elements

// heading.style.color = 'yellow';
// heading.style.backgroundColor = 'green';
// heading.style.fontSize = '50px';
// heading.style.fontFamily = 'cursive';


// ➡️ Add and remove class to HTML elements

// heading.classList.add('title');
// heading.classList.remove('heading');

// The classList method is a good method to append additional class. It does not override the original class if a class exists rather it adds additional class for the element.


// 👉 Create elements using JavaScript

// const paragraph = document.createElement('p');
// paragraph.innerHTML = 'This is JavaScript course create mohitcodes'
// paragraph.classList.add('text');

// Append to html file
// const parent = document.querySelector('.parent');
// parent.appendChild(paragraph);

// Append at specific position
// parent.insertAdjacentElement('beforebegin', paragraph);     // at top mid
// parent.insertAdjacentElement('afterbegin', paragraph);    // at top
// parent.insertAdjacentElement('beforeend', paragraph);   // at bottom
// parent.insertAdjacentElement('afterend', paragraph);   // at bottom mid