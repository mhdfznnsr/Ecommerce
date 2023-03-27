let productImg = document.getElementById("product-img")
let smallImg = document.querySelectorAll(".small-img")
smallImg.forEach(img =>{
    img.addEventListener("click", function(){
        productImg.src = this.src
    })
})
const LoginForm = document.getElementById("LoginForm")
const RegForm = document.getElementById("RegForm")
const btn = document.getElementById("btn");
function register(){
    btn.style.left = "50%";
    RegForm.style.transform = "translateX(0px)"
    LoginForm.style.transform = "translateX(0px)"
}
function login(){
    LoginForm.style.transform = "translateX(100%)"
    RegForm.style.transform = "translateX(100%)"
    btn.style.left = "0";
}