document.querySelector(".guess").addEventListener("click", acceptGuess);

const gameVariable = 
{
counter: 0,
randomValue: 0,
int: 1,
};

function acceptGuess() {

    let input = parseInt(document.querySelector('.input').value);

    if (gameVariable.int === 5){
        alert("Out of tries");
        location.reload();
    }

    if (gameVariable.counter === 0)
    {
        gameVariable.randomValue = Math.floor(Math.random() * 5) * Math.floor(Math.random() * 5) + 1;
        gameVariable.counter = 1;
    }

    if (input > gameVariable.randomValue){
    document.querySelector('.message').innerHTML = "My number is less than "+input+"!";
    coloring();
    }
   if (input < gameVariable.randomValue){
    document.querySelector('.message').innerHTML = "My number is bigger than "+input+"!";
    coloring();
    }
   if (input === gameVariable.randomValue){
    document.querySelector('.message').innerHTML = "That's right! Congratulations!";
    correct();
   }
}

function coloring()
{
    document.getElementById("cell"+gameVariable.int).style.backgroundColor = 'red';
    gameVariable.int = gameVariable.int + 1;
}

function correct()
{
    document.getElementById("cell1").style.backgroundColor = 'green';
    document.getElementById("cell2").style.backgroundColor = 'green';
    document.getElementById("cell3").style.backgroundColor = 'green';
    document.getElementById("cell4").style.backgroundColor = 'green';
}