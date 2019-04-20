function thisFunction() {
    fName = document.getElementById("firstName").value;
    lName = document.getElementById("lastName").value;
    phone = document.getElementById("phone").value;
    emailAddr = document.getElementById("email").value;
    confirm("Name: " + fName + " " + lName + "\n" + "Phone: " + phone + "\n" + "Email: " + emailAddr);
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function setCookie() {
    fName = document.getElementById("firstName").value;
    lName = document.getElementById("lastName").value;
    phone = document.getElementById("phone").value;
    emailAddr = document.getElementById("email").value;
    selectedService = document.getElementById("service").value;
    
    document.cookie = "name:"+fName+" "+lName+",phone:"+phone+",email:"+emailAddr+",service:"+selectedService;
    window.location='./conformationPage.html';
}

function readCookie() {
    console.log(document.cookie)
    c = document.cookie.split(',');
    console.log(c)
    fullName = c[0].split(":")[1];
    phone = c[1].split(":")[1];
    email = c[2].split(":")[1];
    service = c[3].split(":")[1];
    document.getElementById("fullName").value = fullName;
    document.getElementById("email").value = phone;
    document.getElementById("phone").value = email;
    document.getElementById("service").value = service;

    if(document.getElementById("service").value == "CarDetail"){
        document.getElementById("total").value = "$75"
    }
    if(document.getElementById("GroceryPicup").value == "CarDetail"){
        document.getElementById("total").value = "$55"
    }
    if(document.getElementById("DogWalking").value == "CarDetail"){
        document.getElementById("total").value = "$25"
    }
    if(document.getElementById("TaxiService").value == "CarDetail"){
        document.getElementById("total").value = "$35"
    }

}