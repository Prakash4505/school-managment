
// ----image slider function- start--// 
let flag = 0 ;

function controller(x){
    flag =  flag + x;
    slideshow(flag);
}

slideshow(flag);
function slideshow(num){
    
    let slides = document.getElementsByClassName('slide');
    if (num == slides.length){
        flag = 0;
        num = 0;
    } if(num < 0){
        flag = slides.length-1;
        num = slides.length-1;




    }
  
 for (let y of slides){
     y.style.display = "none";
 }





    slides[num].style.display = "block";
    
    

}

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("slide");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 3000); 
// }

// ----image slider function end---// 

// --------sticky nav bar-- start--\\
window.addEventListener('scroll',function(){
    let navbar = document.getElementById("navbar");
    if (window.pageYOffset >=106){
        navbar.classList.add('sticky');
        
    }
    else{
        navbar.classList.remove('sticky');
    }
});


// -------showmenu and hidemenu function--//

var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
} 