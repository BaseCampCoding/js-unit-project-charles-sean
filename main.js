let easyList = ['dog', 'cat', 'about', 'above', 'across', 'act', 'active', 'activity', 'add', 'afraid', 'after', 'again', 'age', 
'ago', 'agree', 'air', 'all', 'alone', 'along', 'already', 'always', 'amount', 'and', 'angry', 'another', 'answer', 'any', 
'anyone', 'anything', 'anytime', 'appear', 'apple', 'baby', 'back', 'bad', 'bag', 'ball', 'bank', 'base', 'basket', 'bath', 'bean', 
'bear', 'beautiful', 'bed', 'bedroom', 'beer', 'behave', 'before', 'begin', 'behind', 'bell', 'below', 'besides', 'best', 'better', 'between', 
'big', 'bird', 'birth', 'birthday', 'bit', 'cake', 'call', 'can', 'candle', 'cap', 'car', 'card', 'care', 'careful', 'careless', 'carry', 
'case','cat', 'catch', 'central', 'century', 'certain', 'chair', 'chance', 'change', 'chase', 'cheap', 'cheese', 'chicken', 'child', 'children',
'dance', 'dangerous', 'dark', 'daughter', 'day', 'dead', 'decide', 'decrease', 'deep', 'deer', 'depend', 'desk', 'destroy', 'each', 'ear',
'early', 'earn', 'earth', 'east', 'easy', 'eat', 'education', 'effect', 'egg', 'eight', 'either', 'electric', 'elephant', 'face', 'fact',
'fail', 'fall', 'false', 'family', 'famous', 'far', 'farm', 'father', 'fast', 'fat', 'fault', 'fear', 'feed', 'feel', 'female', 'fever',
'few', 'fight', 'fill', 'film', 'find', 'fine', 'finger', 'finish', 'fire', 'first', 'fish', 'fit', 'five', 'fix', 'flag', 'flat', 'float',
'floor', 'flour', 'flower', 'game', 'garden', 'gate', 'general', 'gentleman', 'get', 'gift', 'give', 'glad', 'glass', 'goat', "hair", 
"half", "hall", "hammer", "hand", "happen", "happy", "hard", "hat", "hate", "have", "head", "healthy", "hear", "heavy", "heart", "heaven", 
"height", "hello", "help", "hen", "her", "here", "hers", "hide", "high", "hill", "him", "his", "hit", "hobby", "hold", "hole", "holiday", "home", 
"hope", "horse", "hospital", "hot", "hotel", "house", "how", "hundred", "hungry", "hour", "hurry", "husband", "ice", "idea", "if", "important", "in", 
"increase", "inside", "into", "introduce", "invent", "iron", "invite", "is", "island", "it", "its", "jelly", "job", "join", "juice", "jump", "just", 
"keep", "key", "kill", "kind", "king", "kitchen", "knee", "knife", "knock", "ladder", "lady", "lamp", "land", "large", "last", "late", "lately", "laugh", 
"lazy", "lead", "leaf", "learn", "leave", "leg", "left", "lend", "length", "less", "lesson", "let", "letter", "library", "lie", "life", "light", "like", 
"lion", "lip", "list", "listen", "little", "live", "lock", "lonely", "long", "look", "lose", "lot", "love", "low", "lower", "machine", "main", "make", 
"male", "man", "many", "map", "mark", "market", "marry", "matter", "may", "meal", "mean", "measure", "meat", "medicine", "meet", "member", "mention", 
"method", "middle", "milk", "million", "mind", "minute", "miss", "mistake", "mix", "model", "modern", "moment", "money", "monkey", "month", "moon", "more", 
"morning", "most", "mother", "mountain", "mouth", "move", "much", "music", "must", "name", "narrow", "nation", "nature", "near", "nearly", "neck", "need", 
"needle", "neither", "net", "never", "new", "news", "newspaper", "next", "nice", "night", "nine", "noble", "noise", "none", "north", "nose", 
"not", "nothing", "notice", "now", "obey", "object", "ocean", "of", "off", "offer", "office", "often", "oil", "old", "one", "only", "open", "opposite", 
"orange", "order", "other", "our", "out", "outside", "over", "page", "pain", "paint", "pair", "pan", "paper", "parent", "park", "part", "partner", "party", 
"pass", "past", "path", "pay", "peace", "pen", "pencil", "people", "pepper", "per", "perfect", "period", "person", "petrol", "photograph", "piano",
"pick", "picture", "piece", "pig", "pin", "pink", "place", "plane", "plant", "plastic", "plate", "play", "please", "pleased", "plenty", 
"pocket", "point", "poison", "police", "polite", "pool", "poor", "popular", "position", "possible", "potato", "pour", "power", "present", "press", "pretty", 
"prevent", "price", "prince", "prison", "private", "prize", "probably", "problem", "produce", "promise", "proper", "protect", "provide", "public", "pull", 
"punish", "pupil", "queen", "question", "quick", "quiet", "radio", "rain", "rainy", "raise", "reach", "read", "ready", "real", "really", "receive", "record", 
"red", "remember", "remind", "remove", "rent", "repair", "repeat", "reply", "report", "rest", "restaurant", "result", "return", "rice", "rich", "ride", "right", 
"ring", "sad", "safe", "sail", "salt", "same", "sand", "save", "say", "sad", "safe", "sail", "salt", "same", "sand", "save", "say", "school", "science", "scissors", 
"search", "sean", "seat", "second", "see", "seem", "sell", "send", "sentence", "serve", "seven", "several", "sex", "shade", "shadow", "shake", "shape", "share", "sharp", "she",
"sheep", "sheet", "shelf", "shine", "ship", "shirt", "shoe", "shoot", "shop", "short", "should", "shoulder", "shout", "show", "sick", 
"side", "signal", "silence", "silly", "silver","similar", "simple", "single", "since", "sing", "sink", "sister", "sit", "six", "size", "skill", "skin", "skirt", "table", 
"take", "talk", "tall", "taste", "taxi", "tea", "teach", "team", "tear", "telephone", "television", "tell", "ten", "tennis", "terrible", "test", "than", "that", "the", 
"their", "then", "there", "therefore", "these", "thick", "thin", "thing", "think", "third", "this", "though", "ugly", "uncle", "under", "understand", "unit", "until", 
"use", "useful", "usual", "vegetable", "very", "village", "voice", "wait", "wake", "walk", "want", "warm", "was", "wash", "waste", "watch", "water", "way", "weak", 
"wear", "weather", "wedding", "week", "weight", "welcome", "were", "well", "west", "wet", "what", "wheel", "when", "where", "which", "while", "white", "who", "yard", "yell", 
"yesterday", "yet", "you", "young", "zero"];

