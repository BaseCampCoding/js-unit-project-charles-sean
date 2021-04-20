let easyList = ['dog', 'cat', 'a', 'about', 'above', 'across', 'act', 'active', 'activity', 'add', 'afraid', 'after', 'again', 'age', 
'ago', 'agree', 'air', 'all', 'alone', 'along', 'already', 'always', 'am', 'amount', 'an', 'and', 'angry', 'another', 'answer', 'any', 
'anyone', 'anything', 'anytime', 'appear', 'apple', 'baby', 'back', 'bad', 'bag', 'ball', 'bank', 'base', 'basket', 'bath', 'be', 'bean', 
'bear', 'beautiful', 'bed', 'bedroom', 'beer', 'behave', 'before', 'begin', 'behind', 'bell', 'below', 'besides', 'best', 'better', 'between', 
'big', 'bird', 'birth', 'birthday', 'bit', 'cake', 'call', 'can', 'candle', 'cap', 'car', 'card', 'care', 'careful', 'careless', 'carry', 
'case','cat', 'catch', 'central', 'century', 'certain', 'chair', 'chance', 'change', 'chase', 'cheap', 'cheese', 'chicken', 'child', 'children',
'dance', 'dangerous', 'dark', 'daughter', 'day', 'dead', 'decide', 'decrease', 'deep', 'deer', 'depend', 'desk', 'destroy', 'each', 'ear',
'early', 'earn', 'earth', 'east', 'easy', 'eat', 'education', 'effect', 'egg', 'eight', 'either', 'electric', 'elephant', 'face', 'fact',
'fail', 'fall', 'false', 'family', 'famous', 'far', 'farm', 'father', 'fast', 'fat', 'fault', 'fear', 'feed', 'feel', 'female', 'fever',
'few', 'fight', 'fill', 'film', 'find', 'fine', 'finger', 'finish', 'fire', 'first', 'fish', 'fit', 'five', 'fix', 'flag', 'flat', 'float',
'floor', 'flour', 'flower', 'game', 'garden', 'gate', 'general', 'gentleman', 'get', 'gift', 'give', 'glad', 'glass', 'go', 'goat', "hair", 
"half", "hall", "hammer", "hand", "happen", "happy", "hard", "hat", "hate", "have", "he", "head", "healthy", "hear", "heavy", "heart", "heaven", 
"height", "hello", "help", "hen", "her", "here", "hers", "hide", "high", "hill", "him", "his", "hit", "hobby", "hold", "hole", "holiday", "home", 
"hope", "horse", "hospital", "hot", "hotel", "house", "how", "hundred", "hungry", "hour", "hurry", "husband", "ice", "idea", "if", "important", "in", 
"increase", "inside", "into", "introduce", "invent", "iron", "invite", "is", "island", "it", "its", "jelly", "job", "join", "juice", "jump", "just", 
"keep", "key", "kill", "kind", "king", "kitchen", "knee", "knife", "knock", "ladder", "lady", "lamp", "land", "large", "last", "late", "lately", "laugh", 
"lazy", "lead", "leaf", "learn", "leave", "leg", "left", "lend", "length", "less", "lesson", "let", "letter", "library", "lie", "life", "light", "like", 
"lion", "lip", "list", "listen", "little", "live", "lock", "lonely", "long", "look", "lose", "lot", "love", "low", "lower", "machine", "main", "make", 
"male", "man", "many", "map", "mark", "market", "marry", "matter", "may", "me", "meal", "mean", "measure", "meat", "medicine", "meet", "member", "mention", 
"method", "middle", "milk", "million", "mind", "minute", "miss", "mistake", "mix", "model", "modern", "moment", "money", "monkey", "month", "moon", "more", 
"morning", "most", "mother", "mountain", "mouth", "move", "much", "music", "must", "name", "narrow", "nation", "nature", "near", "nearly", "neck", "need", 
"needle", "neither", "net", "never", "new", "news", "newspaper", "next", "nice", "night", "nine", "no", "noble", "noise", "none", "nor", "north", "nose", 
"not", "nothing", "notice", "now", "obey", "object", "ocean", "of", "off", "offer", "office", "often", "oil", "old", "on", "one", "only", "open", "opposite", 
"or", "orange", "order", "other", "our", "out", "outside", "over", "page", "pain", "paint", "pair", "pan", "paper", "parent", "park", "part", "partner", "party", 
"pass", "past", "path", "pay", "peace", "pen", "pencil", "people", "pepper", "per", "perfect", "period", "person", "petrol", "photograph", "piano",
"pick", "picture", "piece", "pig", "pin", "pink", "place", "plane", "plant", "plastic", "plate", "play", "please", "pleased", "plenty", 
"pocket", "point", "poison", "police", "polite", "pool", "poor", "popular", "position", "possible", "potato", "pour", "power", "present", "press", "pretty", 
"prevent", "price", "prince", "prison", "private", "prize", "probably", "problem", "produce", "promise", "proper", "protect", "provide", "public", "pull", 
"punish", "pupil", "queen", "question", "quick", "quiet", "radio", "rain", "rainy", "raise", "reach", "read", "ready", "real", "really", "receive", "record", 
"red", "remember", "remind", "remove", "rent", "repair", "repeat", "reply", "report", "rest", "restaurant", "result", "return", "rice", "rich", "ride", "right", 
"ring", "sad", "safe", "sail", "salt", "same", "sand", "save", "say", "school", "science", "scissors", "search", "seat", "second", "see", "seem", "sell", "send", 
"sentence", "serve", "seven", "several", "sex", "shade", "shadow", "shake", "shape", "share", "sharp", "sad", "safe", "sail", "salt", "same", "sand", "save", "say", 
"school", "science", "scissors", "search", "seat", "second", "see", "seem", "sell", "send", "sentence", "serve", "seven", "several", "sex", "shade", "shadow", "shake", 
"shape", "share", "sharp", "she", "sheep", "sheet", "shelf", "shine", "ship", "shirt", "shoe", "shoot", "shop", "short", "should", "shoulder", "shout", "show", "sick", 
"side", "signal", "silence", "silly", "silver","similar", "simple", "single", "since", "sing", "sink", "sister", "sit", "six", "size", "skill", "skin", "skirt", "table", 
"take", "talk","tall", "taste", "taxi", "tea", "teach", "team", "tear", "telephone", "television", "tell", "ten", "tennis", "terrible", "test", "than", "that", "the", 
"their", "then", "there", "therefore", "these", "thick", "thin", "thing", "think", "third", "this", "though", "ugly", "uncle", "under", "understand", "unit", "until", "up", 
"use", "useful", "usual", "vegetable", "very", "village", "voice", "wait", "wake", "walk", "want", "warm", "was", "wash", "waste", "watch", "water", "way", "we", "weak", 
"wear", "weather", "wedding", "week", "weight", "welcome", "were", "well", "west", "wet", "what", "wheel", "when", "where", "which", "while", "white", "who", "yard", "yell", 
"yesterday", "yet", "you", "young", "zero"];

