function createAccount(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get input values
  const name = document.getElementById('signup_name').value;
  const username = document.getElementById('signup_username').value;
  const email = document.getElementById('signup_email').value;
  const password = document.getElementById('signup_password').value;

  // Prepare data for sending
  const data = {
      action: 'create_account',
      name: name,
      username: username,
      email: email,
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
          window.location.href = 'login.html'; // Redirect to login page
      }
  })
  .catch((error) => {
      console.error('Error:', error);
  });
}
