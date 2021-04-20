let easyList = ['dog', 'cat', 'homie', 'primo']
let words = document.querySelector('.words')
let startButton = document.querySelector('#startButton')
let tempo = document.querySelector('.time');
let timerDiv =document.querySelector(".time");
let scoreDiv = document.querySelector(".score");
let seconds = 60;
let score = 0;
let start = document.querySelector('#startButton')
let answer = document.querySelector('#user__input')
console.log(easyList.length)

function countDown() {
    score = 0;
    let timer = setInterval(function(){
        startButton.disabled = true;
        seconds--;
        tempo.innerHTML = seconds;
        if (seconds === 0) {
            scoreDiv.innerHTML = "0";
            button.disabled = false;
            clearInterval(timer);
            seconds = 60;
            timerDiv.innerHTML = "60";
            button.disabled = false;	
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
    countDown();
    random();
    startButton.disabled = true;
});

answer.addEventListener('spacebar', () => {
    if (answer == words){
        console.log('fml')
    }else{
        console.log('this one i bet')
    }
})

