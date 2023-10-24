$(document).ready(function () {
    // Hide error messages and success message initially
    $('.error').hide();
    $('#success-message').hide();

    // Function to check if all fields are valid
    function validateForm() {
        var username = $('#username').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirm-password').val();

        // Username validation: Allow letters, numbers, and underscores
        var isUsernameValid = /^[A-Za-z0-9_]+$/.test(username);

        var isPasswordValid = password.length > 0;
        var isConfirmPasswordValid = confirmPassword.length > 0 && confirmPassword === password;

        return isUsernameValid && isPasswordValid && isConfirmPasswordValid;
    }

    // Update the "Register" button state based on form validation
    $('#registration-form input').on('input', function () {
        $('#register-button').prop('disabled', !validateForm());
    });

    // Handle form submission
    $('#registration-form').submit(function (event) {
        event.preventDefault();
        if (validateForm()) {
            // Registration is successful
            $('#success-message').show();
        } else {
            // Display validation errors
            $('.error').show();
        }
    });
});
