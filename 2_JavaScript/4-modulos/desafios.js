const line = gets().split("")
const a = line[0];
const b = line[1];
const c = line[2];
const print = console.log

if (a + b == c || a + c == b || b + c == a || a == b || a == c || b == c) {
    print("S");
} else {
    print("N");
}

/* let x = "invertebrado";
let y = "mamifero";
let z = "onivoro";
let print = console.log

if ((x == "vertebrado") && (y == "ave") && (z == "carnivoro")) {
    print("aguia\n");
} else if ((x == "vertebrado") && (y == "ave") && (z == "onivoro")) {
    print("pomba\n");
} else if ((x == "vertebrado") && (y == "mamifero") && (z == "onivoro")) {
    print("homem\n");
} else if ((x == "vertebrado") && (y == "mamifero") && (z == "herbivoro")) {
    print("vaca\n");
}

if ((x == "invertebrado") && (y == "inseto") && (z == "hematofago")) {
    print("pulga\n");
} else if ((x == "invertebrado") && (y == "inseto") && (z == "herbivoro")) {
    print("lagarta\n");
} else if ((x == "invertebrado") && (y == "anelideo") && (z == "hematofago")) {
    print("sanguessuga\n");
} else if ((x == "invertebrado") && (y == "anelideo") && (z == "onivoro")) {
    print("minhoca\n");
} */


/* switch (DDD) {
    case 61: print("Brasilia"); break;
    case 71: print("Salvador"); break;
    case 11: print("Sao Paulo"); break;
    case 21: print("Rio de Janeiro"); break;
    case 32: print("Juiz de Fora"); break;
    case 19: print("Campinas"); break;
    case 27: print("Vitoria"); break;
    case 31: print("Belo Horizonte"); break;
    default: print("DDD nao cadastrado"); break;
} */