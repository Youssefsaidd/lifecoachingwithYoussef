function validateSignup() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var signupError = document.getElementById('signupError');

    // Basic validation, you can add more sophisticated validation
    if (username === '' || password === '') {
        signupError.innerText = 'Username and password are required.';
        return false;
    }

    // Clear error message
    signupError.innerText = '';

    // Simulate successful signup; in a real scenario, you would send data to the server
    alert('Sign up successful!');

    // Redirect to coaching plans page
    window.location.href = 'coaching_plans.html';

    // Prevent form submission
    return false;
}

function selectPlan(price) {
    // You can implement logic here to store the selected plan
    // and navigate to the payment page
    window.location.href = 'payment.html';
}

function validatePayment() {
    var name = document.getElementById('name').value;
    var location = document.getElementById('location').value;
    var paymentMethod = document.getElementById('paymentMethod').value;
    var paymentError = document.getElementById('paymentError');

    // Basic validation, you can add more sophisticated validation
    if (name === '' || location === '') {
        paymentError.innerText = 'Name and location are required.';
        return false;
    }

    // Clear error message
    paymentError.innerText = '';

    // Simulate successful payment; in a real scenario, you would process payment on the server
    alert('Payment successful! Thank you for your trust.');

    // Prevent form submission
    return false;
}
