"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function sum(num1, num2) {
    return num1 + num2;
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    sum(Number(input1.value), Number(input2.value));
    console.log(sum(Number(input1.value), Number(input2.value)));
});
