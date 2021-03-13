const parseText = string => {
    let removePunctuation = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"]/g, "").toLowerCase()
    let removeExtraSpaces = removePunctuation.replace(/\s{2,}/g," ")
    let wordsArray = removeExtraSpaces.split(" ")
    let output = {}
   
    if (string.length > 0) {
        for (let i = 0; i < wordsArray.length; i++) {
            if (wordsArray[i] in output) {
                output[wordsArray[i]] += 1
            } else {
                output[wordsArray[i]] = 1
            }
        }
    }

    return output
}

module.exports = parseText