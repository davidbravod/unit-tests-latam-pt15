// import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    //const { fromEuroToDollar } = require('./app.js') // la comento porque la estoy importando arriba junto con la otra funcion

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("Five dollars should be 532.916", function(){

    //const yenValue = fromDollarToYen(5)
    
    const expectedYen = (5 * 127.9) / 1.2;

    expect(fromDollarToYen(5)).toBe(expectedYen);
})

test("Twelve thousand five hundred yens should be 78.186", function(){

    //const poundValue = fromYenToPound(12500)
    
    const expectedPound = (12500 * 0.8) / 127.9;


    expect(fromYenToPound(12500)).toBe(expectedPound);
})