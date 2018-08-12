document.addEventListener("DOMContentLoaded",function(){

    var dropMenu = document.querySelector(".menu_list .menu_item");
    var chairs = document.querySelectorAll(".chair");
    var image = document.querySelector(".galery_img");
    var prev = document.querySelector(".lt");
    var next = document.querySelector(".gt");
    var imagesArr = ["url('images/black_chair.png')", "url('images/orange_chair.png')", "url('images/red_chair.png')"];
    var index = 0;



    dropMenu.addEventListener("mouseover",function(){
        this.querySelector(".dropdown_menu").style.display = "block";
    })
    dropMenu.addEventListener("mouseout",function(){
        this.querySelector(".dropdown_menu").style.display = "none";
    })

    chairs.forEach(function(a) {
        return a.addEventListener("mouseover", function () {
            this.querySelector(".transparent").style.display = "none";
        })
    })

    chairs.forEach(function(a) {
        return a.addEventListener("mouseout", function () {
            this.querySelector(".transparent").style.display = "block";
        })
    })

    next.addEventListener("click",function(){
        index++;
        if(index == 3){
            index = 0;
        }
        image.style.backgroundImage =  imagesArr[index];
    })

    prev.addEventListener("click",function(){
        index--;
        if(index == -1){
            index = 2;
        }
        image.style.backgroundImage =  imagesArr[index];
    })


})