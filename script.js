const hrInput = document.getElementById('hours');
const minInput = document.getElementById('minutes');
const submitBut = document.getElementById('submit-but');
const resetBut = document.getElementById('reset-but');
const output = document.getElementById('result');
let totalTime = 0;


function timeAddition() {
    //resetting input field values

    let hrUserInput = parseInt(hrInput.value);
    let minUserInput = parseInt(minInput.valueAsNumber);
    if(hrInput.value <= 0) {
        hrUserInput = 0;
    }
    if(minInput.value <= 0) {
        minUserInput = 0;
    }

    let finalTime = 0;

        let hrToMin = hrUserInput * 60;
        let totalMin = hrToMin + minUserInput;
        totalTime = totalTime + totalMin;
        let outputHr = Math.floor(totalTime / 60);
        let outputMin = totalTime % 60;
        let outputTime = `${outputHr}hr ${outputMin}min`;
        output.innerHTML = outputTime;
    

    hrInput.value = "";
    minInput.value = "";
}

function reset() {
    totalTime = 0;
    output.innerHTML = "0";
    console.log('kočka');
}

document.addEventListener('DOMContentLoaded', () => {
    submitBut.addEventListener('click', timeAddition);
    resetBut.addEventListener('click', reset);
})

document.addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        timeAddition();
    }
})