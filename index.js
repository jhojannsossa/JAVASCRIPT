console.log("hola mundo");
const codigoEncription = "Elefante"
const numberOfPi = 3.1415982;

console.log(codigoEncription);
console.log(numberOfPi);

let numberOfCar = 3;
let numberOfUser = 20;
console.log(numberOfCar);
console.log(numberOfUser);

let numberOfCoders = 500;
let numberOfRomm = 10;
let codersByRoom = numberOfCoders / numberOfRomm;
console.log("cantidad de coders por salas: " +codersByRoom);

/*calculo de volumen*/
/*triangulo*/
let base = 8.75;
let altura = 3.15;
const definida = 2;
let areatriangulo = (base * altura)/definida;
console.log("area de triangulo :" +areatriangulo);

/*area circulo*/
let radio = 12.6;
let areacirculo = radio*radio / numberOfPi;
console.log("area de circulo : " +areacirculo);


let numberOfStudent = 20; //integer
let priceOfProducs = 19.99; //float decimal
let numberOfDay; //undefined
let dayOfWeek = "Lunes"; //string

//buleanos falso y verdadero//
let boolean1 =true; //boolean
let boolean2 =false; //bolean

/*----------------------*/
/*arrays*/

let listOfCoders = ["sofia" , "juan" , "jonathan" , "jhojann"];
console.log(listOfCoders);

console.log(listOfCoders[3]);

console.log("ganador:" + listOfCoders[3]);
console.log("segundo:" +listOfCoders[2]);
console.log("tercero:" +listOfCoders[1]);
console.log("cuarto:" +listOfCoders[0]);

let agenda = [["sofia",1984 , "sevilla"] , ["juan", 1995, "mallorca"] , ["jonathan", 1974, "madrid"] , ["jhojann", 1994, "granada"] , ["jesus", 1988, "valencia"]];
console.log(agenda);

console.log(agenda[3][2]);

let resultRace = ["carlos" , "pedro" , "olivia", "jonathan" , "jhojann", "oscar", "julian","willam","pedro","elena"];

let sizeOfArraysResultRace = resultRace.length;
console.log("cantidad de corredores:" + sizeOfArraysResultRace);

for( let index = 0; index < resultRace.length ; index = index + 1){
    console.log((index + 1) +  ":" + resultRace[index]);
}

console.log("fin de la carrera");

for( let index = resultRace.length - 1; index >= 0 ; index = index - 1){
    console.log((index + 1) +  ":" + resultRace[index]);
}


function sumnumbers(number1,number2,number3){
    let result = number1 + number2 + number3;
    console.log("la suma de " + number1 + " + " + number2 + " + " + number3 + " es: " + result);
    return result;
}

let number1 = 12;
let number2 = 45;
let number3 = 18;

let sum = sumnumbers(number1,number2,number3);

number1 = 31;
number2 = 25;
number3 = 11;

sum = sumnumbers(number1,number2,number3);

number1 = 9;
number2 = 89;
number3 = 3;

sum = sumnumbers(number1,number2,number3);

number1 = 58;
number2 = 69;
number3 = 74;

sum = sumnumbers(number1,number2,number3);

numberA = 1896;
numberB = 1235;
numberC = 2489;

sum = sumnumbers(numberA,numberB,numberC);

function calculator(numberx,numbery){
    console.log("-------------------------------")
    let sum = numberx + numbery;
    let substraction = numberx - numbery;
    let multipliquetion = numberx * numbery;
    
    if (numbery === 0){
        console.log("no se puede dividir entre 0");
    }
    else {
    let divition = numberx / numbery;
    console.log("la division de " + numberx + " / " + numbery + " es:" + divition);
    }
    

    console.log("la suma de " + numberx + " + " + numbery + " es:" + sum);
    console.log("la resta de " + numberx + " - " + numbery + " es:" + substraction);
    console.log("la multiplicacion de " + numberx + " * " + numbery + " es:" + multipliquetion);
}

let numberjho = 42;
let numbermimi = 36;

calculator(numberjho,numbermimi);

let numbersex = 21;
let numberpas = 10;

calculator(numbersex,numberpas);

/* "=" asigna valor*/
/* "==" compara valores*/
/* "===" si es identico*/
/* tambien podria poner if (numbery !== 0){
let divition = numberx / numbery;
    console.log("la division de " + numberx + " / " + numbery + " es:" + divition);
}*/
