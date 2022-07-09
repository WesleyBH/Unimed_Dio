// Como podemos melhorar esse código usando TS? 

enum Jobs {
    Actress,
    Dev
}

type Person = {
    name: string,
    age: number,
    job: Jobs
}

let person1: Person = {
    name: "Maria",
    age: 29,
    job: Jobs.Actress
}

let person2: Person = {
    name: "Roberto",
    age: 18,
    job: Jobs.Dev
}

let person3: Person = {
    name: "Laura",
    age: 32,
    job: Jobs.Actress
}

let person4: Person = {
    name: "Carlos",
    age: 25,
    job: Jobs.Dev
}