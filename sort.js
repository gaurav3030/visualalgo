
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


async function merge (arr1, arr2,leftStartIndex,rightStartIndex) {
    let sorted = [],i=leftStartIndex,j=rightStartIndex;
    let count=leftStartIndex;
    
    while (arr1.length && arr2.length) {
        var val1 = 100-((arr1[0])*100/N);
        var val2 = 100-((arr2[0])*100/N);

        updateBar(i+1,val1,mYellow);
        updateBar(j+1,val2,mYellow);
        
        await sleep(100);
        if (arr1[0] < arr2[0]){
            sorted.push(arr1.shift());
            updateBar(count+1,val1,blue);
            count++;
            i++;
        } 
        else{
            sorted.push(arr2.shift());
            updateBar(count+1,val1,blue);
            count++;
            j++;
        } 
    };
    var res = sorted.concat(arr1.slice().concat(arr2.slice()));
    if(i-1 == leftStartIndex){
        while(arr2.length){
            var val2 = 100-((arr2[0])*100/N);
            updateBar(j+1,val2,mYellow);
            await sleep(100);
            updateBar(count+1,val2,blue);
            count++;
            j++;
        }


    }else{
        while(arr1.length){
            var val1 = 100-((arr1[0])*100/N);
            updateBar(i+1,val1,mYellow);
            await sleep(100);
            updateBar(count+1,val1,blue);
            count++;
            i++;
        }

    }

    
    return res;
}
async function mergeSort(array,startIndex){
    
    if (array.length <= 1) return array;
    let mid = Math.floor(array.length / 2),
        left = await mergeSort(array.slice(0, mid),startIndex),
        right = await mergeSort(array.slice(mid),mid);
    
    
    return await merge(left,right,startIndex,mid);
    
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

async function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
async function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            var val1 = 100-((items[i])*100/N);
            var val2 = 100-((items[j])*100/N);

            updateBar(i+1,val1,mYellow);
            updateBar(j+1,val2,mYellow);
            await sleep(100);
            await swap(items, i, j);
            updateBar(i+1,val2,blue);
            updateBar(j+1,val1,blue);
            i++;
            j--;
        }
    }
    return i;
}

async function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = await partition(items, left, right); 
        if (left < index - 1) {
            await quickSort(items, left, index - 1);
        }
        if (index < right) { 
            await quickSort(items, index, right);
        }
    }
    return items;
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
var N;
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

    
    N = slider.value;
    
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
        (async () => {
            console.log(await mergeSort(arr,0))
            console.log("finished");
          })()
        
        }
        if(opt=="s3"){
            (async () => {
                console.log(await insertionSort(arr))
                console.log("finished");
              })()
        }
        if(opt=="s4"){
            (async () => {
                console.log(await quickSort(arr,0,arr.length - 1));
                console.log("finished");
              })()
        }


       
     //  arr=mergeSort(arr);
       
     
      
    
    
   
});


