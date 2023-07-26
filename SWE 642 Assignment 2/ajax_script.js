// Name: Prabath Reddy Sagili Venkata
// G-Number: G01393364

// JS Function to AJAX
// Function is called when the user exits the zip code input field
function handleZipBlur() {

    // Get the zip code entered by the user
    var zip = document.getElementById("zip").value;

    // Check if the zip code is not empty
    if (zip !== "") 
    {
        // Create an XMLHttpRequest object to make an asynchronous request to the server
        var asyncRequest = new XMLHttpRequest();

        // Set the HTTP request method, URL and async parameter
        asyncRequest.open("GET", "zipcodes.json", true);

        // Set a callback function to be called when the readyState of the request changes
        asyncRequest.onreadystatechange = function() 
        {
            // Check if the request is completed and the response is OK
            if (this.readyState === 4 && this.status === 200) 
            {
                // Parse the JSON response into an object
                var data = JSON.parse(this.responseText);

                // Initialize a flag to keep track if the zip code is found in the data
                var found = false;

                // Loop through the data to find the matching zip code
                for (var i = 0; i < data.length; i++) 
                {
                    if (data[i].zip === zip) 
                    {
                        // If a match is found, update the city and state fields with the corresponding values
                        found = true;
                        document.getElementById("city").innerHTML = data[i].city;
                        document.getElementById("state").innerHTML = data[i].state;
                        break;
                    }
                }
                // If the zip code is not found, display an error message and clear the city and state fields
                if (!found) 
                {
                    document.getElementById("city").innerHTML = "";
                    document.getElementById("state").innerHTML = "";
                    document.getElementById("zip-error").innerHTML = "Invalid zip code!";
                } 
                else 
                {
                    // If the zip code is found, clear the error message    
                    document.getElementById("zip-error").innerHTML = "";
                }
            }
        };
        // Send the XMLHttpRequest to the server
        asyncRequest.send();
    }
    // If the zip code is empty, clear the city and state fields and the error message 
    else 
    {
        document.getElementById("city").innerHTML = "";
        document.getElementById("state").innerHTML = "";
        document.getElementById("zip-error").innerHTML = "";
    }
}
  