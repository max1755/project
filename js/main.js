document.querySelector(".guess").addEventListener("click", acceptGuess);
let counter = 0;
let randomValue = 0;

function acceptGuess() {

    let input = parseInt(document.querySelector('.input').value);

    if (counter === 0)
    {
        randomValue = Math.floor(Math.random() * 10) * Math.floor(Math.random() * 10) + 1;
        counter = 1;
    }

    if (input > randomValue){
    document.querySelector('.message').innerHTML = "My number isn't that big!";
    }
   if (input < randomValue){
    document.querySelector('.message').innerHTML = "My number is bigger than that!";
    }
   if (input === randomValue){
    document.querySelector('.message').innerHTML = "That's right! Congratulations!";
   }
}