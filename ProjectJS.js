
//4

document.write("<hr style='width:100%'>");



//6

document.write("<br>");
document.write('Please Enter your information below:');
document.write("<br>");
document.write("<br>");
//7

document.write("Full Name: <p><input type='text' placeholder='Enter your full name: ' id='fullname'></p>");

//8

document.write("Street Name:<p> <input type='text' placeholder='Enter your street name : ' id='streetname'></p>");
document.write("City:<p> <input type='text' placeholder='Enter your city name: ' id='cityname'></p>");
document.write("State:<p> <input type='text' placeholder='Enter State name: ' id='statename'></p>");
document.write("Zip Code:<p> <input type='number' placeholder='Enter your zip code: ' id='zipcode'></p>");


//9



//10 and 11

document.write("Email :<p><input type='email' placeholder='Enter your e-mail address: ' required id='email'></p>");
document.write("Phone Number:<p><input type='number' placeholder='Enter your phone number: ' id='phone'></p>");
document.write("Soial Media Link (s):<p><input type='url' name='url' placeholder='https://example.com' id='url'></p>");

//12

document.write("Programming Languages You Know:<p><textarea placeholder='Enter your coding skills: ' id='cs'></textarea></p>");
document.write("Work Ethics:<p><textarea placeholder='Describe your work ethics  ' id='we'></textarea></p>");


//13

document.write("Career objective<p><textarea placeholder='Enter your Career Objective: ' id='co'></textarea></p>");

//14

document.write("Educational Background<p><textarea placeholder='Write about your  educational background: ' id='eb'></textarea></p>");

//15

document.write("<p>Your Last Employment Start Date: <input type='date' placeholder='Enter your Entry Date: ' value='' id='myDate1'>Your Last Employment End Date: <input type='date' placeholder='Enter your Exit Date: ' value='' id='myDate2'></p>");

//16

document.write("Your Last Employment Experience: <p><textarea placeholder='Enter your most recent employment experience: ' id='ee'></textarea></p>");

//17

document.write("Perviouse Employment Experience: <p><textarea placeholder='Enter your priviouse employment experience: ' id='eb2'></textarea></p>");

document.write("<p> Start Date: <input type='date' placeholder='Enter your Entry Date: ' value='' id='myDate3'> End Date: <input type='date' placeholder='Enter your Exit Date: ' value='' id='myDate4'></p>");

document.write("Perviouse Employment:<p><textarea placeholder='Enter your  priviouse employment experience: ' id='eb3'></textarea></p>");

document.write("<p>Start Date: <input type='date' placeholder='Enter your Entry Date: ' value='' id='myDate5'> End date: <input type='date' placeholder='Enter your Exit Date: ' value='' id='myDate6'></p>");

document.write("Perviouse Employment Experience:<p><textarea placeholder='Enter your  priviouse employment experience: ' id='eb4'></textarea></p>");

document.write("<p>Start Date: <input type='date' placeholder='Enter your Entry Date: ' value='' id='myDate7'> End date: <input type='date' placeholder='Enter your Exit Date: ' value='' id='myDate8'></p>");

//18

document.write("Business refrences<p><textarea placeholder='Enter your business references: ' id='br'></textarea></p>");

//19

document.write("<input type='button' value='Create Resume' onclick='validateemail()'/></center>");

//output

