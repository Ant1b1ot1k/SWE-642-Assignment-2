// Name: Prabath Reddy Sagili Venkata
// G-Number: G01393364

// This JS file is used to take generate a cookie

var now = new Date(); // current date and time
var hour = now.getHours(); // current hour (0-23)
var user_name;
var expires = new Date;
const nameRegex = /^[A-Za-z\s]+$/;

if ( hour < 12 ) // determine whether it is morning
    document.write( "<h1>Good Morning, " );
else
{
    hour = hour - 12; // convert from 24-hour clock to PM time

    // determine whether it is afternoon or evening
    if ( hour < 6 )
        document.write( "<h1>Good Afternoon, " );
    else
        document.write( "<h1>Good Evening, " );
} // end else 

if ( document.cookie )
{
    // convert escape characters in the cookie string to their
    // English notation
    var myCookie = decodeURI(document.cookie);

    // split the cookie into tokens using = as delimiter
    var cookieTokens = myCookie.split( "=" );

    // set name to the part of the cookie that follows the = sign
    user_name = cookieTokens[ 1 ];
 } // end if
else
{
    // if there was no cookie, ask the user to input a name
    user_name = window.prompt( "Please enter your name", "Paul" );

    while(!nameRegex.test(user_name)) {

        user_name = prompt("Please enter the correct user name");
    }

    // Set the cookie to expire after 24hrs
    expires.setTime(expires.getTime() + (86400 * 1000));

    // escape special characters in the name string
    // and add name to the cookie
    document.cookie = "name=" + encodeURI(user_name) + "; expires=" + expires.toUTCString() + "; path=/;" ;
} // end else 
document.writeln(user_name + ", welcome to SWE 642 Survey!</h1>" );
document.writeln("<p> The cookie expires in " + expires.toUTCString() + "</p>");
document.writeln( "<a href = 'javascript:wrongPerson()'> " + "Click here if you are not " + user_name + "</a>" );

// reset the document's cookie if wrong person
function wrongPerson()
{
    // reset the cookie
    document.cookie= "name=null;" + " expires=Thu, 01-Jan-95 00:00:01 GMT; path=/;";

    // reload the page to get a new name after removing the cookie
    location.reload();
} // end function wrongPerson 
