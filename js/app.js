console.log('hello world');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function innerNum(num, container) {
    container.innerHTML += `<div class="random-number fs-1">${num}</div>`;
}



let randomNumber;
let randomNumberArray = [];
const randomNumContainer = document.getElementById('num-random-container');
const buttonStart = document.getElementById('button-start');
const container = document.querySelector('.container');
const userContainer = document.querySelector('.user-container');
let timer = 0;
let clock;
const userInput1 = document.getElementById('user-number-1');
const userInput2 = document.getElementById('user-number-2');
const userInput3 = document.getElementById('user-number-3');
const userInput4 = document.getElementById('user-number-4');
const userInput5 = document.getElementById('user-number-5');
const userInputArray = [userInput1, userInput2, userInput3, userInput4, userInput5]
let userNumArray = [];
const buttonCheck = document.getElementById('button-check');



do {

    randomNumber = getRandomIntInclusive(1, 20);

    if (!randomNumberArray.includes(randomNumber)) {   
        randomNumberArray.push(randomNumber);
    }
    
} while (randomNumberArray.length < 5);



console.log(randomNumberArray);

randomNumberArray.forEach(element => {

    let num = innerNum(element, randomNumContainer);

});


buttonStart.addEventListener('click', function(){

    container.classList.remove('active');

    clock = setTimeout(() => {
        
        userContainer.classList.add('active');

        buttonCheck.addEventListener('click', function(){
            let i = 0;

            userInputArray.forEach(element => {
                userNumArray.push(element.value)
            });

            



            console.log(userNumArray)

            if (userNumArray.includes(userInputArray[i].value)){   
                
                alert( 'Hai messo dei numeri uguali')

            }
            
            if (parseInt(userNumArray) == parseInt(randomNumberArray)) {
                alert('Bravo, li hai indovinati!')
            }else{
                alert('Mi dispiace, non li hai ricordati tutti :(')
            }

            userNumArray = []

        })


    }, 30* 1000);

})




/* console.log(randomNumberArray) */

/* const randomNumberString = randomNumberArray.join(' - ') */

/* alert(`Memorizza questi 5 numeri: ${randomNumberString} . Quando sei pronto schiaccia su 'ok', tenendo a mente i tuoi numeri.`) */