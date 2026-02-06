// task 1
let para1=document.getElementById("para1");
let btn1 =document.getElementById("btn1");

btn1.addEventListener("click",function(){
       
para1.classList.add('highlight');
});



// task 2

let btn2 =document.getElementById("btn2");

btn2.addEventListener("click",function(){
 para1.classList.remove('highlight')
});

// task 3

let btn3=document.getElementById("btn3");

btn3.addEventListener("click",function(){
  para1.classList.toggle('highlight')
});

// task 4

let btn4=document.getElementById("btn4");

btn4.addEventListener("click",function (){
  let highlight=true;
    if (highlight) {
        console.log(alert("class is exist"));
        
    }else{
        console.log(alert("class is not exist"));

    }
});

// task 5
let buybtn=document.getElementById("buybtn");
buybtn.addEventListener("click",function() {
    buybtn.classList.toggle('active-btn');
})



// task 6 
let darkmode=document.getElementById("darkmode");
let body=document.body;

darkmode.addEventListener("click",function(){

    body.classList.toggle('dark_mode');
});
