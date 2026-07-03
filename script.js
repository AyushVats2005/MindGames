const loginBtns = document.querySelectorAll(".login-btn");
const closeBtn = document.getElementById("close-btn");
const loginModal = document.getElementById("login-modal");

// Open Login Modal
loginBtns.forEach((button) => {
    button.addEventListener("click", () => {
        loginModal.style.display = "flex";
    });
});

// Close Login Modal
closeBtn.addEventListener("click", () => {
    loginModal.style.display = "none";
});

// Close when clicking outside the box
loginModal.addEventListener("click", (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = "none";
    }
});

//SignUP page
const signBtns = document.querySelectorAll(".signup-btn");
const closeSignBtn = document.getElementById("close-signup-btn");
const signupModal = document.getElementById("signup-modal");

//open signup modal
signBtns.forEach((button)=> {
    button.addEventListener("click", ()=> {
        signupModal.style.display = "flex";
    });
});

//close signup btn
closeSignBtn.addEventListener("click", () => {
    signupModal.style.display ="none";
});

//Close when clicking outside the box
signupModal.addEventListener("click",(e)=> {
    if(e.target === signupModal) {
        signupModal.style.display = "none";
    }
});