var signupbtn = document.getElementById("signup");
var closebtn = document.getElementById("close_btn")
var signbox = document.getElementById("createaccount");
var Login= document.getElementById("Login");
var signnup= document.getElementById("sign-up");
var signupbox = document.getElementById("signup-box");
var signinbox = document.getElementById("signin-box");
const Form = document.querySelector("#emailForm");
const emailInput = document.querySelector("#eemail")
var slider =document.querySelector(".image")
var scrollleft = document.querySelector(".scroll-left-button")
var scrollright = document.querySelector(".scroll-right-button")


//signup box
signupbtn.addEventListener("click",function(){
    gsap.to(signbox, { 
        x:-600, scale:1, duration:.9, delay:0.3,
        ease:"power2.inout", display: "block"
    })   
});
closebtn.addEventListener("click", function(){
    gsap.to(signbox, {
        x:600, scale:1, duration:2, delay:0.3, ease:"power2.inout" , display:"none"
    })  
});
Login.addEventListener("click",() =>{
    signupbox.style.display = "none";    
    signinbox.style.display = "block";
});
signnup.addEventListener("click",() =>{
    signupbox.style.display= "block";
    signinbox.style.display = "none";
})


window.addEventListener('click', (e) => {
  if (e.target === signbox) {
    signbox.style.display = 'none';
  }
});

//signup box
const form = document.querySelector("form")
const firstname = document.querySelector("#firstname")
const lastname = document.querySelector("#lastname")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const spassword = document.querySelector("#spassword")
const error_message = document.querySelector("#error_message")
form.addEventListener("submit", (e) => {

    let errors =[]

    if(firstname){
        errors = getSignupFormErrors(firstname.value , lastname.value, email.value, password.value, spassword.value)
    }
    else{
        errors = getSigninFormErrors(email.value, password.value)
    }
    if(errors.length >0){
        e.preventDefault()
        error_message.innerText = errors.join(".  ")
    }
})
function getSignupFormErrors(firstname, lastname, 
    email, password, spassword){

        let errors = []
        if(firstname === "" || firstname ==null){
            errors.push('firstname is requried')    
            firstname.parentElement.add('.incorrect')
            
        }
        if(email === "" || email == null){
            errors.push('firstname is requried')
            email.parentElement.add('.incorrect')
            
        }
        if(password === "" || password == null){
            errors.push('firstname is requried')
            password.parentElement.add('.incorrect')
        }
        if(password.length <8){
            errors.push('password must be at least 8 characters ')
            password.parentElement.add('.incorrect')
        }
        if(password !== spassword){
            errors.push('passwords  do not match')
            spassword.parentElement.add('.incorrect')
            password.parentElement.add('.incorrect')
            spassword.parentElement.add('.incorrect')
        }
        return errors;
    }
        const allInputs = [firstname, lastname, email, password, spassword]
        allInputs.forEach(input => {
            input.addEventListener('input', () =>{
                if(input.parentElement.classList.contains('incorrect')){
                    input.parentElement.classList.remove('incorrect')
                    error_message.innerText = ' '
                }
            })
        })

// animation
gsap.from(".main h1",{
    y:-50,
    duration:.5,
    delay:.5, 
    opacity:0,
    ease: "bounce.inout",
});
gsap.from(".main h3",{
    y:50,   
    duration:.3,
    delay:.5,
    opacity:0,
    ease:"bounce.inout"
});
gsap.from(".container",{
    y:-100,
    scale:1,
    duration:.9,
    delay:.5,
    ease:"power4.out",
    opacity:0,
});

//slider 


var left = scrollleft.addEventListener('click', ()=>{
    slider.scrollBy({
        left:-370,
        behavior: 'smooth'
    });
});

var right = scrollright.addEventListener('click', ()=>{
     slider.scrollBy({
        left:370,
        behavior: 'smooth'
    });
})

    // let autoscroll;

    // slider.addEventListener('mouseenter',()=>{
    //     autoscroll = setInterval(() => {
    //         slider.scrollBy({
    //             left:2,
    //             behavior:'smooth'})  
    //     }, 10);
    // });
    // slider.addEventListener('mouseleave', () =>{
    //     clearInterval(autoscroll);
    // });

    var emailinput = document.getElementById('eemail');
    var saveemailbtm = document.getElementById('saveemail');
    var emaildisply = document.getElementById('saveemaildisplay');

    const savedEmail = localStorage.getItem('userEmail');
    if(savedEmail){
       emaildisply.textcontent = `saved Email: ${savedEmail}`;
    }

    saveemailbtm.addEventListener('click', () =>{
        const email = emailinput.value.trim();
        if(email){
            localStorage.setItem('userEmail', email);
            emaildisply.textcontnet =   `saved Email: ${email}`;
            emailinput.value = '';
            alert('Email saved to loaclstorage');}
            else{
                alert('valid email.')
            }
        
    });






    