let hardList = ['abject', 'aberration', 'abjure','abrogate','abscond','abstruse','accede','accost','accretion','acumen','adamant','admonish','adumbrate','adverse','advocate',
'aggrandize','alacrity','alias','ambivalent', 'ascetic', 'ascetic','aspersion','assiduous','atrophy','bane','bashful','beguile','bereft','blandishment','bilk','bombastic','cajole',
'callous','calumny','camaraderie','candor','capitulate','carouse','caucus','circumscribe','construe','contusion','contrite','contentious','contravene','convivial','corpulence',
'covet','cupidity','dearth','debacle','debauch','debunk','defunct','demagogue','denigrate','derivative','despot','diaphanous','didactic','dirge','disaffected','discomfit','disparate',
'dispel','disrepute','divisive','dogmatic','dour','duplicity','duress','eclectic','edict','ebullient','egregious','elegy','elicit','embezzlement','emend','emollient','empirical','emulate',
'enervate','enfranchise','engender','ephemeral','epistolary','equanimity','equivocal','espouse','evanescent','evince','exacerbate','exhort','execrable','exigent','expedient','expiate',
'expunge','extraneous','extol','extant','expurgate','fallacious','fatuous','fetter','flagrant','foil','forbearance','forbearance','fortuitous','fractious','garrulous','gourmand','grandiloquent',
'gratuitous','hapless','hegemony','heterogenous','iconoclast','idiosyncratic','impecunious','impetuous','impinge','impute','inane','inchoate','incontrovertible','incumbent',
'inexorable','inimical','injunction','inoculate','insidious','instigate','insurgent','interlocutor','intimation','inure','invective','intransigent','inveterate','irreverence',
'knell','laconic','largesse','legerdemain','libertarian','licentious','linchpin','litigant','maelstrom','maudlin','maverick','mawkish','maxim','mendacious','modicum','morass','mores',
'munificent','multifarious','nadir','negligent','neophyte','noisome','noxious','obdurate','obfuscate','obstreperous','officious','onerous','ostensible','ostracism','palliate','panacea',
'paradigm','pariah','partisan','paucity','pejorative','pellucid','penchant','penurious','pert','pernicious',];

let words = document.querySelector(".words");
const startButton = document.querySelector("#startButton");
let timeTempo = document.querySelector(".time");
let timerDiv = document.querySelector(".time");
let scoreHtml = document.querySelector(".score");
let streakHtml = document.querySelector(".streak");
let streakP = document.querySelector(".streak-word");
let seconds = 45;
let score = 0;
let streak = 0;
let answer = document.querySelector("#user__input");
const easy = document.querySelector(".easy");
const hard = document.querySelector(".hard");
let correct = document.querySelector('#correct');
let incorrect = document.querySelector('#incorrect');

const timeLabel = document.querySelector(".time-label");

const incorrectSound = document.querySelector("#incorrect-sound");
const correctSound = document.querySelector("#correct-sound");

const fortyFiveSec = document.querySelector(".forty-five");
let fortyFive = 45; // forty five secounds
fortyFiveSec.addEventListener("click", () => {
    // fortyFiveSec.classList.add("orange-button-press");
    fortyFiveSec.style.boxShadow = "0px 4px 0px 0px #6d470f";
    sixtySec.style.boxShadow = "0px 8px 0px 0px #6d470f";
    // sixtySec.classList.remove("orange-button-press");
    fortyFiveSec.disabled = true;
    sixtySec.disabled = false;
    seconds = fortyFive;
    timerDiv.innerHTML = "45";
});

