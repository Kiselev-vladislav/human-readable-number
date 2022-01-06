module.exports = function toReadable (number) {
    let arr = getArr(number)
    let result = []
    console.log(arr.length)
    if (arr.length == 3 && arr[1] > 1) {
        result.push(translateUnit(arr[0]),'hundred',translateDozen(arr[1]),translateUnit(arr[2]))
    }
    if (arr.length == 3 && arr[1] == 1) {
        result.push(translateUnit(arr[0]),'hundred',translateTeens(arr[2]))
    }
    if (arr.length == 3 && arr[1] == 0) {
        result.push(translateUnit(arr[0]),'hundred',translateUnit(arr[2]))
    }
    if (arr.length == 2 && arr[0] > 1) {
        result.push(translateDozen(arr[0]),translateUnit(arr[1]))
    }
    if (arr.length == 2 && arr[0] < 2){
        result.push(translateTeens(arr[1]))
    }
    if (arr.length == 1){
        result.push(translateUnit(arr[0]))
    }
    if(number == 0){
        return 'zero'
    }
    return result.join(' ').trim()
}


var ones=['','one','two','three','four','five','six','seven','eight','nine'];
var tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];


function translateUnit(num) {
    return ones[num]
    }

function translateDozen(num) {
        return tens[num]  
}

function translateTeens(num) {
    return teens[num]
}

function getArr(number){
    let arr = String(number).split('')
    return arr
}