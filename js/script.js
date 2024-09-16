

/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset =sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav[href*=' + id  + ' ]').classList.add('active');
            });

        };
    });

};
/*==================== scroll reveal ====================*/

ScrollReveal ({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portofolio-box, .contact form ', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Designer', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*==================== sticky navbar ====================*/
let header = document.querySelector('header');

header.classList.toggle('stick', window.scrollY > 100);

/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

// Contact From data on email

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

function sendEmail() {
const  bodyMessage = 'Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}';
    

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rizalapta23@gmail.com",
        Password : "0DCFD0DA366C216DF56478F2D9C3ED91FD57",
        To : 'rizalapta23@gmail.com',
        From : "rizalapta23@gmail.com",
        Subject : "subject.value",
        Body : "bodyMessage",
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});