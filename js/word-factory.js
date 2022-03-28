const countingWords = (theWordSentence) => {

    let getSentence = theWordSentence || [];

    const wordLength = (word) => {
        let domLength = "";
        if (word) {
            const lengthWord = word.split(" ").length;
            domLength = `Number of words in a sentence: ${lengthWord} `
            return domLength
        }
    }

    const WordsLongerThanFive = (sentence) => {
        let high = highLight(sentence);
        return high;
    }

    const highLight = (sentence) => {
        const splitWord = sentence.split(" ");

        let wordsMoreThanFour = ""
        const lwf = getLongestWord(sentence);

        for (let i = 0; i < splitWord.length; i++) {
            const element = splitWord[i];
            if (element.length > 4) {
                if (lwf.includes(element)) {
                    wordsMoreThanFour += `<mark class = "gg"><u>${element}</u></mark> `
                } else {
                    wordsMoreThanFour += `<mark>${element}</mark> `
                }
            } else {
                wordsMoreThanFour += `${element} `
            }
        }
        return wordsMoreThanFour;
    }

    const setSentences = (characters) => {
        console.log(getSentence);
        if (!getSentence.includes(characters)) {
            getSentence.push(characters)
            return getSentence
        } else {
            return getSentence
        }

    }

    const getAllSentences = () => {
        return getSentence
        
    }

    const getLongestWord = (sentence) => {
        let longWord = '';
        const longWords = []

        const words = sentence.split(" ");

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

    const checkWord = (word) => {
        const split = word.split(" ");
        let notHiddenWords = ""

        for (let i = 0; i < split.length; i++) {
            const elem = split[i];
            if ((checkbox.checked === false) && (split[i].length >= 5)) {
                notHiddenWords += `${elem} `
            } else if ((checkbox.checked === false) && (split[i].length < 5)) {
                notHiddenWords += `${elem} `
            }
            if ((checkbox.checked === true) && (split[i].length >= 5)) {
                notHiddenWords += `${elem} `
            } else {
                notHiddenWords += ""
            }
        }
        return notHiddenWords

    }

    return {
        WordsLongerThanFive,
        getLongestWord,
        wordLength,
        checkWord,
        highLight,
        setSentences,
        getAllSentences
    }
}