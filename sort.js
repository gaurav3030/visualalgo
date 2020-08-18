
// just some functions at first  

var mYellow ="--minion-yellow";
var blue = "--blue-crayola";
// Plot the graph with given array and array length
function cratebargraph(array,N){
    var pdiv = document.querySelector(".sortgraph");
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

// Shuffle the increasing array
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


// sleep funtion
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

// Upadate bar funtion()
function updateBar(x,val,color){
    document.getElementById("val"+x).style.background="-webkit-linear-gradient(top,rgba(0,0,0,0) "+val+"%, rgb(var("+color+")) "+val+"%)";
}


//  sorting functions
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

            updateBar(j,val1,mYellow);
            updateBar(ind,val2,mYellow);
            if (array[j-1] > array[j]) {
                let tmp = array[j-1];
                array[j-1] = array[j];
                array[j] = tmp;
                f=1;
            }
            await sleep(100);

            if(f===1){
                console.log("swapping "+ arr[j-1]+arr[j]);
                updateBar(ind,val1,blue);
                updateBar(j,val2,blue);
            }else{
                console.log(" not swapping "+ arr[j-1]+arr[j]);
                updateBar(ind,val2,blue);
                updateBar(j,val1,blue);
            }
        } 
    }
}



// function merge (arr1, arr2) {
//     let sorted = [];
    
//     while (arr1.length && arr2.length) {
//         if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
//         else sorted.push(arr2.shift());
//     };

    
//     return sorted.concat(arr1.slice().concat(arr2.slice()));
// }
async function mergeSort(array){
    // function merge(arr1, arr2) {
    //     let sorted = [];
    
    //     while (arr1.length && arr2.length) {
    //     if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
    //     else sorted.push(arr2.shift());
    //     };
    //     return sorted.concat(arr1.slice().concat(arr2.slice()));
    // };
    if (array.length <= 1) return array;
    let mid = Math.floor(array.length / 2),
        left = await mergeSort(array.slice(0, mid)),
        right = await mergeSort(array.slice(mid));
    await sleep(100);
    console.log('yo');
    let sorted = [];
    
    while (left.length && right.length) {
        await sleep(100);
        if (left[0] < right[0]) sorted.push(left.shift());
        else sorted.push(right.shift());
    };
    
    return sorted.concat(left.slice().concat(right.slice()));;
    
}



async function insertionSort(array){
    let length = array.length;
    for (let i = 1; i < length; i++) {
        let key = array[i];
        let j = i - 1;
        var f =0;
        var valkey = 100-((array[i])*100/length);
        
        updateBar(i+1,valkey,mYellow);
        while (j >= 0 && array[j] > key) {
            var val1 = 100-((array[j])*100/length);
            var val2 = 100-((array[j+1])*100/length);
            
            updateBar(j+1,val1,mYellow);
            updateBar(j+2,val2,mYellow);
            array[j + 1] = array[j];
            
            await sleep(100);
            updateBar(j+1,val2,blue);
            updateBar(j+2,val1,blue);
            j = j - 1;
        }
        array[j + 1] = key;
        updateBar(j+2,valkey,blue);
        
    }
    return array;
}



//  Add event listeners to all choice buttons
document.querySelectorAll('.choice').forEach(item => {
    item.addEventListener('click', event => {
        
        var ch = item.textContent;
        document.querySelector(".dropbtn").textContent=ch;
        console.log(ch+"selected");
        document.querySelector(".selected").classList.remove("selected");
        item.classList.add("selected");
       
    })
})

// Get some DOM elemets 
var slider = document.getElementById("myRange");
var box = document.querySelector('.box');
var boxp = document.querySelector('.box p');



// Range slider function
slider.oninput = function(){
    var x = this.value;
    
    box.style.left = this.value + "%";
    boxp.textContent = this.value;
    slider.style.background = "-webkit-linear-gradient(left,rgb(var(--blue-crayola)) "+x+"%, rgba(var(--rich-black-fogra-29),0.2) "+x+"%)";
}

// Create default array and graph
var arr = [];
for (var i = 1; i <= 50; i++) {
    arr.push(i);
}
arr= shuffle(arr); 
console.log(arr);
cratebargraph(arr,50);



//Add event listener to Start button
document.querySelector(".Startbtn").addEventListener("click",function(){

    
    var N = slider.value;
    
    if(N==50){
       

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
    }
       cratebargraph(arr,N);
       var drop = document.querySelector('#dropdown-content .selected');
       var opt =drop.getAttribute('id');
       console.log(opt);
       if(opt=="s1"){
        (async () => {
            console.log(await bubbleSort(arr))
            console.log("finished");
          })()
       }

       if(opt=="s2"){
        
        }
        if(opt=="s3"){
            (async () => {
                console.log(await insertionSort(arr))
                console.log("finished");
              })()
        }
        if(opt=="s4"){

        }


       
     //  arr=mergeSort(arr);
       
     
      
    
    
   
});


