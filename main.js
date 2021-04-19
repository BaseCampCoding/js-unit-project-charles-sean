let easyList = ['dog', 'cat', 'homie', 'primo']
let words = document.querySelector('.words')
let startButton = document.querySelector('#startButton')
let tempo = document.querySelector('.time');
let timerDiv =document.querySelector(".time");
let seconds = 60;
let start = document.querySelector('#startButton')
let answer = document.querySelector('#user__input')


startButton.addEventListener("click", () => {
    countDown();
    button.disabled = true;	
});

function countDown() {
    let timer = setInterval(function(){
        startButton.disabled = true;
        seconds--;
        tempo.innerHTML = seconds;
        if (seconds === 0) {
            button.disabled = false;
            clearInterval(timer);
            seconds = 60;
            timerDiv.innerHTML = "60";
            button.disabled = false;	
        }
    }, 1000);
}

StartButton.addEventListener('click', () => {
    let word = Math.floor(Math.random() * easyList.length)
    console.log(word)
    words.textContent = word
})

answer.addEventListener('spacebar', () => {
    if (answer == words){
        console.log('fml')
    }else{
        console.log('this one i bet')
    }
})

