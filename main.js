let interval = undefined;


const start = () => {

    if (interval){
        clearInterval(interval);
    }

    let x=0;

   interval = setInterval(() => {
        console.log(x);
        x++
    }, 1000);
}