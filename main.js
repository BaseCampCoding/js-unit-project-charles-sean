let easyList = ['dog', 'cat', 'homie', 'primo']
let words = document.querySelector('.words')
let start = document.querySelector('#startButton')

console.log(words)


start.addEventListener('click', () => {
    alert("Hello World!");
    console.log('fml')
    let word = Math.random(easyList)
    console.log(word)
    words.textContent(word)
})
