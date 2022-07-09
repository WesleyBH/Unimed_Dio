"use strict";
// Como podemos melhorar esse código usando TS? 
var Jobs;
(function (Jobs) {
    Jobs[Jobs["Actress"] = 0] = "Actress";
    Jobs[Jobs["Dev"] = 1] = "Dev";
})(Jobs || (Jobs = {}));
let person1 = {
    name: "Maria",
    age: 29,
    job: Jobs.Actress
};
let person2 = {
    name: "Roberto",
    age: 18,
    job: Jobs.Dev
};
let person3 = {
    name: "Laura",
    age: 32,
    job: Jobs.Actress
};
let person4 = {
    name: "Carlos",
    age: 25,
    job: Jobs.Dev
};
