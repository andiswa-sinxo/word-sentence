const word = document.querySelector(".text")
const btn = document.querySelector(".button")
const display = document.querySelector(".display")
const length = document.querySelector(".displayLength")
const checkbox = document.querySelector(".hide")
const long = document.querySelector(".displayWord")

/***
 * split your string - array : ['i', 'like', 'codeing']
 * get long word
 * loop through your list
 * element === longWord
 * mark longword with diff color
 */
const wordBtnClicked = () => {

    const wordSentence = word.value
    const splitWord = wordSentence.split(" ");
    let wordsMoreThanFour = ""
    //let long = ""
    for (let i = 0; i < splitWord.length; i++) {
        const element = splitWord[i];
        if (element.length > 4) {
            // if element === longWord
            wordsMoreThanFour += `<mark>${element}</mark> `
        }else {
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
            longWord += `<mark class= "gg">${arrWord}</mark>`
                console.log(arrWord);
        } else {
            longWord += ""
        }
        
    }
let WordLong = []
    for (let i = 0; i < split.length; i++) {
        const elem = split[i];
        if(elem.length == anotherLongWord.length){
                WordLong.push(elem)
                
        }
        
        
    }
    long.innerHTML= longWord;
    long.innerHTML = `The longest word in the sentence is <mark class= "gg">${WordLong}</mark> `
}


    
    btn.addEventListener('click', wordBtnClicked)
    checkbox.addEventListener("click", function(){
        hideWords();
        longestWord();
    })
    
    