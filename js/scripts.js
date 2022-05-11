function validateEmail() {
	let emailInput = document.querySelector('#user-email');
	let value = emailInput.value;

	if (!value) {
		showErrorMessage(emailInput, 'Email is a required field.');
		return false;
	}

	if (value.indexOf('@') === -1) {
		showErrorMessage(emailInput, 'You must enter a valid email address.');
		return false;
	}

	showErrorMessage(emailInput, null);
	return true;
}

function validatePassword() {
	let value = passwordInput.value;
	
	if (!value) {
		showErrorMessage(passwordInput, 'Password is a required field.');
		return false
	}

	if (value.length < 8) {
		showErrorMessage(passwordInput, 'Password needs to be at least 8 characters long.');
		return false
	}

	showErrorMessage(passwordInput, null);
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
		let error = document.createElement('div');
		error.classList.add('error-message');
		error.innerText = message;
		container.appendChild(error);
	}
}