// Name: Prabath Reddy Sagili Venkata
// G-Number: G01393364

// JS Function to calculate average and maximum of 10 numbers
// Function is called when the user exits the data box text field
function computeFunction()
{   
    // Get the input data entered by the user.
    var dataInput = document.getElementById("data").value;
    
    // Split the data into an array of strings using commas as the delimiter.
    var data_string = dataInput.split(",");
    
    // Convert the string array into an integer array.
    var data_integer = data_string.map(Number);

    // Check if the array has exactly 10 elements.
    if (data_integer.length === 10) 
    {   
        // Filter out any elements that are not between 1 and 100.
        data_integer = data_integer.filter(function(num) {
            return num >= 1 && num <= 100;
        });

        // Check if the array still has exactly 10 elements.
        if (data_integer.length === 10) 
        {   
            // Calculate the average of the array and display it.
            var avg = average(data_integer);
            document.getElementById("average").value = avg;
            
            // Find the maximum value in the array and display it.
            var max = maximum(data_integer);
            document.getElementById("maximum").value = max;
        }
        else
        {   
            // Display an error message if the array does not have exactly 10 elements between 1 and 100.
            alert("Please enter exactly 10 comma-separated numbers between 1 and 100.");
        }
    }
    else 
    {   
        // Display an error message if the array does not have exactly 10 elements.
        alert("Please enter exactly 10 comma-separated numbers");
    }
}

// This function calculates the average of an array of integers.
function average(array)
{   
    var total = 0;

    // Loop through the array and add up all the elements.
    for(var i=0; i<array.length; i++)
    {
        total += array[i] 
    }

    // Calculate the average by dividing the total by the length of the array.
    var avg = total/array.length; 

    return avg;
}


// This function finds the maximum value in an array of integers.
function maximum(array)
{
    var max = 0;

    // Loop through the array and compare each element to the current maximum.
    for(var i=0; i<array.length; i++)
    {
        if(max<array[i])
        {
            max=array[i] 
        }
    }

    return max;
}