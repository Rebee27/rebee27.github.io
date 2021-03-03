var facebook = document.getElementById("facebook");
var instagram = document.getElementById("instagram");
var github = document.getElementById("github");
var linkedin = document.getElementById("linkedin");


function goToFacebook() {
    facebook.addEventListener("click", () => {
        window.location.href = "https://www.facebook.com/rebeca.gog.3"
    })
};
goToFacebook();

function goToInstagram() {
    instagram.addEventListener("click", () => {
        window.location.href = "https://www.instagram.com/rebee.gog/"
    })
};
goToInstagram();

function goToGithub() {
    github.addEventListener("click", () => {
        window.location.href = "https://github.com/Rebee27"
    })
};
goToGithub();

function goToLinkedin() {
    linkedin.addEventListener("click", () => {
        window.location.href = "https://www.linkedin.com/in/rebeca-gog-77b6b91b3/"
    })
};
goToLinkedin();


//HEADER

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
    facebook.style.cursor = "pointer";
    instagram.style.cursor = "pointer";
    github.style.cursor = "pointer";
    linkedin.style.cursor = "pointer";
}

setPointer();
