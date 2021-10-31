const password = "TrustNo1";

let passwordCheckBtn = document.getElementById("btn-pswrd");

passwordCheckBtn.addEventListener("click", checkPassword);

let passwordInput = document.getElementById("pswrd");

let checkControlElements = document.getElementsByClassName("check-control");

let rangeControlElements = document.getElementsByClassName("range-control");

let launchBtn = document.querySelector(".launch-btn");

launchBtn.addEventListener("click", launchRocket);

Array.prototype.forEach.call(checkControlElements, item => {
    item.onchange = checkControls;
});

Array.prototype.forEach.call(rangeControlElements, item => {
    item.onchange = checkControls;
});

function checkPassword(){
    if (passwordInput.value === password){
        activateLaunchPad();
        passwordInput.disabled = true;
        passwordCheckBtn.disabled = true;
    }
}

function activateLaunchPad(){
    Array.prototype.forEach.call(rangeControlElements, item => {
        item.disabled = false;
    });

    Array.prototype.forEach.call(checkControlElements, item => {
        item.disabled = false;
    });
}

function checkControls(){
    let checked = true;
    Array.prototype.forEach.call(checkControlElements, item => {
        if (item.checked === false) {
            checked = false;
        }
    });
    Array.prototype.forEach.call(rangeControlElements, item => {
       if (item.value !== "100"){
           checked = false;
       }
    });
    if (checked) {
        launchBtn.disabled = false;
    }
}

function launchRocket() {
    let rocket = document.getElementById("rocket");
    rocket.classList.add("flying");
    launchBtn.disabled = true;
}
