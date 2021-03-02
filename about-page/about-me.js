






//header
const home = document.getElementById("home");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const education = document.getElementById("education");
const contact = document.getElementById("contact");
const books = document.getElementById("second");
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



function goToBooks() {
    books.addEventListener("click", () => {
        window.location.href = "https://www.karenkingsbury.com/divine"
    })
};
goToBooks();

function setPointer() {
    home.style.cursor = "pointer";
    about.style.cursor = "pointer";
    skills.style.cursor = "pointer";
    education.style.cursor = "pointer";
    books.style.cursor = "pointer";
    name.style.cursor = "default";
}

setPointer();