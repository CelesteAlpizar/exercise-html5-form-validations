let myForm = document.getElementById("myForm");
let CardNumber = document.getElementById("CardNumber");
let CVCNumber = document.getElementById("CVCNumber");
let Amount = document.getElementById("Amount");
let FirstName = document.getElementById("FirstName");
let LastName = document.getElementById("LastName");
let City = document.getElementById("City");
let State = document.getElementById("State");
let PostalCode = document.getElementById("PostalCode");
let Message = document.getElementById("Message");
let errorElement = document.getElementById("error");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    Validation();
})

function Validation() {
    let errorMessages = []
    
    if (CardNumber.value.length != 16) {
        errorMessages.push("Card Number must have 16 characters");
        InputColorChange(CardNumber);
    } else {
        InputRegularStyle(CardNumber);
    }

    if(CVCNumber.value.length != 4){
        errorMessages.push("CVC Number must have 4 characters");
        InputColorChange(CVCNumber);
    } else {
        InputRegularStyle(CVCNumber);
    }

    if (Amount.value == "" || Amount.value == "0" ) {
        errorMessages.push("Amount is required");
        InputColorChange(Amount);
    } else {
        InputRegularStyle(Amount);
    }

    if (FirstName.value === "") {
        errorMessages.push("First Name is required");
        InputColorChange(FirstName);
    } else {
        InputRegularStyle(FirstName);
    }

    if (LastName.value === "") {
        errorMessages.push("Last Name is required");
        InputColorChange(LastName);
    } else {
        InputRegularStyle(LastName);
    }

    if (City.value === "") {
        errorMessages.push("City is required");
        InputColorChange(City);
    } else {
        InputRegularStyle(City);
    }

    if (State.value === "Pick a state" ) {
        errorMessages.push("State is required");
        InputColorChange(State);
    } else {
        InputRegularStyle(State);
    }

    if (PostalCode.value === "") {
        errorMessages.push("Postal Code is required");
        InputColorChange(PostalCode);
    } else {
        InputRegularStyle(PostalCode);
    }

    if (Message.value == "") {
        errorMessages.push("Message is required");
        InputColorChange(Message);
    } else {
        InputRegularStyle(Message);
    }

    if (errorMessages.length > 0) {
        errorElement.innerText = errorMessages.join(", ");
    }

    if (errorMessages.length == 0){
        errorElement.innerText = errorMessages
    }
}

function InputColorChange(input) {
    input.style.background="#f8d7da";
}

function InputRegularStyle(input) {
    input.style.background=null
}