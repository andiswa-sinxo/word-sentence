describe("Words Widget", () => {
    it("Should return the words that has more than 4 characters", () => {
       
        const WordCount = countingWords()

        const ll = WordCount.wordLength("The cat ate a rat")
   
        assert.equal('Number of words in a sentence: 5 ', ll)
        
    });

    it("Should return the words that has 6 characters", () => {
       
        const WordCount = countingWords()

        const ll = WordCount.wordLength("The cat is playing with a wool")
   
        assert.equal('Number of words in a sentence: 7 ', ll)
        
    });

    it("Should return the words with less than 5 characters", () => {
       
        const WordCount = countingWords()

        const ll = WordCount.wordLength("The cat is playing")
   
        assert.equal('Number of words in a sentence: 4 ', ll)
        
    });
});

describe("Highlight words", () => {
    it("Should get the word(s) with 5 or more characters in a sentence", () => {
       
        const WordCount = countingWords()

       let longWord =  WordCount.getLongestWord("The cat is playing alone")
   
        assert.deepEqual(["playing"], longWord)
        
    });
    it("Should highlight the longest word(s)", () => {
       
        const WordCount = countingWords()
        let str = "The cat is playing alone in the backyard"
    //    let longWord =  WordCount.getLongestWord("The cat is playing alone in the backyard")
    let longWords = WordCount.WordsLongerThanFive("The cat is playing alone in the backyard")
   
        assert.deepEqual(["backyard"], longWords)
        
    });
});