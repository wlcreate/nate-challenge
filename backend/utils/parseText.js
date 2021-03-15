const parseText = string => {
    let output = {}

    let removePunctuation = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"\[\]]/g, "").toLowerCase()
    let removeNums = removePunctuation.replace(/[0-9]/g, "")
    let removeExtraLines = removeNums.replace(/\n\n+/g, " ");
    let removeExtraSpaces = removeExtraLines.trim().replace(/\s{2,}/g," ")

    // After removing everything, if don't find something other than a space it means it's empty
    if (!/\S/.test(removeExtraSpaces)) {
        return output
    }

    let wordsArray = removeExtraSpaces.split(" ")
   
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] in output) { // if the word is already in output as a key, increase the value of the key by 1
            output[wordsArray[i]] += 1
        } else {
            output[wordsArray[i]] = 1 // if the word is not in output as a key, create it as a key with the value of 1
        }
    }

    return output
}

module.exports = parseText