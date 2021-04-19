let easyList = ['dog', 'cat', 'homie', 'primo']
let words = document.querySelector('.words')
let start = document.querySelector('#startButton')
let answer = document.querySelector('#user__input')



start.addEventListener('click', () => {
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

