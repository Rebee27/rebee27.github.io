var i = 0;
var txt = "Creativity";
var txt2 = " Teamwork Skills"
var txt3 = " Communication"
var txt4 = " Adaptability"
var txt5 = " Empathy"
var txt6 = " Leadership Skills"
var txt7 = " Organization"
var txt8 = " Problem Solving"

var txt9 = " HTML"
var txt10 = " CSS"
var txt11 = " Javascript"

var speed = 80;

function typeWriter() {
    if (i < txt6.length) {
        document.getElementById("1").innerHTML += txt.charAt(i);
        document.getElementById("2").innerHTML += txt2.charAt(i);
        document.getElementById("3").innerHTML += txt3.charAt(i);
        document.getElementById("4").innerHTML += txt4.charAt(i);
        document.getElementById("5").innerHTML += txt5.charAt(i);
        document.getElementById("6").innerHTML += txt6.charAt(i);
        document.getElementById("7").innerHTML += txt7.charAt(i);
        document.getElementById("8").innerHTML += txt8.charAt(i);

        document.getElementById("html").innerHTML += txt9.charAt(i);
        document.getElementById("css").innerHTML += txt10.charAt(i);
        document.getElementById("javascript").innerHTML += txt11.charAt(i);

        i++;
        setTimeout(typeWriter, speed);
    }
}







//header

const home = document.getElementById("home");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const education = document.getElementById("education");
const contact = document.getElementById("contact");
const name = document.getElementById("name");


function goToHome() {
    home.addEventListener("click", () => {
        window.location.href = "../home/home.html"
    })
};
goToHome();


function goToAbout() {
    about.addEventListener("click", () => {
        window.location.href = "../about-page/about-me.html";
    })
};
goToAbout();


function goToSkills() {
    skills.addEventListener("click", () => {
        window.location.href = "../skills-page/my-skills.html"
    })
};
goToSkills();


function goToEducation() {
    education.addEventListener("click", () => {
        window.location.href = "../education-page/my-education.html"
    })
};
goToEducation();


function goToContact() {
    contact.addEventListener("click", () => {
        window.location.href = "../contact/contact.html"
    })
};
goToContact();


function setPointer() {
    home.style.cursor = "pointer";
    about.style.cursor = "pointer";
    skills.style.cursor = "pointer";
    education.style.cursor = "pointer";
    contact.style.cursor = "pointer";
    name.style.cursor = "default";
}

setPointer();