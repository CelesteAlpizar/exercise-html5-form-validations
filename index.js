let myForm = document.getElementById("myForm");
let CardNumber = document.getElementById("CardNumber");
let CVCNumber = document.getElementById("CVCNumber");
let Amount = document.getElementById("amount");
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
        errorMessages.push("Card Number must have 16 characters")
    }

    if(CVCNumber.value.length != 4){
        errorMessages.push("CVC Number must have 4 characters")
    }

    // if (Amount.value == 0) {
    //     errorMessages.push("Amount is required")
    // }

    if (FirstName.value === "" || FirstName.value == null) {
        errorMessages.push("First Name is required")
    }

    if (LastName.value === "" || LastName.value == null) {
        errorMessages.push("Last Name is required")
    }

    if (City.value === "" || City.value == null) {
        errorMessages.push("City is required")
    }

    // if (State.value ) {
    //     errorMessages.push("State is required")
    // }

    if (PostalCode.value === "" || PostalCode.value == null) {
        errorMessages.push("Postal Code is required")
    }

    if (Message.value === "" || Message.value == null) {
        errorMessages.push("Message is required")
    }

    if (errorMessages.length > 0){
        console.log(errorMessages);
        errorElement.innerText = errorMessages.join(", ");
    } 
}

// function ShowError(){
//     if (errorMessages.length > 0){
//         console.log(errorMessages);
//         errorElement.innerText = errorMessages.join(", ");
//     }
// }