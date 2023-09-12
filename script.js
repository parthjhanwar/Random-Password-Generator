const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghjiklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "!@#$%^&*()";


const passBox = document.getElementById("pass-box");
const totalChars = document.getElementById("length-check");
const upperCheck = document.getElementById("uppercase-check");
const lowerCheck = document.getElementById("lowercase-check");
const numbersCheck = document.getElementById("numbers-check");
const symbolsCheck = document.getElementById("symbols-check");
const passBtn = document.getElementById("generate-password-btn");

const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
}

const generatePassword = (password = "") => {
    if (upperCheck.checked) {
        password += getRandomData(upperSet);
    }
    if (lowerCheck.checked) {
        password += getRandomData(lowerSet);
    }
    if (numbersCheck.checked) {
        password += getRandomData(numberSet);
    }
    if (symbolsCheck.checked) {
        password += getRandomData(symbolSet);
    }

    if (password.length < totalChars.value) {
        return generatePassword(password);
    }

    passBox.innerHTML = truncatePass(password, totalChars.value);
}


passBtn.addEventListener("click", function () {
    generatePassword();
});


const truncatePass = (passwordLength, providedLength) => {
    if (passwordLength > providedLength) {
        let newPass = passwordLength.substring(0, providedLength);
        return newPass;
    }
    else {
        return passwordLength;
    }
}
