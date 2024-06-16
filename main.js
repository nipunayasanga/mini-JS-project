let interval = undefined;
let min = 0;
let sec = 0;

let minElement=document.getElementById("min");
let secElement=document.getElementById("sec");

const countdown = () => {
    if (interval){
        clearInterval(interval);
    }


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
        sec=0;

    }
    
}, 1000);

const start = () => {

    countdown();

   
}