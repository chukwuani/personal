var loader = document.querySelector(".loader")
var main = document.querySelector("main")

window.addEventListener("load", vanish)


function vanish(){
    setTimeout(() =>{
        loader.classList.add("vanish");


        main.style.display = 'block';
        setTimeout(() =>main.style.opacity = 1, 50);
        

    }, 1500);
    
}

const left = document.querySelector(".left")
const right = document.querySelector(".right")
const portfolio = document.querySelector(".portfolio")
const portfolioMain = document.querySelector(".portfolio-main")
const slide = document.querySelector(".slide")


right.addEventListener('click', () => {
    const slideWidth = slide.clientWidth + 48;
    portfolio.scrollLeft += slideWidth;
    console.log(portfolio.scrollLeft);
})


left.addEventListener('click', function(){
  const slideWidth = slide.clientWidth + 48;
  portfolio.scrollLeft -= slideWidth;
  console.log(portfolio.scrollLeft);
})


const headerBg = document.querySelector("header");
var scrollTrigger = 60;

window.onscroll = function() {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    headerBg.classList.add("actived");
  } else {
    headerBg.classList.remove("actived");
  }
};

portfolio.onscroll = function() {
  const slideWidth = slide.clientWidth + 48;
  var scrollTrigger = slideWidth * 3.5;

  if (portfolio.scrollLeft === 0) {
    left.style.cssText= "opacity: 0.2; transform: translateX(-10px);"
  }
  else{
    left.style.cssText= "opacity: 1; cursor: pointer;"
  }
  if (portfolio.scrollLeft >= scrollTrigger) {
    right.style.cssText= "opacity: 0.2; cursor: default; transform: translateX(-10px);"
  }
  else{
    right.style.cssText= "opacity: 1;"
  }
};

  const closing = document.querySelector(".icon-close");
  const navBar = document.querySelector(".navbar");
  const menu = document.querySelector(".menu");

  closing.addEventListener("click", closer);
  menu.addEventListener("click", opened)

  function closer(){
    navBar.classList.remove("closed")
  }

  function opened(){
    navBar.classList.add("closed")
  }


  const cto = document.querySelector(".social-cto");
  const list = document.querySelector(".social-modal");

  cto.addEventListener("click", social)

  function social(){
    list.classList.add("social")
  }

  list.addEventListener("click", function(){
    list.classList.remove("social")
  })

// const loadBtn = document.querySelector(".load-more");

// loadBtn.addEventListener('click', loading)

// function loading(){

//     loadBtn.classList.toggle('less')
//     const works = document.querySelectorAll(".load");

//     for (const load of works) {
//        load.classList.toggle('loaded')
//     }

//     // works.classList.toggle('loaded')
   
    
// }






// const loadBtn = document.querySelector(".load-more");
// const works = document.querySelectorAll(".load")
// let currentItem = 0;

// loadBtn.addEventListener('click', function(){
//     for(var i = currentItem; i < currentItem + 3; i++){
//         if(works[i]){
//             works[i].style.display = 'block';
//         }
//     }

//     currentItem += 0;
    
//         if(currentItem <= works.length){
//             loadBtn.style.display = 'default';
//         }
    
// })

// console.log(works);



// //Get the button
// var mybutton = document.querySelector(".scroll-down");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500) {
//     mybutton.style.display = "flex";
//   } else {
//     mybutton.style.display = "default";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// const boxes = document.querySelectorAll('.noshow')

// window.addEventListener("scroll", checkBoxes)
// checkBoxes()

// function checkBoxes(){
//   const triggerBottom =  window.innerHeight / 10 

//   boxes.forEach(leave => {
//     const boxTop = leave.getBoundingClientRect().top

//     if(boxTop < triggerBottom){
//         leave.classList.add('show')
//     }
//     else{
//         leave.classList.remove('show') 
//     }
//   })
// }

// document.getElementsByClassName(".copy-text").onclick = function() {
//     this.select();
//     document.execCommand('copy');
//     alert(window.getSelection().toString());
//   }


