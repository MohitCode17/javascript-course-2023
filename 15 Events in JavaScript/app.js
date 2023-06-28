/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 EVENTS IN JAVASCRIPT 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

// HTML events are "things" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can react on these events. There are many different types of events that an occur.

// For example:

// 1. The user selects, clicks, or hovers the cursor over a certain element.
// 2. The user chooses a key on the keyword.
// 3. The user resizes or closes the browser window.
// 4. A form is submitted.
// 5. A video is played, paused, or ends.


// 👉 Syntax to add events

/*
selectedElement.addEventListner('typeOfEvent', function(){
    ...the activity you want to occur after the event will be in here
});
*/


// ✋ Example To Click Event (RGB COLOR GENERATOR)

// const btn = document.querySelector('#btn');

// btn.addEventListener('click', () => {
//     const body = document.querySelector('body');
//     const color = `rgb(${rgbColor(255)}, ${rgbColor(255)}, ${rgbColor(255)})`
//     body.style.backgroundColor = color;
// });

// function rgbColor(number) {
//     return Math.floor(Math.random() * (number + 1));    // + 1 because index start from 0, and we need from 1 to 255
// };


// ✋ Example To Mouse Event (CHANGE CONTENT OF HEADING)

// const heading = document.querySelector('.heading');

// heading.addEventListener('mouseover', () => {
//     heading.innerHTML = 'I LOVE WEB DEV';
//     heading.style.color = 'purple';
// })

// 👉 List of mouse events https://www.w3schools.com/jsref/obj_mouseevent.asp


// ✋ Example To Keyboard Event (CHECK WHICH KEY IS PRESSED)

// const msgBox = document.querySelector('#message');

// msgBox.addEventListener('keypress', (e) => {
//     // console.log(e); // Return event object related to event type which you used.
//     console.log(`Press key is ${e.key} and key code is ${e.code}`);
// })

// 👉 List of keyboard events https://www.w3schools.com/jsref/obj_keyboardevent.asp


// ✋ Getting value from an input

// const getValueBtn = document.querySelector('#get_val_btn');

// getValueBtn.addEventListener('click', (e) => {
//     const input = document.querySelector('input');
//     console.log(input.value);
// })


// ✋ Example of input events

// const input = document.querySelector('input')
// const result = document.querySelector('#result');

// input.addEventListener('input', () => {
//     result.innerHTML = input.value;
// })


// ✋ Example of blur events

// In contrast to input or change, the blur event occur when the input field is not on focus.

// const input = document.querySelector('input');
// const result = document.querySelector('#result');

// input.addEventListener('blur', (e) => {
//     result.innerHTML = '*Field is required';
//     result.style.color = 'red';
// })








// 💯 EXERCISE (CREATE SMALL APPLICATION)

// const bulbSwitch = document.querySelector('#bulbSwitch');
// const bulb = document.querySelector('#bulb');

// bulbSwitch.addEventListener('click', () => {
//     if(bulb.src.match('off')){
//         bulb.src = './bulb-on.gif';
//         bulbSwitch.innerHTML = 'Turn OFF'
//     }else{
//         bulb.src = './bulb-off.gif';
//         bulbSwitch.innerHTML = 'Turn ON'
//     }
// });