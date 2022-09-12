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

const loadBtn = document.querySelector(".load-more");
const works = document.querySelectorAll(".load")
let currentItem = 0;

loadBtn.addEventListener('click', function(){
    for(var i = currentItem; i < currentItem + 3; i++){
        if(works[i]){
            works[i].style.display = 'block';
        }
    }

    currentItem += 0;
    
        if(currentItem <= works.length){
            loadBtn.style.display = 'none';
        }
    
})

console.log(works);



// //Get the button
// var mybutton = document.querySelector(".scroll-down");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500) {
//     mybutton.style.display = "flex";
//   } else {
//     mybutton.style.display = "none";
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

const left = document.querySelector(".left")
const right = document.querySelector(".right")
const portfolio = document.querySelector(".portfolio-main")

left.onclick = function(){
    portfolio.style.cssText += "transform: translatex(0px);";
}

right.onclick = function(){
    portfolio.style.cssText= "transform: translatex(-1018px);";
}




