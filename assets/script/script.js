const start=document.getElementById("start");
const resume=document.getElementById("resume");
const reset=document.getElementById("reset");
let centiseconds = 0;
let seconds = 0;
let minutes = 0;
let timerInterval;
startVisibility();
function startVisibility(){
    const buttons = [ resume, reset];
    buttons.forEach(button => {
        button.style.display = "none";
    });   
}

function changeVisibilty(){
    const buttons = [start, resume, reset];
    buttons.forEach(button => {
        if (button.style.display === "none") {
            button.style.display = "block"; 
        } else {
            button.style.display = "none";
        }
    });   
}

start.addEventListener("click",()=>{
    changeVisibilty();
    startTimer();
});

reset.addEventListener("click",()=>{
    centiseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
    clearInterval(timerInterval);
    changeVisibilty();
     resume.innerHTML="Pause"
})
resume.addEventListener("click",()=>{
    console.log(resume.innerText);
    if(resume.innerText=="Pause"){
        // stop timer  
        clearInterval(timerInterval);
        resume.innerHTML="Resume";
        
    }else{
       startTimer();
        resume.innerHTML="Pause"
    }
})

function startTimer(){
    timerInterval = setInterval(() => {
        centiseconds++;
        if (centiseconds === 100) {
            centiseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
        }
        updateDisplay();
    }, 10);
}
function updateDisplay() {
    min.textContent = minutes.toString().padStart(2, '0') + " :";
    sec.textContent = seconds.toString().padStart(2, '0') + " :";
    centisec.textContent = centiseconds.toString().padStart(2, '0');
}