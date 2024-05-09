let modal = document.getElementById("modal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal if form is valid
btn.onclick = function (e) {
    if (validateForm()) {
        modal.style.display = "block";
    }
    e.preventDefault();
}

// Function to validate the form
function validateForm() {
    let nameInputs = document.querySelectorAll('input[type="text"]');
    let dateInput = document.getElementById('date');

    for (let input of nameInputs) {
        if (input.value.trim() === '') {
            alert("Please fill in all fields.");
            return false;
        }
    }

    if (dateInput.value === '') {
        alert("Please select a return date.");
        return false;
    }

    return true;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    window.location.reload();
}
