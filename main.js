
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Ваше сообщение отправлено! Мы скоро свяжемся с вами.");
    this.reset();
});