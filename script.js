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
    for (i = 0; i < showTab; i++) {
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
    // Validation for Education tab
    var institution1 = document.getElementById("institution1").value.trim();
    var hscPercentage = document.getElementById("hscPercentage");
    var institution2 = document.getElementById("institution2").value.trim();
    var sscPercentage = document.getElementById("sscPercentage");
    var institution3 = document.getElementById("institution3").value.trim();
    var degreePercentage = document.getElementById("degreePercentage");

    // Validate percentage values
    if (!isValidPercentage(hscPercentage.value)) {
        displayErrorMessage(hscPercentage, "Please enter a valid HSC percentage (0-100).");
        return false;
    }

    if (!isValidPercentage(sscPercentage.value)) {
        displayErrorMessage(sscPercentage, "Please enter a valid SSC percentage (0-100).");
        return false;
    }

    if (!isValidPercentage(degreePercentage.value)) {
        displayErrorMessage(degreePercentage, "Please enter a valid degree percentage (0-100).");
        return false;
    }

    // Clear error messages if validation passes
    clearErrorMessages();

    if (institution1 === "" || institution2 === "" || institution3 === "") {
        alert("Please fill in all the Education details.");
        return false;
    }

    // Other form submission logic (if needed)

    // If all validations pass, you can submit the form or perform other actions
    document.getElementById("myForm").submit();
}

// Function to validate percentage values
function isValidPercentage(percentage) {
    var numericValue = parseFloat(percentage);
    return !isNaN(numericValue) && numericValue >= 0 && numericValue <= 100;
}

// Function to display error message
function displayErrorMessage(element, message) {
    var errorMessageElement = document.createElement("span");
    errorMessageElement.className = "error-message";
    errorMessageElement.style.color = "red";
    errorMessageElement.textContent = message;

    // Insert error message after the input field
    element.parentNode.insertBefore(errorMessageElement, element.nextSibling);
}

// Function to clear error messages
function clearErrorMessages() {
    var errorMessages = document.getElementsByClassName("error-message");
    for (var i = 0; i < errorMessages.length; i++) {
        errorMessages[i].parentNode.removeChild(errorMessages[i]);
    }
}


// Add pattern attribute and required attribute to each input field in the Education tab


// Add pattern attribute and required attribute to each input field in the Education tab


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
