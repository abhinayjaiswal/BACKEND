document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple form validation
    if(username === '' || email === '' || password === '') {
        alert('All fields are required.');
        return;
    }
    
    // Perform further actions, like sending data to the server
    console.log('Form submitted:', { username, email, password });
    alert('Registration successful!');
});