let hardList = ['abject', 'aberration', 'abjure','abrogate','abscond','abstruse','accede','accost','accretion','acumen','adamant','admonish','adumbrate','adverse','advocate','aggrandize','alacrity','alias','ambivalent', 'ascetic', 'ascetic','aspersion','assiduous','atrophy','bane','bashful','beguile','bereft','blandishment','bilk','bombastic','cajole','callous','calumny','camaraderie','candor','capitulate','carouse','caucus','circumscribe','construe','contusion','contrite','contentious','contravene','convivial','corpulence','covet','cupidity','dearth','debacle','debauch','debunk','defunct','demagogue','denigrate','derivative','despot','diaphanous','didactic','dirge','disaffected','discomfit','disparate','dispel','disrepute','divisive','dogmatic','dour','duplicity','duress','eclectic','edict','ebullient','egregious','elegy','elicit','embezzlement','emend','emollient','empirical','emulate','enervate','enfranchise','engender','ephemeral','epistolary','equanimity','equivocal','espouse','evanescent','evince','exacerbate','exhort','execrable','exigent','expedient','expiate','expunge','extraneous','extol','extant','expurgate','fallacious','fatuous','fetter','flagrant','foil','forbearance','forbearance','fortuitous','fractious','garrulous','gourmand','grandiloquent','gratuitous','hapless','hegemony','heterogenous','iconoclast','idiosyncratic','impecunious','impetuous','impinge','impute','inane','inchoate','incontrovertible','incumbent','inexorable','inimical','injunction','inoculate','insidious','instigate','insurgent','interlocutor','intimation','inure','invective','intransigent','inveterate','irreverence','knell','laconic','largesse','legerdemain','libertarian','licentious','linchpin','litigant','maelstrom','maudlin','maverick','mawkish','maxim','mendacious','modicum','morass','mores','munificent','multifarious','nadir','negligent','neophyte','noisome','noxious','obdurate','obfuscate','obstreperous','officious','onerous','ostensible','ostracism','palliate','panacea','paradigm','pariah','partisan','paucity','pejorative','pellucid','penchant','penurious','pert','pernicious',];

let words = document.querySelector('.words')
let startButton = document.querySelector('#startButton')
let tempo = document.querySelector('.time');
let timerDiv =document.querySelector(".time");
let scoreHtml = document.querySelector(".score");
let seconds = 15;
let score = 0;
let start = document.querySelector('#startButton')
let answer = document.querySelector('#user__input')
let easy = document.querySelector('.easy')
let hard = document.querySelector('.hard')

answer.disabled = true;
easy.disabled = false;
hard.disabled = false;

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
            answer.disabled = true;	
            easy.disabled = false;
            hard.disabled = false;
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

easy.addEventListener('click', () => {
    easy.disabled = true;
    hard.disabled = true;
    startButton.addEventListener('click', () => {	
        let word = easyList[Math.floor(Math.random() * easyList.length)]
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
            }
        }
    })
})

hard.addEventListener('click', () => {
    easy.disabled = true;
    hard.disabled = true;
    startButton.addEventListener('click', () => {	
        let word = hardList[Math.floor(Math.random() * hardList.length)]
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
                let word = hardList[Math.floor(Math.random() * hardList.length)]
                console.log(word)
                words.textContent = word;
            }else{
                answer.value = ''
            }
        }
    })
})