function validateemail() {

    var fullname = document.getElementById("fullname").value;
    var streetname = document.getElementById("streetname").value;
    var cityname = document.getElementById("cityname").value;
    var zipcode = document.getElementById("zipcode").value;
    var statename = document.getElementById("statename").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var link=document.getElementById("url").value;
    var cs = document.getElementById("cs").value;
    var we = document.getElementById("we").value;
    var co = document.getElementById("co").value;
    var eb = document.getElementById("eb").value;
    var firstDate1 = document.getElementById("myDate1").value;
    var secondDate1 = document.getElementById("myDate2").value;
    var ee = document.getElementById("ee").value;
    var eb2 = document.getElementById("eb2").value;
    var firstDate2 = document.getElementById("myDate3").value;
    var secondDate2 = document.getElementById("myDate4").value;
    var eb3 = document.getElementById("eb3").value;
    var firstDate3 = document.getElementById("myDate5").value;
    var secondDate3 = document.getElementById("myDate6").value;
    var eb4 = document.getElementById("eb4").value;
    var firstDate4 = document.getElementById("myDate7").value;
    var secondDate4 = document.getElementById("myDate8").value;
    var br = document.getElementById("br").value;
    var email = document.getElementById("email").value;
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");

    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {

        alert("Please enter a valid e-mail address");

        return false;

    }

    else if (fullname == '') {

        alert("Please enter full name");

    }

    else if (streetname == '') {

        alert("Please enter street name");

    }

    else if (cityname == '') {

        alert("Please enter city name");

    }

    else if (cityname == '') {

        alert("Please enter cityname");

    }
    else if (zipcode == '') {

        alert("Please enter zip code");

    }


    else if (email == '') {

        alert("Please enter E-mail");

    }
    else if (phone == '') {

        alert("Please enter your phone number");

    }
    else if (link == '') {

        alert("Please enter your protifo link");

    }
    

    else if (cs == '') {

        alert("Please enter your coding skill");

    }
    else if (we == '') {

        alert("Please enter your work ethics");

    }

    else if (co == '') {

        alert("Please enter Career Objective");

    }

    else if (eb == '') {

        alert("Please enter Educational Background");

    }

    else if (firstDate1 == '' || secondDate1 == '') {

        alert("Please enter Entry and Exit Dates");

    }

    else if (ee == '') {

        alert("Please enter Employment Experience");

    }

    else if (eb2 == '') {

        alert("Please enter Educational Background");

    }

    else if (firstDate2 == '' || secondDate2 == '') {

        alert("Please enter Entry and Exit Dates");

    }

    else if (eb3 == '') {

        alert("Please enter Educational Background");

    }

    else if (firstDate3 == '' || secondDate3 == '') {

        alert("Please enter Entry and Exit Dates");

    }

    else if (eb4 == '') {

        alert("Please enter Educational Background");

    }

    else if (firstDate4 == '' || secondDate4 == '') {

        alert("Please enter Entry and Exit Dates");

    }

    else if (br == '') {

        alert("Please enter business references");

    }

    else {

       
        
        myText = "<!doctype html><html> <head> <title>Ressume</title><style>.heading {background-color: rgb(139, 158, 154);display: grid;grid-template-columns: 100%;grid-gap: 1em; margin-right: 10%;margin-left: 10%;margin-top: 20px;       }   .wrapper { display: grid;grid-template-columns: 50% 50%; grid-gap:10px;margin-top: 20px;margin-right: 10%;   margin-left: 10%; margin-bottom: 20px;font-family: monospace;}  hr {width: 100%;}.ow-break-word {overflowed-wrap: break-word;} body {  font-size: 12pt; font-family: verdana;}        h {display: list-item;list-style-type: disc;list-style-position: inside; }</style></head><body><div class='heading'><div ><h1><center>"+fullname+"</h1></center></div><div><h> Address </h></div><div>"+streetname+"</div><div>"+cityname+"</div><div>"+statename+"</div>  <div>"+zipcode+"</div> <div><h>Email :"+email+"</h></div><div><h>"+phone+"</h></div><div><h>"+link+"</h></div> </div><hr> <div class='wrapper'><div>Coding Skill</div>  <div class='ow-break-word'> "+cs+"</div><hr><hr><div>Work Ethics</div>  <div class='ow-break-word'> "+we+"</div><hr><hr><div>Career Object</div><div class ='overflow-wrap'>"+co+" </div><hr> <hr>  <div>Education Background from"+firstDate1+" to"+secondDate1+"</div><div class='overflow-wrap'>"+eb+"</div><hr><hr><div>The Most recent employment experince</div><div class='overflow-wrap'>"+ee+"</div><hr><hr><div>Your second edication experence from "+firstDate2+"to "+secondDate2+"</div><div class='overflow-wrap'>"+eb2+"</div><hr><hr><div>Enter your second Education Experince from   "+firstDate3+" to "+secondDate3+"</div><div class='overflow-wrap'>"+eb3+"</div><hr><hr><div>Enter your second Education Experince from   "+firstDate4+" to "+secondDate4+"</div><div class='overflow-wrap'>"+eb4+"</div><hr><hr><div>Enter your business reference</div><div class='overflow-wrap'>"+br+"</div></div></body></html>";

        flyWindow = window.open('about:blank', 'myPop', 'width=1000,height=500,left=200,top=200');
        flyWindow.document.write(myText);


        
    }
}




