document.addEventListener('DOMContentLoaded', () => {
    // Get all buttons as an array
    let btn = document.getElementsByTagName('button');

    btn[0].style.cursor = 'pointer';
    btn[0].disabled = false;

    btn[1].style.cursor = 'not-allowed';
    btn[1].disabled = true;

    // Get the result field id
    let display = document.getElementById('display');
    let i = '' // For calculation;
    let j = '' // For history management

    // History management
    let ul = document.getElementsByTagName('ul')[0];

    // Listen event form btn click
    btn[0].addEventListener('click', () => {
        display.value = '';
        display.classList.remove('on-off');
        btn[0].style.cursor = 'not-allowed';
        btn[0].disabled = true;
        btn[1].style.cursor = 'pointer';
        btn[1].disabled = false;

    });
    btn[1].addEventListener('click', () => {
        display.value = '';
        display.classList.add('on-off');
        btn[1].style.cursor = 'not-allowed';
        btn[1].disabled = true;
        btn[0].style.cursor = 'pointer';
        btn[0].disabled = false;
    });
    btn[2].addEventListener('click', () => {
        display.value = '';
    });
    btn[3].addEventListener('click', () => {
        display.value = display.value.slice(0, -1);
    });
    btn[4].addEventListener('click', () => {
        display.value += btn[4].value;
    });
    btn[5].addEventListener('click', () => {
        display.value += btn[5].value;
    });
    btn[6].addEventListener('click', () => {
        display.value += btn[6].value;
    });
    btn[7].addEventListener('click', () => {
        display.value += btn[7].value;
    });
    btn[8].addEventListener('click', () => {
        display.value += btn[8].value;
    });
    btn[9].addEventListener('click', () => {
        display.value += btn[9].value;
    });
    btn[10].addEventListener('click', () => {
        display.value += btn[10].value;
    });
    btn[11].addEventListener('click', () => {
        display.value += btn[11].value;
    });
    btn[12].addEventListener('click', () => {
        display.value += btn[12].value;
    });
    btn[13].addEventListener('click', () => {
        display.value += btn[13].value;
    });
    btn[14].addEventListener('click', () => {
        display.value += btn[14].value;
    });
    btn[15].addEventListener('click', () => {
        display.value += btn[15].value;
    });
    btn[16].addEventListener('click', () => {
        display.value += btn[16].value;
    });
    btn[17].addEventListener('click', () => {
        display.value += btn[17].value;
    });
    
    try {
        btn[18].addEventListener('click', () => {
            if (eval(display.value) == 'Infinity') {
                display.value = "MATH ERROR, DIVISED BY ZERO!";
            } else if (eval(display.value) == 'NaN') {
                display.value = "SYNTAX ERROR!";
            } else {
                display.value = eval(display.value);
                let li = document.createElement('li');
                ul.prepend(li);
                li.textContent = display.value;

            }
        });
    } catch (e) {
        display.value = "FATAL ERROR!";
    }

    btn[19].addEventListener('click', () => {
        display.value += btn[19].value;
    });
    btn[20].addEventListener('click', () => {
        display.value += btn[20].value;
    });

})