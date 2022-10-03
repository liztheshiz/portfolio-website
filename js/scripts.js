// VARIABLES >>>
// DOM selectors
let emailInput = document.querySelector('#user-email');
let messageInput = document.querySelector('#user-message');
let submitButton = document.querySelector('#contact-submit-button');
// <<< VARIABLES


// FUNCTIONS >>>
function validateEmail() {
    let value = emailInput.value;

    if (!value) {
        showErrorMessage(emailInput, 'Email is a required field.');
        return false;
    }

    if (value.indexOf('@') === -1) {
        showErrorMessage(emailInput, 'Please enter a valid email address.');
        return false;
    }

    showErrorMessage(emailInput, null);
    return true;
}

function validateMessage() {
    let value = messageInput.value;

    if (!value) {
        showErrorMessage(messageInput, 'Please include a body in your message.');
        return false
    }

    if (value.length > 2) {
        showErrorMessage(messageInput, 'Message must be under 240 characters.');
        return false
    }

    showErrorMessage(messageInput, null); // remove existing error before returning true
    return true
}

function showErrorMessage(input, message) {
    let container = input.parentElement;

    // Remove existing error
    let error = container.querySelector('.error-message');
    if (error) {
        container.removeChild(error);
    }

    // Adds error message if the message isn't empty
    if (message) {
        console.log(`error: ${message}`)
        let error = document.createElement('div');
        error.classList.add('error-message');
        error.innerText = message;
        container.appendChild(error);
    }
}
// <<< FUNCTIONS


// EVENT LISTENERS >>>
submitButton.addEventListener('click', () => {
    let emailValid = validateEmail();
    let messageValid = validateMessage();

    if (emailValid && messageValid) {
        console.log(`message sent! ${messageInput.value}`)
    } else {
        alert('Spell not found! Please check your... "spell"-ing.'); // Error message if spell not found
    }
});
// <<< EVENT LISTENERS