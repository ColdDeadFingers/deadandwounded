let guessnumNumber = Math.floor(1000 + Math.random() * 9000)
let guessNumber = String(guessnumNumber)

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function deadAndWounded(){
    plauyernumGuess = document.getElementById("num1").value + document.getElementById("num2").value + document.getElementById("num3").value + document.getElementById("num4").value
    playerGuess = String(plauyernumGuess)
    console.log(guessNumber)
    console.log(playerGuess)

    dead = 0
    wounded = 0
    position = 0

    while(position < 4){
        if(playerGuess[position] == guessNumber[position]){
            dead += 1
        }
        else if(guessNumber.includes(playerGuess[position]) && playerGuess[position] != guessNumber[position]){
            wounded += 1
        }
        position ++
    }

    if (dead == 4){
        document.getElementById('result').textContent = "All dead, you win!"
    }
    else{
        document.getElementById('result').textContent = `There are ${dead} dead and ${wounded} wounded`
    }

    await sleep(1000)
    document.getElementById("num1").value = ""
    document.getElementById("num2").value = ""
    document.getElementById("num3").value = ""
    document.getElementById("num4").value = ""
    
}


