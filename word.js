const word = document.querySelector(".text")
const btn = document.querySelector(".button")
const display = document.querySelector(".display")
const length = document.querySelector(".displayLength")
// const wordsMoreThanFour = []

const wordBtnClicked = () => {

    const wordSentence = word.value
     const splitWord = wordSentence.split(" ");
    let wordsMoreThanFour = ""
     for (let i = 0; i < splitWord.length; i++) {
         const element = splitWord[i];
         if (element.length > 4) {
            wordsMoreThanFour +=  `<mark>${element}</mark> `
         }else{
            wordsMoreThanFour += `${element} `
         }
         
     }
     display.innerHTML = wordsMoreThanFour;

     if (wordSentence) {
         const lengthWord = wordSentence.split(" ").length;
         length.innerHTML = `Number of words in a sentence: ${lengthWord} `
     } 
}




btn.addEventListener('click', wordBtnClicked)