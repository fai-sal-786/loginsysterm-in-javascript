function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'password') {
        document.getElementById('loginMessage').innerHTML = 'Login sucessful';
    
    } else {
        document.getElementById('loginMessage').innerHTML = 'Invalid username or password';
    }
}
