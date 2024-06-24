let interval = undefined;
let min = 0;
let sec = 0;
let questionNumber = 1;
let count = 0;
let op = ['+','-','*','/','%'];

let qNum1 = 0;
let qNum2  = 0;
let selectedOp = '';

let minElement=document.getElementById("min");
let secElement=document.getElementById("sec");

let countElement=document.getElementById("count");

let num1Element=document.getElementById("num1");
let num2lement=document.getElementById("num2");
let opElement=document.getElementById("op");


const setCount = () => {
    count++;
    countElement.innerHTML=count;
}

const manageQuestuion = () => {

    setCount();

    qNum1 = Math.floor(Math.random()*100)+1;
    qNum2 = Math.floor(Math.random()*100)+1;
    selectedOp = op[Math.floor(Math.random()*5)]

    num1Element.innerHTML = qNum1;
    num2lement.innerHTML = qNum2;
    opElement.innerHTML = selectedOp;

  
}

const reset = () => {
    if (interval){
        clearInterval(interval);
    }

    minElement.innerHTML='00';
    secElement.innerHTML='00';
}

const countdown = () => {

    manageQuestuion();

    if (interval){
        clearInterval(interval);
    }




interval = setInterval(() => {

    sec++;

    if(sec<10){
        secElement.innerHTML='0'+sec
    }else{
        secElement.innerHTML=sec
    }


    if(sec === 59){
        min++;
            minElement.innerHTML=min
        sec=0;

    }

    
    }, 1000);
}

const start = () => {

    countdown();

   
}