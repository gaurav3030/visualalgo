document.querySelectorAll('.choice').forEach(item => {
    item.addEventListener('click', event => {
        
        var ch = item.textContent;
        document.querySelector(".dropbtn").textContent=ch;
        console.log(ch+"selected");
        document.querySelector(".selected").classList.remove("selected");
        item.classList.add("selected");
       
    })
})

var slider = document.getElementById("myRange");
var box = document.querySelector('.box');
var boxp = document.querySelector('.box p');


slider.oninput = function(){
    var x = this.value;
    
    box.style.left = this.value + "%";
    boxp.textContent = this.value;
    slider.style.background = "-webkit-linear-gradient(left,rgb(var(--blue-crayola)) "+x+"%, rgba(var(--rich-black-fogra-29),0.2) "+x+"%)";
}

function shuffle(array) {
    var currentIndex = array.length, temp, randomIndex;
  
    
    while (currentIndex !== 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
  
    return array;
  }
document.querySelector(".Startbtn").addEventListener("click",function(){
    var arr = [];
    var N = slider.value;
    for (var i = 1; i <= N; i++) {
        arr.push(i);
    }
    arr= shuffle(arr);
    
});
