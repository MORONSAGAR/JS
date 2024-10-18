document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const loginMethod = document.getElementById('loginMethod').value;
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Clear previous error messages
    errorMessage.textContent = '';

    // Username validation
    if (loginMethod === 'username') {
        if (/\s/.test(username) || /\d/.test(username)) {
            errorMessage.textContent = 'Username should not contain spaces or digits.';
            return;
        }
    }

    // Email validation
    if (loginMethod === 'email') {
        if (!email.endsWith('@gmail.com')) {
            errorMessage.textContent = 'Email must end with @gmail.com.';
            return;
        }
    }

    // Mobile number validation
    if (loginMethod === 'mobile') {
        if (!/^\d{10}$/.test(mobile)) {
            errorMessage.textContent = 'Mobile number must be exactly 10 digits.';
            return;
        }
    }

    // Password validation
    const passwordCriteria = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordCriteria.test(password)) {
        errorMessage.textContent = 'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a digit, and a special character.';
        return;
    }

    // If all validations pass
    alert('Login successful!');
});
