let easyList = ['dog', 'cat', 'homie', 'primo', "ice", "idea", "if", "important",
    "in", "increase", "inside", "into", "introduce", "invent", "iron", "invite", 
    "is", "island", "it", "its"]
let words = document.querySelector('.words')
let startButton = document.querySelector('#startButton')
let tempo = document.querySelector('.time');
let timerDiv =document.querySelector(".time");
let scoreHtml = document.querySelector(".score");
let seconds = 15;
let score = 0;
let start = document.querySelector('#startButton')
let answer = document.querySelector('#user__input')

answer.disabled = true;

function countDown() {
    score = 0;
    let timer = setInterval(function(){
        startButton.disabled = true;
        seconds--;
        tempo.innerHTML = seconds;
        if (seconds === 0) {
            words.textContent = "Word Here"
            scoreHtml.innerHTML = "0";
            startButton.disabled = false;
            clearInterval(timer);
            seconds = 15;
            timerDiv.innerHTML = "15";
            startButton.disabled = false;	
        }
    }, 1000);
}

function random() {
    let random = Math.random() * (easyList.length - 0) + 0;
    let word = easyList[random].split("");
    for (let i = 0; i < word.length; i++) {
        let span = document.createElement("span");
        span.classList.add("span");
        span.innerHTML = word[i];
        words.appendChild(span);
    }
    spans = document.querySelectorAll(".span");
}

startButton.addEventListener('click', () => {	
    let word = easyList[Math.floor(Math.random() * easyList.length)]
    console.log(word)
    words.textContent = word;
    countDown();
    startButton.disabled = true;
    answer.disabled = false;
})

answer.addEventListener('keypress', (e) => {
    if (e.key === 'Enter'){
        if (answer.value == words.textContent){
            score++;
            scoreHtml.textContent = score;
            answer.value = '';
            let word = easyList[Math.floor(Math.random() * easyList.length)]
            console.log(word)
            words.textContent = word;
        }else{
            answer.value = ''
            console.log('this one i bet')
        }
    }
})

