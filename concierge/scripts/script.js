function thisFunction() {
    fName = document.getElementById("firstName").value;
    lName = document.getElementById("lastName").value;
    phone = document.getElementById("phone").value;
    emailAddr = document.getElementById("email").value;
    confirm("Name: " + fName + " " + lName + "\n" + "Phone: " + phone + "\n" + "Email: " + emailAddr);
}