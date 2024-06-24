let interval=undefined;
let min=0;
let sec=0;
let questionNumber=0;
let count=0;
let op=['+','-','*','/','%'];

let qNum1=0;
let qNum2=0;
let selectedOp='';

let minElement=document.getElementById('min');
let secElement=document.getElementById('sec');

let countElement=document.getElementById('count');

let num1Element=document.getElementById('num1');
let num2Element=document.getElementById('num2');
let opElement=document.getElementById('op');

let answerElement=document.getElementById('answer');
let table=document.getElementById('result_table_body');

let result=[];

const setTableData=()=>{
    result.forEach(item=>{
        let row = document.createElement('tr');

        for(let key in item){
            if(item.hasOwnProperty(key)){
                let cell = document.createElement('td');
                cell.textContent=item[key];
                row.appendChild(cell);
            }
        }

        table.appendChild(row);

    });
}


const setAnswer=()=>{
    let correctAnswer=0;
    let userAnswer=parseInt(answerElement.value);
    switch(selectedOp){
        case '+':correctAnswer=qNum1+qNum2; break;
        case '-':correctAnswer=qNum1-qNum2; break;
        case '/':correctAnswer=qNum1/qNum2; break;
        case '*':correctAnswer=qNum1*qNum2; break;
        case '%':correctAnswer=qNum1%qNum2;
    }

    result.push({
        'number1':qNum1,
        'number2':qNum2,
        'correctAnswer':correctAnswer,
        'userAnswer':userAnswer,
        'operator':selectedOp,
        'time':minElement.innerHTML+':'+secElement.innerHTML,
        'isCorrect':correctAnswer===userAnswer
    });

    answerElement.value=0;

    if (count==5) {
        count=0;

        setTableData();

        reset();
    }

    manageQuestion();

}

const setCount=()=>{
    count++;
    countElement.innerHTML=count;
}

const manageQuestion=()=>{
    setCount();

    qNum1= Math.floor(Math.random()*100)+1;
    qNum2= Math.floor(Math.random()*100)+1;
    selectedOp = op[Math.floor(Math.random()*5)];

    num1Element.innerHTML=qNum1;
    num2Element.innerHTML=qNum2;
    opElement.innerHTML=selectedOp;
}

const reset=()=>{
    if(interval){
        clearInterval(interval);
    }

    minElement.innerHTML='00';
    secElement.innerHTML='00';
}

const countdown = ()=>{

    manageQuestion();

    if(interval){
        clearInterval(interval);
    }

    interval = setInterval(() => {
    
        sec++;
        
        if (sec<10) {
            secElement.innerHTML='0'+sec
        }else{
            secElement.innerHTML=sec
        }
        
        if(sec===59){
            min++;
                minElement.innerHTML=min
            sec=0;
        }


    }, 1000);
}

const start = ()=>{
    result=[];
    countdown();
}