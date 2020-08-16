document.querySelectorAll('.choice').forEach(item => {
    item.addEventListener('click', event => {
        
        var ch = item.textContent;
        document.querySelector(".dropbtn").textContent=ch;
        console.log(ch+"selected");
        document.querySelector(".selected").classList.remove("selected");
        item.classList.add("selected");
       
    })
})


const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}


var slider = document.getElementById("myRange");
var box = document.querySelector('.box');
var boxp = document.querySelector('.box p');







slider.oninput = function(){
    var x = this.value;
    
    box.style.left = this.value + "%";
    boxp.textContent = this.value;
    slider.style.background = "-webkit-linear-gradient(left,rgb(var(--blue-crayola)) "+x+"%, rgba(var(--rich-black-fogra-29),0.2) "+x+"%)";
}
function cratebargraph(array,N){
    var pdiv = document.querySelector(".sortgraph")
    for(var i=1;i<=N;i++){
        var val = 100-((array[i-1])*100/N);
        var wid = 90/N;
        
        var div = document.createElement('div');
        div.setAttribute('id', "val"+i);
        div.classList.add("bar");
        
        div.style.background ="-webkit-linear-gradient(top,rgba(0,0,0,0) "+val+"%, rgb(var(--blue-crayola)) "+val+"%)";
        
        pdiv.appendChild(div);
        document.getElementById("val"+i).style.width=wid+'%';

    }
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




var arr = [];
for (var i = 1; i <= 50; i++) {
    arr.push(i);
}
arr= shuffle(arr); 
console.log(arr);
cratebargraph(arr,50);


 async function bubbleSort(array){
    let len = array.length;
    console.log(len);
    
    var myNode = document.querySelector(".sortgraph").childNodes;

    for (let i = 1; i <= len; i++) {
        
        for (let j = 1; j <=len-i; j++) {
            
            
            
            var val2 = 100-((array[j])*100/len);
            var val1 = 100-((array[j-1])*100/len);
            
            var f= 0;
            var ind = j+1;


            document.getElementById("val"+j).style.background="-webkit-linear-gradient(top,rgba(0,0,0,0) "+val1+"%, rgb(var(--minion-yellow)) "+val1+"%)";
            document.getElementById("val"+ind).style.background="-webkit-linear-gradient(top,rgba(0,0,0,0) "+val2+"%, rgb(var(--minion-yellow)) "+val2+"%)";
            if (array[j-1] > array[j]) {
                let tmp = array[j-1];
                array[j-1] = array[j];
                array[j] = tmp;
                f=1;
            }
            await sleep(100);
            if(f===1){
                console.log("swapping "+ arr[j-1]+arr[j]);
                document.getElementById("val"+ind).style.background="-webkit-linear-gradient(top,rgba(0,0,0,0) "+val1+"%, rgb(var(--blue-crayola)) "+val1+"%)";
                document.getElementById("val"+j).style.background="-webkit-linear-gradient(top,rgba(0,0,0,0) "+val2+"%, rgb(var(--blue-crayola)) "+val2+"%)";
            }else{
                console.log(" not swapping "+ arr[j-1]+arr[j]);
                document.getElementById("val"+ind).style.background="-webkit-linear-gradient(top,rgba(0,0,0,0) "+val2+"%, rgb(var(--blue-crayola)) "+val2+"%)";
                document.getElementById("val"+j).style.background="-webkit-linear-gradient(top,rgba(0,0,0,0) "+val1+"%, rgb(var(--blue-crayola)) "+val1+"%)";
            }
            
            


            
        }
        
    }
    console.log("done");

}



document.querySelector(".Startbtn").addEventListener("click",function(){

    
     var N = slider.value;
     if(N==50){
        bubbleSort(arr);

     }else{
        var myNode = document.querySelector(".sortgraph")
        while (myNode.firstChild) {
          myNode.removeChild(myNode.lastChild);
        }
        arr =[];
        
        for (var i = 1; i <= N; i++) {
            arr.push(i);
        }
        arr= shuffle(arr);
        console.log(arr);
        cratebargraph(arr,N);
       bubbleSort(arr);
     }
     
    
});
