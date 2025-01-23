addEventListener("keypress", function(event)
{
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("PasswordBtn").click();
    }
});

const correctPassword = "0000";

function checkPassword(inputPassword){
    if(inputPassword === correctPassword){
        return true;
    }
}

document.getElementById("PasswordBtn").addEventListener("click", function () {
    const userInput = document.getElementById("myInput").value; // Get the input value
    const correctPassword = "0000"; // Define the correct password

    if (userInput === correctPassword) {
        document.getElementById("PBox").style.display = "none";
    } else {
        alert("Incorrect password. Please try again.");
    }
});

//ADD IF CLICKED AWAY FROM MANAGER NEED TO LOG IN AGAIN


