




//header

const home = document.getElementById("home");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const education = document.getElementById("education");
const work = document.getElementById("work");
const contact = document.getElementById("contact");

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


function goToWork() {
    work.addEventListener("click", () => {
        window.location.href = "../work-page/my-work.html"
    })
};
goToWork();



function setPointer() {
    home.style.cursor = "pointer";
    about.style.cursor = "pointer";
    skills.style.cursor = "pointer";
    education.style.cursor = "pointer";
    work.style.cursor = "pointer";
}

setPointer();