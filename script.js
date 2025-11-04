function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open");
}

window.addEventListener('scroll', function() {
    const contact = document.querySelector('#contact');
    const contactPosition = contact.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (contactPosition < screenPosition) {
      contact.classList.add('show');
    }
  });