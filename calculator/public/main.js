const showBox = document.querySelector('#showBox');
const buttons = document.querySelectorAll("button");
const specialChar = ["*", "%", "/", "-", "+", "="];
let output = ""; // Initialize the output variable

// function calculate
const calculator = (buttonValue) => {
    if (buttonValue === "=" && output !== "") { // Check if output is not empty
        output = eval(output.replace("%", "/100"));
    } else if (buttonValue === "AC") {
        output = "";
    } else if (buttonValue === "del") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialChar.includes(buttonValue)) return;
        output += buttonValue;
    }

    showBox.value = output; // Change "display" to "showBox"
}

// event listener
buttons.forEach((button) => {
    button.addEventListener('click', (e) => calculator(e.target.dataset.value));
});
