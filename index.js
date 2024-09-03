const containerEl = document.querySelector(".container")

const wordArray = ["Hello there!", "My name is Izza Sinatrya", "I'm a Software Developer"]

let wordIndex = 0
let charIndex = 0


updateText()

function updateText() {
    charIndex++     //must place this code on the first line (*error: last word)
    const actionWord = wordArray[wordIndex].slice(0,charIndex)
    
    //print into HTML
    containerEl.innerHTML =`
    <h1>- ${actionWord} -</h1>
`
    //condition; change the Word array index if it finish rendered the sentence. 
    if(charIndex === wordArray[wordIndex].length){
        setTimeout(() => {
            wordIndex++
            charIndex = 0
        }, 400);
    }

    //condition; if it finish run through career index, set career index back to 0 (loop).
    if(wordIndex === wordArray.length){
        wordIndex = 0
    }

    // method to call a function after a certain period.
    setTimeout(updateText, 300);
}

// const adj = ${wordArray[wordIndex].slice(0,1) === "A" ? "I" ? "U" ? "E" ? "O" ? "an" : "a"}      (a and an conditions)