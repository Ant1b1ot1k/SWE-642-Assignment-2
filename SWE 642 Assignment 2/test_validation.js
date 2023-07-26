// function validate() 
// {   
//     var id_list = []

//     const btn = document.getElementById("submit");

//     var first_name = document.getElementById("fname").value;
//     var fname_check = Boolean(first_name.match(/^[A-Za-z]*$/));

//     var last_name = document.getElementById("lname").value;
//     var lname_check = Boolean(last_name.match(/^[A-Za-z]*$/));

//     var street = document.getElementById("street").value;
//     var street_check = Boolean(street.match(/^[A-Za-z0-9]*$/));

//     // if(fname_check == false || lname_check == false || street_check == false)
//     //     alert("Please enter the correct input");

    
//     btn.addEventListener('click', function handleClick(event) {
//         // 👇️ if you are submitting a form
//         event.preventDefault();
        
//         if(fname_check == false || lname_check == false || street_check == false)
//         {
//             alert("Please enter the correct input");

//             if(fname_check == false)
//                 id_list.push("fname")
            
//             if(lname_check == false)
//                 id_list.push("lname")
            
//             if(street == false)
//                 id_list.push("street")

//             const inputs = document.querySelectorAll(id_list);
    
//             inputs.forEach(input => {
//             input.value = '';
//             });
//         }
//     });                
// }

function validate() 
{   

    const btn = document.getElementById("submit");

    var first_name = document.getElementById("fname").value;
    var fname_check = Boolean(first_name.match(/^[A-Za-z]*$/));

    var last_name = document.getElementById("lname").value;
    var lname_check = Boolean(last_name.match(/^[A-Za-z]*$/));

    var street = document.getElementById("street").value;
    var street_check = Boolean(street.match(/^[A-Za-z0-9]*$/));

    if(fname_check == false || lname_check == false || street_check == false)
        alert("Please enter the correct input");

    
    // btn.addEventListener('click', function handleClick(event) {
    //     // 👇️ if you are submitting a form
    //     event.preventDefault();
        
    //     if(fname_check == false || lname_check == false || street_check == false)
    //     {
    //         alert("Please enter the correct input");

    //         if(fname_check == false)
    //         {
    //             const inputs = document.querySelectorAll("fname");
    //             inputs.value = '';
    //         }

    //         if(last_name == false)
    //         {
    //             const inputs = document.querySelectorAll("lname");
    //             inputs.value = '';
    //         }

    //         if(street == false)
    //         {
    //             const inputs = document.querySelectorAll("street");
    //             inputs.value = '';
    //         }
    //     }
    // });   
    
    
}

window.onload = function() {
    // using function
    clearValue("userID");
    clearValue("passwd");

    // or, reset entire form
    document.getElementById("myform").reset();

    // or, clear each field one-by-one
    var f = document.getElementById("myform").elements;
    f["userId"].value = "";
    f["passwd"].value = "";
}


function validate() {
    // Get the form and submit button
    var surveyForm = document.getElementById("survey-form");
    var submitButton = document.getElementById("submit");
  
    // Get the input fields
    var firstName = document.getElementById("fname");
    var lastName = document.getElementById("lname");
    var addressInput = document.getElementById("street");
    var emailInput = document.getElementById("email");
    var checkboxInputs = document.getElementsByName('likemost');
    var radioInputs = document.querySelectorAll('input[type="radio"]');
  
    // Define regular expressions for validation
    var nameRegex = /^[A-Za-z]+$/;
    var addressRegex = /^[A-Za-z0-9\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Initialize error message
    var errorMessage = "";
  
    // Validate first name field
    if (!nameRegex.test(firstName.value)) {
      errorMessage = "Please enter a valid first name";
      firstName.value = "";
    }
  
    // Validate last name field
    if (!nameRegex.test(lastName.value)) {
      errorMessage = "Please enter a valid last name";
      lastName.value = "";
    }
  
    // Validate address fields
    if (!addressRegex.test(addressInput.value)) {
      errorMessage = "Please enter a valid address";
      addressInput.value = "";
    }
  
    // Validate email field
    if (!emailRegex.test(emailInput.value)) {
      errorMessage = "Please enter a valid email address";
      emailInput.value = "";
    }
  
    // Validate checkbox and radio button fields
    var checkboxCheckedCount = 0;
    for (var i = 0; i < checkboxInputs.length; i++) {
      if (checkboxInputs[i].checked) {
        checkboxCheckedCount++;
      }
    }
    if (checkboxCheckedCount < 2) {
        errorMessage = "Please select at least two checkboxes";
        // Clear the checkboxes that were not selected
        for (var i = 0; i < checkboxInputs.length; i++) {
            if (!checkboxInputs[i].checked) {
            checkboxInputs[i].checked = false;
            }
        }
        // prevent form submission
        event.preventDefault();
    }
  
    var radioChecked = false;
    for (var i = 0; i < radioInputs.length; i++) {
      if (radioInputs[i].checked) {
        radioChecked = true;
        break;
      }
    }
    if (!radioChecked) {
      errorMessage = "Please select a radio button option";
    }
  
    // If there are any errors, display the error message in an alert box
    if (errorMessage !== "") {
      alert(errorMessage);
    } else {
      // If there are no errors, enable the submit button and allow form submission
      submitButton.disabled = false;
      surveyForm.submit();
    }
  }
  
