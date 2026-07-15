// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
// console.log(globalVar); // Output: "I'm a global variable"
// console.log(globalLet); // Output: "I'm also global, but scoped with let"
// console.log(globalConst); // Output: "I'm a global constant"

// //Block Scope
// console.log(blockVar);
// console.log(blockLet);
// console.log(blockConst);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();
    
//console.log(functionLet); // Throws ReferenceError
//console.log(functionVar); // Throws ReferenceError
//console.log(functionConst); // Throws ReferenceError

{
    var var_name = "ali from var"
    let let_name = "ali from let"
    const const_name = "ali from const"

    console.log(var_name)
    console.log(let_name)
    console.log(const_name)
}

var var_name = "ali from var_2"
let let_name = "ali from let_2"
const const_name = "ali from const_2"

console.log(var_name)
console.log(let_name)
console.log(const_name)