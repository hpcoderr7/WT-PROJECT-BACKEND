function login(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const username = document.getElementById('login_username').value;
    const password = document.getElementById('login_password').value;

    // Prepare data for sending
    const data = {
        action: 'login',
        username: username,
        password: password
    };

    // Send the data to the PHP script
    fetch('http://localhost/login_app/auth.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        if (data.success) {
          alert(data.message);
          window.location.href = 'index.html'; // Ensure this file exists
        } else {
          document.getElementById('errorMessage').style.display = 'block'; // Show error message
        }
        
       
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('errorMessage').style.display = 'block'; // Show error message
    });
}


if (data.success) {
  alert(data.message);
  window.location.href = 'index.html'; // Ensure this file exists
} else {
  document.getElementById('errorMessage').style.display = 'block'; // Show error message
}
