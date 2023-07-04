function enlargeImg() {
    const main_pi = document.getElementById("main_pic");
    if(main_pi.style.width === "40%"){
            main_pi.style.width = "70%";
            main_pi.style.height = "auto";
            main_pi.style.transition = "width 0.5s ease";
        }
    else {
        main_pi.style.width = "40%";
        main_pi.style.height = "auto";
        main_pi.style.transition = "width 0.5s ease";
    }}
        // Function to reset image dimensions

function coolHamster() {
    const ham = document.getElementById("cool_hamster");
    if (ham.style.visibility === "hidden") {
        ham.style.visibility = "visible";
    } else {
        ham.style.visibility = "hidden";
    }
}

function mouseover_dude() {
    const rand_box = document.getElementById("rand_box_p");
    rand_box.style.width = "30%";
}

function mouseover_du() {
    const rand_box = document.getElementById("rand_box_p");
    rand_box.style.width = "70%";
}
