

 let navbar = document.querySelector('.header .header-nav')
 
 

 document.querySelector('#acount-nav').onclick = () =>{
    navbar.classList.add('active'); 
 }

 document.querySelector('#close-nav').onclick = () =>{
    navbar.classList.remove('active');

};

 let searchForm = document.querySelector('.search-form')

 document.querySelector('#search').onclick = () =>{
   searchForm.classList.add('active'); 
 }

 document.querySelector('#close-search').onclick = () =>{
   searchForm.classList.remove('active');

};

window.onscroll = () =>{

      navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};


var swiper = new Swiper(".home-slide", {
   loop: true,
   grabCursor: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });

