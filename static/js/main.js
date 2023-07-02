const img = document.getElementById("main_pic");

// This handler will be executed only once when the cursor
// moves over the unordered list
function enlargeImg() {
            img.style.width = "50%";
            img.style.height = "auto";
            img.style.transition = "width 0.5s ease";
        }
        // Function to reset image dimensions
function resetImg() {
    img.style.width = "30%";
    img.style.height = "auto";
    img.style.transition = "width 0.5s ease";
}

function coolHamster() {
    const ham = document.getElementById("cool_hamster");

    ham.style.visibility = "visible";
}

function unCoolHamster() {
    const ham = document.getElementById("cool_hamster");

    ham.style.visibility = "hidden";
}
