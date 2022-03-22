const word = document.querySelector(".text")
const btn = document.querySelector(".button")
const display = document.querySelector(".display")
const length = document.querySelector(".displayLength")
const checkbox = document.querySelector(".hide")
const long = document.querySelector(".displayWord")


const getLongestWord = (sentence) => {
    let longWord = '';
    const longWords = []
    const words = sentence.split(' ');

    words.map(word => {
        if (word.length >= longWord.length) {
            longWord = word
        }
    });

    words.map(word => {
        if (word.length == longWord.length) {
            longWords.push(word)
        }
    })
    console.log(longWords);
    return longWords;
}


const wordBtnClicked = () => {

    const wordSentence = word.value
    const splitWord = wordSentence.split(" ");
    let wordsMoreThanFour = ""
    //let long = ""
    const lwf = getLongestWord(wordSentence);

    for (let i = 0; i < splitWord.length; i++) {
        const element = splitWord[i];
        if (element.length > 4) {
            // if element === longWord
            if (lwf.includes(element)) {
                wordsMoreThanFour += `<mark><u>${element}</u></mark> `

            } else {
                wordsMoreThanFour += `<mark>${element}</mark> `

            }
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
        if ((checkbox.checked === false) && (split[i].length >= 5)) {
            notHiddenWords += `<mark>${elem}</mark> `
        } else if ((checkbox.checked === false) && (split[i].length < 5)) {
            notHiddenWords += `${elem} `
        }
        if ((checkbox.checked === true) && (split[i].length >= 5)) {
            notHiddenWords += `<mark>${elem}</mark> `
        } else {
            notHiddenWords += ""
        }
        display.innerHTML = notHiddenWords
    }

}
const longestWord = () => {
    let arrWord = [0];
    const wordSentence = word.value
    const split = wordSentence.split(" ");
    let longWord = ""
    let anotherLongWord = ""

    for (let i = 0; i < split.length; i++) {
        const elem = split[i];
        if ((checkbox.checked === true) && (arrWord.length <= elem.length)) {
            console.log(arrWord.length < elem.length);
            arrWord = split[i]
            anotherLongWord = elem
            longWord += `<mark class= "gg">${arrWord}</mark> `
            console.log(arrWord);
        } else {
            longWord += ""
        }

    }
    let WordLong = []
    for (let i = 0; i < split.length; i++) {
        const elem = split[i];
        if (elem.length == anotherLongWord.length) {
            WordLong.push(elem)

        }


    }
    long.innerHTML = longWord;
    long.innerHTML = `<mark class= "gg">${WordLong}</mark> `
}



btn.addEventListener('click', function () {
    wordBtnClicked()
    // longestWord()

})
checkbox.addEventListener("click", function () {
    const x = getLongestWord(word.value);
    console.log(x);
    hideWords(),
        longestWord()
})

