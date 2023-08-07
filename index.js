var myanimation = document.getElementById("anime");
var myScrollFunction = function(){
    var y = window.scrollY;
    if(y>=1000){
myanimation.className = " animate__lightSpeedInLeft"
    }
};
window.addEventListener("scroll",myScrollFunction);