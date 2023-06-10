
window.onload = () => {
    const buttons = document.querySelectorAll('.numbers');
    const display = document.querySelector('#result');
    const equal = document.querySelector('#equalBtn');
    const clear = document.querySelector('#clearBtn');
    const allClear = document.querySelector('#allClearBtn');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            display.value += e.target.innerHTML
        })
    })

    // Equal Operation
    equal.addEventListener('click', () => {
        if(display.value){
            display.value = eval(display.value);
        }else{
            alert('Enter value');
        }
    })

    clear.addEventListener('click', () => {
        display.value = '';
    })

    allClear.addEventListener('click', () => {
        display.value = '';
    })
}

