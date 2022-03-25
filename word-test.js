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
    it("Should highlight a word with 5 characters", () => {
       
        const WordCount = countingWords()

         WordCount.wordLength("The cat is playing alone")
   
        assert.deepEqual("playing", WordCount.highLight())
        
    });
});