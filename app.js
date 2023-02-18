// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
// module.exports = { sum }; // la comentamos porque la estoy exportando abajo junto con la otra funcion

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euro) => {
    let dollarValue = euro * oneEuroIs.USD;
    return dollarValue;

}

const fromDollarToYen = (dollar) => {
    let yenValue = (dollar * oneEuroIs.JPY) / oneEuroIs.USD;
    return yenValue;

}

const fromYenToPound = (yen) => {
    let poundValue = (yen * oneEuroIs.GBP) / oneEuroIs.JPY;
    return poundValue;

}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}