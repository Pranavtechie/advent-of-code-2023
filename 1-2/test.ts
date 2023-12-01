let str = "sevenzzrt3vfcsxmqgh4"

let secondStr = "onetwofivelvnbcbn5"

let thirdStr = "4fourztnthreeone8mqmdfour"


function findIndexOfSecondMinimumValue(arr: number[]): number {

    let x = -1;
    let requiredValue = 9999999
    let requiredIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== x) {
            if (arr[i] < requiredValue) {
                requiredValue = arr[i]
                requiredIndex = i;
            }
        }
    }


    return requiredIndex;

}

function resolveWordsToInteger(str: string): string {
    let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let wordStartIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1]


    while (!wordStartIndex.every((val) => val === -1)) {

        let wordIndex = findIndexOfSecondMinimumValue(wordStartIndex)
        str = str.replace(words[wordIndex], String(wordIndex))

        wordStartIndex = []
        for (const word of words) {
            wordStartIndex.push(str.search(word))
        }

    }

    return str;
}


console.log(str, resolveWordsToInteger(str))
console.log(secondStr, resolveWordsToInteger(secondStr))
console.log(thirdStr, resolveWordsToInteger(thirdStr))