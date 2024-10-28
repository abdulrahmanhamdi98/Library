$(document).ready(function() {
    $('#loginForm').submit(function(event) {
      event.preventDefault();

      // Get form data
      var formData = {
        username: $('input[name="Username"]').val(),
        password: $('input[name="Password"]').val()
      };

      // Send AJAX request
      $.ajax({
        type: 'POST',
        url: 'your_login_endpoint.php', // Replace with your server endpoint
        data: formData,
        dataType: 'json',
        encode: true,
        success: function(response) {
          if (response.success) {
            alert('Login successful!');
            // Redirect or perform other actions upon successful login
          } else {
            alert('Login failed: ' + response.message);
          }
        },
        error: function(xhr, status, error) {
          alert('An error occurred: ' + error);
        }
      });
    });
  });