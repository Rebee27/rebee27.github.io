
//IMAGES 

var images = new Array()
images[0] = "../images/image1.jpg";
images[1] = "../images/image2.jpg";
images[2] = "../images/image3.jpeg";
images[3] = "../images/image4.jpeg";
images[4] = "../images/image5.jpeg";
images[5] = "../images/image6.jpeg";
images[6] = "../images/image7.jpeg";
setInterval("changeImage()", 4000);
var x = 0;

function changeImage() {
    document.getElementById("img").src = images[x];
    x++;
    if (images.length == x) {
        x = 0;
    }
}

//DESCRIPTION

var i = 0;
var txt = "So.. If you are here you're probably curious who I am.Well, let's make the introduction.Hi, I'm Rebeca, a 19 years old girl who just took her life in her hands.I'm super excited to present my very first big project:my personal online CV.Here you'll find out info about who I am,what I do and what I am expecting from life. I hope you enjoy it!";
var speed = 40;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("description").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}



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
}

setPointer();

