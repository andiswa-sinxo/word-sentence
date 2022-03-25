describe("Words Widget", () => {
    it("Should return the words that has more than 4 characters", () => {
       
        const WordCount = countingWords()

        const ll = WordCount.wordLength("The cat ate a rat")
   
        assert.equal('Number of words in a sentence: 5 ', ll)
        
    });
});