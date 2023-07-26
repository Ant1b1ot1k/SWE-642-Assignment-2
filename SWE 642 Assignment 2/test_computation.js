   // Get the input field and output fields
   var dataInput = document.getElementById("data");
   var averageOutput = document.getElementById("average");
   var maximumOutput = document.getElementById("maximum");

   // Listen for the input field to lose focus
   dataInput.addEventListener("blur", function() {
     // Get the input value and split it into an array
     var data = dataInput.value.split(",");

     // Check if there are exactly 10 numbers
     if (data.length === 10) {
       // Convert the array elements to numbers and filter out any that are not between 1 and 100
       data = data.map(function(num) {
         return parseInt(num.trim());
       }).filter(function(num) {
         return num >= 1 && num <= 100;
       });

       // Check if there are exactly 10 valid numbers
       if (data.length === 10) {
         // Calculate the average and maximum
         var sum = data.reduce(function(acc, val) {
           return acc + val;
         }, 0);
         var average = sum / 10;
         var maximum = Math.max.apply(null, data);

         // Set the output values
         averageOutput.value = average.toFixed(2);
         maximumOutput.value = maximum;
       } else {
         alert("Please enter exactly 10 comma-separated numbers between 1 and 100.");
       }
     } else {
       alert("Please enter exactly 10 comma-separated numbers between 1 and 100.");
     }
   });