
let start = document.getElementById("start");
let end = document.getElementById("end");
let restart = document.getElementById("restart");

let timer = document.getElementById("timer");




let timerleft = 1500;


function updateTimer(){
    //for second and min---->
     let min = Math.floor(timerleft/60);
     let sec = timerleft%60;

     let formatTime = `${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`;

     timer.innerHTML = formatTime;


};





start.addEventListener("click",(e)=>{
    e.preventDefault();
   
  interval =  setInterval(()=>{
        if(timerleft === 0)
        {
            //matlab  25 min over ho gya hai
            clearInterval(interval);
            // timmer ko fir 25 min pe set karo
            timerleft = 1500;
            updateTimer();
        }else{
            //timmer ko -1 kro aur update ko call kro

            timerleft--;
            updateTimer();
        }


    },1000);
    

})

end.addEventListener("click",(e)=>{
   e.preventDefault();
   clearInterval(interval);
})


restart.addEventListener("click",(e)=>{
    e.preventDefault();
     //setInterval ko clear kro------>
    //timer ko 1500 pe set kro
    //updatetimer ko call kar do 
    clearInterval(interval);
    timerleft=1500;
    updateTimer();
})