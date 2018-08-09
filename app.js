

// Reverse String

function reverstString() {

    var input = document.getElementById("inputTxt").value;

    if (isNaN(input)) {

        var output = "";

        for (i = input.length - 1; i >= 0; i--) {

            output += input[i]

        }

        document.getElementById("result").innerHTML = output;

    } else {
        document.getElementById("result").innerHTML = '<span class="alert alert-danger mt-2">Please enter Word !!! </span>';
    }

}


// Count Vowels

function countVowel() {
    var cvInput = document.getElementById("CV-input").value;


    if (isNaN(cvInput)) {

        var vowelCount = "0";

        for (var i = 0; i < cvInput.length ; i++) {

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
        document.getElementById("result2").innerHTML = 'Number of Vowel in '+ cvInput + ' : ' +vowelCount;

    } else {
        document.getElementById("result2").innerHTML = '<span class="alert alert-danger mt-2">Please enter Word !!! </span>';
    }



}







