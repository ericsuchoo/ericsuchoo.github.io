window.onload = function() {
    window.location.href = "../petshop/index.html";
  };
let loginForm = document.querySelector('.header .login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');    
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}
activarEvento();
//slider about
function activarEvento() {
  // Obtener el div al que deseas agregar el evento
  var miDiv = document.getElementById("home-slider2");

  // Agregar el evento de mouseover al div
  miDiv.addEventListener("mouseover", function() {
    var mySwiper = new Swiper(".swiper-container", {
        direction: "vertical",
        loop: true,
        pagination: ".swiper-pagination",
        grabCursor: true,
        speed: 1000,
        paginationClickable: true,
        parallax: true,
        autoplay: false,
        effect: "slide",
        mousewheelControl: 1
      });
      
    // Acciones que se realizarán cuando se coloque el mouse sobre el div
    console.log("El mouse está sobre el div.");
    // Agrega aquí el código que deseas ejecutar cuando se active el evento
   
  }); return
}

  