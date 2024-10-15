
const firstNameInput = document.querySelector('#fname');
const lasttName = document.querySelector('#lname');
const emailInput = document.querySelector('#email');
const phoneNumberInput = document.querySelector('#phone');
const submitButton = document.querySelector('#buttonDiv input');

// Cream functiile de validare
function letterCharValidation(input) {
    var value = input.value;
    var namePattern = /^[a-zA-Z\s-]+$/;

    if (value === '') {
        console.log('This field must be filled out');
    } else {
        if (!namePattern.test(value)) {
            console.log('Youo must use only letters');
        } else {
            console.log('All correct');
        }
    }
}

function emailValidation() {

}

function phoneNumberValidation() {

}

firstNameInput.addEventListener('input', () => {
    letterCharValidation(firstNameInput);
})