// function handleZipBlur() {
//     var zip = document.getElementById("zip").value;
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         var data = JSON.parse(xhr.responseText);
//         var found = false;
//         for (var i = 0; i < data.length; i++) {
//           if (data[i].zip == zip) {
//             found = true;
//             document.getElementById("city").innerHTML = data[i].city;
//             document.getElementById("state").innerHTML = data[i].state;
//             break;
//           }
//         }
//         if (!found) {
//           document.getElementById("zip").value = "an invalid zip";
//           document.getElementById("city").innerHTML = "";
//           document.getElementById("state").innerHTML = "";
//         }
//       }
//     };
//     xhr.open("GET", "zipcodes.json", true);
//     xhr.send();
// }

function handleZipBlur() {
    var zip = document.getElementById("zip").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "zipcodes.json", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(this.responseText);
        var found = false;
        for (var i = 0; i < data.length; i++) {
          if (data[i].zip === zip) {
            found = true;
            document.getElementById("city").innerHTML = data[i].city;
            document.getElementById("state").innerHTML = data[i].state;
            break;
          }
        }
        if (!found) {
          document.getElementById("city").innerHTML = "";
          document.getElementById("state").innerHTML = "";
          document.getElementById("zip-error").innerHTML = "Invalid zip code!";
        } else {
          document.getElementById("zip-error").innerHTML = "";
        }
      }
    };
    xhr.send();
  }

  // function handleZipBlur() {
//     var zip = document.getElementById("zip").value;
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "zipcodes.json", true);
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         var data = JSON.parse(this.responseText);
//         var found = false;
//         for (var i = 0; i < data.length; i++) {
//           if (data[i].zip === zip) {
//             found = true;
//             document.getElementById("city").innerHTML = data[i].city;
//             document.getElementById("state").innerHTML = data[i].state;
//             document.getElementById("zip-error").innerHTML = "";
//             break;
//           }
//         }
//         if (!found) {
//           document.getElementById("city").innerHTML = "";
//           document.getElementById("state").innerHTML = "";
//           document.getElementById("zip-error").innerHTML = "Invalid zip code!";
//         }
//       }
//     };
//     xhr.send();
//   }
  