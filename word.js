const word = document.querySelector(".text")
const btn = document.querySelector(".button")
const display = document.querySelector(".display")
const length = document.querySelector(".displayLength")
const checkbox = document.querySelector(".hide")

const wordBtnClicked = () => {

    const wordSentence = word.value
    const splitWord = wordSentence.split(" ");
    let wordsMoreThanFour = ""
    for (let i = 0; i < splitWord.length; i++) {
        const element = splitWord[i];
        if (element.length > 4) {
            wordsMoreThanFour += `<mark>${element}</mark> `
        } else {
            wordsMoreThanFour += `${element} `
        }

    }
    display.innerHTML = wordsMoreThanFour;

    if (wordSentence) {
        const lengthWord = wordSentence.split(" ").length;
        length.innerHTML = `Number of words in a sentence: ${lengthWord} `
    }
}

const hideWords = () => {
    
    const wordSentence = word.value
    const split = wordSentence.split(" ");
    let notHiddenWords = ""
    for (let i = 0; i < split.length; i++) {
        const elem = split[i];
        if ((checkbox.checked === true) && (split[i].length >= 5)) {
            notHiddenWords += `<mark>${elem}</mark> `
        } else {
            notHiddenWords += ""
        }
            display.innerHTML = notHiddenWords
    }
    
}

    
    btn.addEventListener('click', wordBtnClicked)
    checkbox.addEventListener("click", hideWords)
    