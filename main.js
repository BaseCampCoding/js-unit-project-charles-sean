let easyList = ['dog', 'cat', 'homie', 'primo']
let words = document.querySelector('.words')
let startButton = document.querySelector('#startButton')
let tempo = document.querySelector('.time');
let timerDiv =document.querySelector(".time");
let seconds = 60;

console.log(words)


// startButton.addEventListener('click', () => {
//     alert("Hello World!");
//     console.log('fml')
//     let word = Math.random(easyList)
//     console.log(word)
//     words.textContent(word)
// })

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


