// Name: Prabath Reddy Sagili Venkata
// G-Number: G01393364

// JS Function to validate different fields
// Function is called when the user clicks the submit button
function validateUserInput()
{   
    // Get the input fields data based on id
    var name = document.getElementById("name");
    var addressInput = document.getElementById("street");
    var emailInput = document.getElementById("email");

    // Get the input fields data based on input type
    var checkboxInputs = document.querySelectorAll('input[type="checkbox"]:checked');
    var radioInputs = document.querySelectorAll('input[type="radio"]');

    // Define regular expressions for validation
    const nameRegex = /^[A-Za-z\s]+$/;
    const addressRegex = /^[A-Za-z0-9\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Initialize and empty error message
    var errorMessage = "";

    // Validate name field
    if (!nameRegex.test(name.value)) {
        
        // errorMessage = "Name should contain only alphabets";
        // errorMessage = "ERROR!!! Please re-check the entered details.";
        name.value = "";
        errorMessage += "Names should only contain letters and spaces\n";
    }

    // Validate address field
    if (!addressRegex.test(addressInput.value)) {
        // errorMessage = "Address should contain only appropriate numeric, alphabet or alphanumeric characters";
        // errorMessage = "ERROR!!! Please re-check the entered details.";
        addressInput.value = "";
        errorMessage += "Address should contain only numeric, alphabet or alphanumeric characters\n";
    }

    // Validate email field
    if (!emailRegex.test(emailInput.value)) {
        // errorMessage = "Email address format should be valid";
        // errorMessage = "ERROR!!! Please re-check the entered details.";
        emailInput.value= "";
        errorMessage += " Please enter a valid email address\n";
    }

    // Validate checkbox fields
    if (checkboxInputs.length < 2) {
        errorMessage += "Please select at least 2 checkboxes\n";
		// alert("Please select at least 2 checkboxes.");

	}

    // Validate radio fields
    var radioChecked = false;
    for (var i = 0; i < radioInputs.length; i++) {
      if (radioInputs[i].checked) {
        radioChecked = true;
        break;
      }
    }
    if (!radioChecked) {
        // errorMessage = "ERROR!!! Please re-check the entered details.";
        errorMessage += "Please select a radio button option\n";
    }

    // If there are any errors, display the error message in a dialog box
    if (errorMessage !== "") {
        alert(errorMessage);
        return false;
    } else {
        // If there are no errors, submit the form
        alert("Form Submitted Successfully!!");
        return true;
    }
}