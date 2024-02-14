// Default tab
$(".tab").css("display", "none");
$("#tab-1").css("display", "block");

function run(hideTab, showTab) {
    if (hideTab < showTab) {
        // If not press the previous button
        // Validation if press the next button
        var currentTab = 0;
        x = $('#tab-' + hideTab);
        y = $(x).find("input")
        for (i = 0; i < y.length; i++) {
            if (y[i].value == "") {
                $(y[i]).css("background", "#ffdddd");
                return false;
            }
        }

        // Additional email and password validation for the first tab
        if (hideTab === 1) {
            var email = $("#email").val();
            var password = $("#password").val();

            // Email validation using a regular expression
            var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(email)) {
                alert("Invalid email address");
                return false;
            }

            // Password validation
            if (!validatePassword(password)) {
                alert("Password must contain at least one special character, one upper case letter, one lower case letter, and one digit");
                return false;
            }
        }
    }

// ... (previous code remains unchanged)





    // Progress bar
    for (i = 1; i < showTab; i++) {
        $("#step-" + i).css("opacity", "1");
    }

    // Switch tab
    $("#tab-" + hideTab).css("display", "none");
    $("#tab-" + showTab).css("display", "block");
    $("input").css("background", "#fff");
}

function validatePassword(password) {
    // Password validation (at least one special character, one upper case letter, one lower case letter, and one digit)
    var passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}

function submitForm() {
    // Additional validation or form submission logic can be added here
    alert("Form submitted successfully!");
}

function togglePasswordVisibility() {
    var passwordInput = $("#password");

    if (passwordInput.attr("type") === "password") {
        passwordInput.attr("type", "text");
    } else {
        passwordInput.attr("type", "password");
    }
}

function validatePhoneNumber(input) {
    var phoneNumber = input.value;

    // Check if the phone number contains only digits
    if (!/^\d+$/.test(phoneNumber)) {
        document.getElementById('phoneNumberError').innerText = 'Phone number should only contain digits.';
    } else {
        document.getElementById('phoneNumberError').innerText = '';
    }
}

function validateAge(input) {
    var age = input.value;

    // Check if the age contains only digits and is below 100
    if (!/^\d+$/.test(age) || parseInt(age) >= 100) {
        document.getElementById('ageError').innerText = 'Age should only contain digits and be below 100.';
    } else {
        document.getElementById('ageError').innerText = '';
    }
}