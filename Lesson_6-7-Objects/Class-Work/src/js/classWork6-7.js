//Example 1: 
//debugger;
globalVariable = 1000;

let ternarnyOperator = globalVariable ? globalVariable : 200;

console.log(ternarnyOperator);

document.querySelector('.contentResult').innerHTML = ternarnyOperator;

//Example 2: Objects

const iphone = {
    color: "black",
    width: 20, 
    height: 40,
    weght: 800,
    camera: {
        count: 3,
        model: "t100-samsung",
        countPixels: 1000
    }
}

console.table(iphone.color);