var name = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var message = document.getElementById("message");

function reqListener() {
    console.log(this.responseText);
};

function sendData(){
    console.log("Button clicked");
    console.log(name);
    if(name.innerHTML && email.innerHTML && phone.innerHTML && message.innerHTML){
        var formobj = {
            email_address: email.innerHTML,
            status: "subscribed",
            merge_fields: {
                "FNAME": "BLANK",
                "LNAME": name.innerHTML 
        }};
            
        var postRequest = new XMLHttpRequest();
        postRequest.addEventListener("load", reqListener);
        postRequest.open("POST", "https://us15.api.mailchimp.com/3.0/lists/0ce84eb111/members");
        postRequest.send(formobj);
    } else {
        console.log("Empty Field");
    }
};