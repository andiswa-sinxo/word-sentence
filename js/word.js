const word = document.querySelector(".text")
const btn = document.querySelector(".button")
const display = document.querySelector(".display")
const length = document.querySelector(".displayLength")
const checkbox = document.querySelector(".hide")
const long = document.querySelector(".displayWord")



let theWordSentence = [];

if(localStorage["sentences"]) {
    theWordSentence = JSON.parse(localStorage.getItem("sentences"));
}
const wordWidget = countingWords()

const wordBtnClicked = () => {

    const wordSentence = word.value
    let moreWords = wordWidget.WordsLongerThanFive(wordSentence)
    display.innerHTML = moreWords;
    let countWords = wordWidget.wordLength(wordSentence);
    length.innerHTML = countWords;
    wordWidget.setSentences(wordSentence)
    
}

const hideWords = () => {
    const wordSentence = word.value
    let checkWords = wordWidget.checkWord(wordSentence)
   let checkCheck = wordWidget.highLight(checkWords);
    display.innerHTML = checkCheck

}

btn.addEventListener('click', function () {
    const x = wordWidget.getLongestWord(word.value);
    console.log(x);
    wordBtnClicked()

    localStorage.setItem('sentences', JSON.stringify(wordWidget.setSentences(word.value)))
    console.log(wordWidget.setSentences());
    

})
checkbox.addEventListener("click", function () {
    hideWords()
   
})

