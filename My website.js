// ================= TYPING EFFECT =================

const typingText = document.getElementById("typing");

const words = [
    "Web Developer",
    "Graphics Designer",
    "Video Editor",
    "CSE Student"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;


function typeEffect(){

    let currentWord = words[wordIndex];

    if(isDeleting){

        typingText.textContent = currentWord.substring(0, charIndex--);

    }else{

        typingText.textContent = currentWord.substring(0, charIndex++);

    }


    if(!isDeleting && charIndex === currentWord.length){

        isDeleting = true;
        setTimeout(typeEffect,1000);

    }

    else if(isDeleting && charIndex === 0){

        isDeleting = false;
        wordIndex++;

        if(wordIndex === words.length){
            wordIndex = 0;
        }

        setTimeout(typeEffect,500);

    }

    else{

        setTimeout(typeEffect,100);

    }

}


typeEffect();




// ================= MOBILE MENU =================


const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});




// ================= CLOSE MENU AFTER CLICK =================


document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});




// ================= BACK TO TOP =================


window.addEventListener("scroll",()=>{

    const topBtn = document.querySelector(".top-btn");


    if(window.scrollY > 300){

        topBtn.style.display="flex";

    }else{

        topBtn.style.display="none";

    }

});

const themeToggle = document.getElementById("theme-toggle");

/* ===== DEFAULT DARK MODE ===== */

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-mode");
    themeToggle.textContent = "☀️";

} else {

    document.body.classList.remove("light-mode");
    themeToggle.textContent = "🌙";

}


/* ===== DARK / LIGHT MODE TOGGLE ===== */

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "light");

    } else {

        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "dark");

    }

});