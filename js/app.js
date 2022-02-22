console.log('hello world');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function innerNum(num, container) {
    container.innerHTML += `<div class="random-number fs-1">${num}</div>`;
}

function userNum(params) {
    
}

let randomNumber;
let randomNumberArray = [];
const randomNumContainer = document.getElementById('num-random-container');
const buttonStart = document.getElementById('button-start');
const container = document.querySelector('.container');
let timer = 0;
let clock;

for (let i = 0; i < 5; i++) {
    
    randomNumber = getRandomIntInclusive(1, 20);
    randomNumberArray.push(randomNumber);
    
}

console.log(randomNumberArray);

randomNumberArray.forEach(element => {

    let num = innerNum(element, randomNumContainer);

});


buttonStart.addEventListener('click', function(){

    container.classList.remove('active');

    let clock = setInterval( fuction () {

        

    }, 1000)

})




/* console.log(randomNumberArray) */

/* const randomNumberString = randomNumberArray.join(' - ') */

/* alert(`Memorizza questi 5 numeri: ${randomNumberString} . Quando sei pronto schiaccia su 'ok', tenendo a mente i tuoi numeri.`) */