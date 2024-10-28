$(document).ready(function() {
    $('#signupForm').submit(function(event) {
      event.preventDefault();

      // Get form data
      var formData = {
        username: $('input[name="Username"]').val(),
        email: $('input[name="Email"]').val(),
        password: $('input[name="Password"]').val()
      };

      // Send AJAX request
      $.ajax({
        type: 'POST',
        url: 'your_signup_endpoint.php', // Replace with your server endpoint
        data: formData,
        dataType: 'json',
        encode: true,
        success: function(response) {
          if (response.success) {
            alert('Signup successful!');
            // Redirect or perform other actions upon successful signup
          } else {
            alert('Signup failed: ' + response.message);
          }
        },
        error: function(xhr, status, error) {
          alert('An error occurred: ' + error);
        }
      });
    });
  });