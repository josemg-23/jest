// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9/1.2
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen /127.9*0.8
    return valueInPound;
}
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound }