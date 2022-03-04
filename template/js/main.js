const begin = document.querySelector('.begin')
const beginButton = document.querySelector('#begin-button')
const sections = document.querySelectorAll('.section')
const timer = document.querySelector('.timer')
const reset = document.querySelector('#reset-button')
const writeResult = document.querySelector('#write-result')

let playerHand = 0;
let cpuHand;
let max_time = 5;
let cinterval;

document.querySelector('.begin').addEventListener('click', Begin)
document.querySelector('.paper').addEventListener('click', PaperHand)
document.querySelector('.rock').addEventListener('click', RockHand)
document.querySelector('.scissor').addEventListener('click', ScissorHand)
document.querySelector('#reset-button').addEventListener('click', Reset)


function Begin(){
    Array.from(sections).forEach(element => element.classList.toggle('hidden'))
	begin.classList.toggle('hidden')
    beginButton.classList.toggle('hidden')
    timer.classList.toggle('hidden')
    // document.querySelector('.timer').innerText = Timer();
    
    document.getElementById('countdown').innerHTML = max_time;
    cinterval = setInterval('countdown_timer()', 1000);
    setTimeout(() => {CPUHand(), FinalResult()}, 5000);

}

function countdown_timer(){
    // decrease timer
    max_time--;
    document.getElementById('countdown').innerHTML = max_time;
    if(max_time == 0){
      clearInterval(cinterval);
    }
}

function CPUHand(){
    cpuHand = Math.floor(Math.random() * 3) + 1
    if (cpuHand == 1){
        document.querySelector('.cpu-hand').setAttribute("src","assets/PaperAsset.svg")
    }
    else if (cpuHand == 2){
        document.querySelector('.cpu-hand').setAttribute("src","assets/RockAsset.svg")
    }
    else {
        document.querySelector('.cpu-hand').setAttribute("src","assets/ScissorAsset.svg")
    }
}

function PaperHand(){
    playerHand = 1;
    document.querySelector('.rock').classList.remove('selected');
    document.querySelector('.scissor').classList.remove('selected');
    document.querySelector('.paper').classList.add('selected');
}

function RockHand(){
    playerHand = 2;
    document.querySelector('.rock').classList.add('selected');
    document.querySelector('.scissor').classList.remove('selected');
    document.querySelector('.paper').classList.remove('selected');
}

function ScissorHand(){
    playerHand = 3;
    document.querySelector('.rock').classList.remove('selected');
    document.querySelector('.scissor').classList.add('selected');
    document.querySelector('.paper').classList.remove('selected');
}

function FinalResult(){
    if (playerHand == cpuHand)
    {
        document.getElementById("write-result").innerHTML = "Its a Draw!";
    }
    else if (playerHand == 1 && cpuHand == 2){
        document.getElementById("write-result").innerHTML = "Player Wins!!";
    }
    else if (playerHand == 1 && cpuHand == 3){
        document.getElementById("write-result").innerHTML = "CPU Wins!!";
    }
    else if (playerHand == 2 && cpuHand == 1){
        document.getElementById("write-result").innerHTML = "CPU Wins!!";
    }
    else if (playerHand == 2 && cpuHand == 3){
        document.getElementById("write-result").innerHTML = "Player Wins!!";
    }
    else if (playerHand == 3 && cpuHand == 1){
        document.getElementById("write-result").innerHTML = "Player Wins!!";
    }
    else if (playerHand == 3 && cpuHand == 2){
        document.getElementById("write-result").innerHTML = "CPU Wins!!";
    }
    else {
        document.getElementById("write-result").innerHTML = "Too Slow. You did't choose a hand :(";
    }
    timer.classList.toggle('hidden')
    reset.classList.toggle('hidden')
    writeResult.classList.toggle('hidden')
    document.querySelector('.flip-card-inner').style.transform = 'rotateY(180deg)'
    
}

function Reset(){
    max_time = 5;
    playerHand = 0;

    document.querySelector('.rock').classList.remove('selected');
    document.querySelector('.scissor').classList.remove('selected');
    document.querySelector('.paper').classList.remove('selected');
    document.querySelector('.flip-card-inner').style.transform = 'rotateY(0deg)'

    Array.from(sections).forEach(element => element.classList.toggle('hidden'))
	begin.classList.toggle('hidden')
    beginButton.classList.toggle('hidden')
    reset.classList.toggle('hidden')
    writeResult.classList.toggle('hidden')
}