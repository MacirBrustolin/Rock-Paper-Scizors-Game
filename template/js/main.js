const begin = document.querySelector('.begin')
const beginButton = document.querySelector('#begin-button')
const sections = document.querySelectorAll('.section')
const timer = document.querySelector('.timer')
const reset = document.querySelector('#reset-button')
const again = document.querySelector('#again-button')
const writeResult = document.querySelector('#write-result')
const writeScore = document.querySelector('#write-score')

let playerHand = 0;
let cpuHand;
let max_time = 5;
let cinterval;
let cpuCount = 0, playerCount = 0

document.querySelector('.begin').addEventListener('click', Begin)
document.querySelector('.paper').addEventListener('click', PaperHand)
document.querySelector('.rock').addEventListener('click', RockHand)
document.querySelector('.scissor').addEventListener('click', ScissorHand)
document.querySelector('#reset-button').addEventListener('click', Reset)
document.querySelector('#again-button').addEventListener('click', Again)


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

function Again(){
    max_time = 5;
    playerHand = 0;

    document.querySelector('.flip-card-inner').style.transform = 'rotateY(0deg)'

    reset.classList.toggle('hidden')
    again.classList.toggle('hidden')
    writeResult.classList.toggle('hidden')
    writeScore.classList.toggle('hidden')
    timer.classList.toggle('hidden')

    document.querySelector('.rock').classList.remove('selected');
    document.querySelector('.scissor').classList.remove('selected');
    document.querySelector('.paper').classList.remove('selected');

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
        playerCount++
        document.getElementById("write-result").innerHTML = "Player Wins!!";
        document.getElementById("write-score").innerHTML = `Player: ${playerCount} vs CPU: ${cpuCount}`
    }
    else if (playerHand == 1 && cpuHand == 3){
        cpuCount++
        document.getElementById("write-result").innerHTML = "CPU Wins!!";
        document.getElementById("write-score").innerHTML = `Player: ${playerCount} vs CPU: ${cpuCount}`
    }
    else if (playerHand == 2 && cpuHand == 1){
        cpuCount++
        document.getElementById("write-result").innerHTML = "CPU Wins!!";
        document.getElementById("write-score").innerHTML = `Player: ${playerCount} vs CPU: ${cpuCount}`
    }
    else if (playerHand == 2 && cpuHand == 3){
        playerCount++
        document.getElementById("write-result").innerHTML = "Player Wins!!";
        document.getElementById("write-score").innerHTML = `Player: ${playerCount} vs CPU: ${cpuCount}`
    }
    else if (playerHand == 3 && cpuHand == 1){
        playerCount++
        document.getElementById("write-result").innerHTML = "Player Wins!!";
        document.getElementById("write-score").innerHTML = `Player: ${playerCount} vs CPU: ${cpuCount}`
    }
    else if (playerHand == 3 && cpuHand == 2){
        cpuCount++
        document.getElementById("write-result").innerHTML = "CPU Wins!!";
        document.getElementById("write-score").innerHTML = `Player: ${playerCount} vs CPU: ${cpuCount}`
    }
    else {
        document.getElementById("write-result").innerHTML = "Too Slow. You did't choose a hand :(";
    }
    timer.classList.toggle('hidden')
    reset.classList.toggle('hidden')
    again.classList.toggle('hidden')
    writeResult.classList.toggle('hidden')
    writeScore.classList.toggle('hidden')
    document.querySelector('.flip-card-inner').style.transform = 'rotateY(180deg)'
    
}

function Reset(){
    max_time = 5;
    playerHand = 0;
    cpuCount = 0
    playerCount = 0

    document.querySelector('.rock').classList.remove('selected');
    document.querySelector('.scissor').classList.remove('selected');
    document.querySelector('.paper').classList.remove('selected');
    document.querySelector('.flip-card-inner').style.transform = 'rotateY(0deg)'

    Array.from(sections).forEach(element => element.classList.toggle('hidden'))
	begin.classList.toggle('hidden')
    beginButton.classList.toggle('hidden')
    reset.classList.toggle('hidden')
    again.classList.toggle('hidden')
    writeResult.classList.toggle('hidden')
    writeScore.classList.toggle('hidden')
}