// let menu = document.querySelector('#menu-bar');
// let navbar = document.querySelector('.navbar');

let menu = document.querySelector('#bar');
let navbar = document.querySelector('#navbar');
let closeBtn = document.querySelector('#close');
let userIcon = document.querySelector('#userIcon');
let userDropdown = document.querySelector('#userDropdown');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
    var src = image_1.getAttribute('src');
    document.querySelector('.big-image-1').src = src;
  });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
  image_2.addEventListener('click', () =>{
    var src = image_2.getAttribute('src');
    document.querySelector('.big-image-2').src = src;
  });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
  image_3.addEventListener('click', () =>{
    var src = image_3.getAttribute('src');
    document.querySelector('.big-image-3').src = src;
  });
});



// ====== Navbar Toggle ======
// const menu = document.querySelector('#menu-bar');
// const navbar = document.querySelector('.navbar');

// menu.addEventListener('click', () => {
//   menu.classList.toggle('fa-times');
//   navbar.classList.toggle('active');
// });

// // ====== Hide Navbar on Scroll ======
// window.addEventListener('scroll', () => {
//   menu.classList.remove('fa-times');
//   navbar.classList.remove('active');
// });

// // ====== Slideshow Control ======
// const slides = document.querySelectorAll('.slide-container');
// let index = 0;

// function showSlide(newIndex) {
//   slides.forEach(slide => slide.classList.remove('active'));
//   slides[newIndex].classList.add('active');
//   index = newIndex;
// }

// function nextSlide() {
//   showSlide((index + 1) % slides.length);
// }

// function prevSlide() {
//   showSlide((index - 1 + slides.length) % slides.length);
// }

// // Optional: Bind buttons if present in the DOM
// document.querySelector('#next')?.addEventListener('click', nextSlide);
// document.querySelector('#prev')?.addEventListener('click', prevSlide);

// // ====== Featured Product Image Switcher ======
// [1, 2, 3].forEach(i => {
//   const smallImages = document.querySelectorAll(`.featured-image-${i}`);
//   const bigImage = document.querySelector(`.big-image-${i}`);

//   smallImages.forEach(img => {
//     img.addEventListener('click', () => {
//       bigImage.src = img.src;
//     });
//   });
// });



// let menu = document.querySelector('#bar');
// let navbar = document.querySelector('#navbar');
// let closeBtn = document.querySelector('#close');
// let userIcon = document.querySelector('#userIcon');
// let userDropdown = document.querySelector('#userDropdown');

menu.onclick = () => {
    navbar.classList.toggle('active');
};

closeBtn.onclick = () => {
    navbar.classList.remove('active');
};

userIcon.onclick = () => {
    userDropdown.classList.toggle('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
};

document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});
