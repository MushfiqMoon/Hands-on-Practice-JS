// Reverse String

const reverstString = () => {

    const input = document.getElementById('inputTxt').value;

    if (isNaN(input)) {

        let output = "";

        for (let i = input.length - 1; i >= 0; i--) {
            output += input[i]
        }
        document.getElementById("result").innerHTML = output;
    } else {
        document.getElementById("result").innerHTML = `<span class="alert alert-danger mt-2">Please enter Word !!! </span>`;
    }
}


// Count Vowels

const countVowel = () => {

    const cvInput = document.getElementById("CV-input").value;


    if (isNaN(cvInput)) {

        let vowelCount = "0";

        for (let i = 0; i < cvInput.length; i++) {

            switch (cvInput[i]) {
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                    vowelCount++
                    break;
            }
        }
        document.getElementById("result2").innerHTML = `Number of Vowel in ${cvInput } : ${vowelCount}`;

    } else {
        document.getElementById("result2").innerHTML = `<span class="alert alert-danger mt-2">Please enter Word !!! </span>`;
    }



}







