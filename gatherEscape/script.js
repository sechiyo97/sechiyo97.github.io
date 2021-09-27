const calculator = document.querySelector('.calculator');
const buttons = calculator.querySelector('.calculator__buttons');
const display = document.querySelector('.calculator__display--for-advanced');
const image = document.querySelector('.result_image');

var isEditable = true;

buttons.addEventListener('click', function(event) {
    console.log('clicked');
    const target = event.target;
    const action = target.classList[0];
    const buttonContent = target.textContent;

    if (target.matches('button') && isEditable) {
        switch (action) {
            case 'number': 
                if (display.textContent === '') {
                    display.textContent = buttonContent;
                } else if (display.textContent.length < 4) {
                    display.textContent += buttonContent;
                }
                break;
            case 'back':
                if (display.textContent.length == 1) {
                    display.textContent = 0
                } else {
                    display.textContent = display.textContent.substr(0, display.textContent.length - 1)
                }
                break;
            case 'confirm':
                if (display.textContent == '1234') {
                    console.log("yes~")
                    display.textContent = 'CORRECT';
                    image.style.visibility = 'visible';
                    isEditable = false;
                } else {
                    console.log("no!")
                    display.textContent = '';
                }
                break;
        }
    }
})