const sixtySec = document.querySelector(".sixty");
let sixty = 60; // sixty secounds
sixtySec.addEventListener("click", () => {
    // fortyFiveSec.classList.remove("orange-button-press");
    fortyFiveSec.style.boxShadow = "0px 8px 0px 0px #6d470f";
    sixtySec.style.boxShadow = "0px 4px 0px 0px #6d470f"
    // sixtySec.classList.add("orange-button-press");
    sixtySec.disabled = true;
    fortyFiveSec.disabled = false;
    seconds = sixty;
    timerDiv.innerHTML = "60";
});


answer.disabled = true;
easy.disabled = false;
hard.disabled = false;
fortyFiveSec.disabled = false;
sixtySec.disabled = false;

function countDown() {
    score = 0;
    streak = 0;
    let timer = setInterval(function(){
        startButton.disabled = true;
        seconds--;
        timeTempo.innerHTML = seconds;
        if (seconds >= 1 && seconds <= 10) {
            timeLabel.textContent = "";
            timeLabel.classList.add("timeLabel");
        } else if (seconds === 0) {
            timeLabel.textContent = "Time left";
            timeLabel.classList.remove("timeLabel");
        } else if (seconds === -1) {
            startButton.classList.remove("button-press");
            timeLabel.classList.remove("timeLabel");
            words.textContent = "Word Here";
            scoreHtml.innerHTML = "0";
            streakHtml.innerHTML = "0";
            clearInterval(timer);
            seconds = 45;
            timerDiv.innerHTML = "45";
            startButton.disabled = false;	
            answer.disabled = true;	
            easy.disabled = false;
            hard.disabled = false;
            fortyFiveSec.disabled = false;
            sixtySec.disabled = false;
            window.location.reload();
            alert("Game Over! Your score is " + score);
        };
    }, 1000);
};

function random() {
    let random = Math.floor(Math.random() * easyList.length)
    let word = easyList[random].split("");
    for (let i = 0; i < word.length; i++) {
        let span = document.createElement("span");
        span.classList.add("span");
        span.innerHTML = word[i];
        words.appendChild(span);
    }
    spans = document.querySelectorAll(".span");
}


window.onload = function() {
    window.setTimeout(fadeout, 2000); 
}

function fadeOut() {
    document.querySelector('.fadeout').style.opacity = '0';
}

function fadeoutIncorrect(){
    document.querySelector('#incorrect').style.opacity = '0';
}

// startButton.addEventListener("click", () => {
//     let word = easyList[Math.floor(Math.random() * easyList.length)]
//     words.textContent = word;
//     // words.textContent = ""
//     countDown();
//     // random();
//     startButton.disabled = true;
//     startButton.classList.add("button-press");
//     answer.disabled = false;
// });

easy.addEventListener("click", () => { 
    easy.classList.add("button-press");
    hard.style.boxShadow = "0px 8px 0px 0px #860303"
    easy.disabled = true;
    hard.disabled = false;
    startButton.disabled = false;
    startButton.addEventListener("click", () => {
        startButton.classList.add("button-press");
        let word = easyList[Math.floor(Math.random() * easyList.length)]
        words.textContent = word;
        countDown();
        start()
    });

    answer.addEventListener("keypress", (e) => {
        if (e.key === "Enter"){
            if (answer.value == words.textContent){
                fadeOut();
                correctSound.play();
                score++;
                streak++;
                scoreHtml.textContent = score;
                streakHtml.textContent = streak;
                answer.value = "";
                let word = easyList[Math.floor(Math.random() * easyList.length)]
                words.textContent = word;
                streakP.classList.remove("streakanimation");
            } else {
                fadeoutIncorrect();
                incorrectSound.play();
                answer.value = "";
                streakP.classList.add("streakanimation");
                streak = 0;
                streakHtml.textContent = streak;
            };
        };
    });
});

function start() {
    startButton.disabled = true;
    answer.disabled = false;
    easy.disabled = true;
    hard.disabled = true;
    fortyFiveSec.disabled = true;
    sixtySec.disabled = true;
}

hard.addEventListener("click", () => {
    easy.classList.remove("button-press");
    hard.style.boxShadow = "0px 4px 0px 0px #860303"
    easy.disabled = false;
    hard.disabled = true;
    startButton.disabled = false;
    startButton.addEventListener("click", () => {	
        startButton.classList.add("button-press");
        let word = hardList[Math.floor(Math.random() * hardList.length)]
        words.textContent = word;
        countDown();
        start();
    });

    answer.addEventListener("keypress", (e) => {
        if (e.key === "Enter"){
            if (answer.value == words.textContent){
                fadeOut();
                score++;
                streak++;
                scoreHtml.textContent = score;
                streakHtml.textContent = streak;
                answer.value = "";
                let word = hardList[Math.floor(Math.random() * hardList.length)]
                console.log(word)
                words.textContent = word;
                streakP.classList.remove("streakanimation");
            } else {
                fadeoutIncorrect();
                answer.value = "";
                streakP.classList.add("streakanimation");
                streak = 0;
                streakHtml.textContent = streak;
            };
        };
    });
});


