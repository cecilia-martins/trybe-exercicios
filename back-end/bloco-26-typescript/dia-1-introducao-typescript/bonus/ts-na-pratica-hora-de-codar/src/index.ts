// const x = 10;
let x: number = 10 // string, boolean, number, etc...

// x = "teste" // o tipo string não pode ser atribuido ao tipo number
console.log(x);

// inferencia Vs annotation

let y = 12; // inferencia
let z: number = 12; // annotation

// tipos basicos

let firstName: string = "matheus";
let age: number = 25;
const isAdmin: boolean = true;

// String != string
console.log(typeof firstName);

// object
const myNUmbers: number[] = [1,2,3,4,5];

// tuplas 

let myTuple: [number, string, string[]];
myTuple = [11, 'agdf', ['asa', 'asad']];
//myTuple = [true, false, true];

// object literals -> {prop: value}

const user: {name: string, age: number} = {
  name: 'fulano',
  age: 47
};

// any
let a:any = 0;
a = true;
a = 67;
a = [];

// union type

let id: string | number = "10";

//type alias
type myIdType = number | string; 

// enum
enum Size {
  P = 'Pequeno',
  M = 'Médio',
  G = 'Grande'
};

const camisa = {
  name: 'Camisa gola V',
  size: Size.G
};

// literal types
let teste: "autenticado" | null;

teste = 'autenticado';
teste = null;

// funções
function nomeDaFuncao(a:number, b:number) { // preciso tipar os parametros 
  return a + b;
} 
function nomeDaFuncao2(a:number, b:number):number { // tipando o retorno da função
  return a + b;
} 
function nomeDaFuncao3(a:number, b:number):void { // tipando o retorno da função como nada/sem retorno = void:
  console.log('Função sem retorno');
}
// parametro opcional com ?
function greeting(name: string, greet?: string) {
  if (greet) {
    console.log(`Olá ${name}, ${greet}`);
  } else {
    console.log(`Olá ${name}`);
  }
}

// interface

interface nomeDaInterface {
  n1: number,
  n2: number,
}

function sumNumber(nums: nomeDaInterface) {
  return nums.n1 + nums.n2
}

// narrowing // checagem de tipos

// nerrowing de typeof

function nameOfFunction(exemplo: number | boolean) {
  if (typeof exemplo === 'number') {
    console.log('o tipo é number');
  } 
  return 'o tipo é boolean';
}

// Generics

function nomeDafunca<T>(arr: T[]) { // o T/U = tipo generico // deixando função generica para aceitar qualquer coisa
  // funcção recebe qualquer tipo de array
  
}

// CLASSES
class User {
 name
 role
 isAproved

 // declaro os tipos deles no contructor
 constructor(name: string, role: string, isAproved: boolean) {
   // por inferencia, tipamos os dados da classe
   this.name = name // fazer o this de cada um
   this.role = role
   this.isAproved = isAproved
 }
}

// herança


