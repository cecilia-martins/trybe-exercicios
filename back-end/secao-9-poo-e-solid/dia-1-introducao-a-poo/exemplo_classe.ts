class Person { // a classe
  // definição de atributos
  name: string; // nome do atributo e seu tipo
  height: number;
  weight: number;

  constructor(n: string, h: number, w: number) {
    console.log(`Creating person ${n}`);
    // iniciando atributos
    this.name = n; 
    this.height = h;
    this.weight = w;
  }
  // metodo dormir
  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
}

// criação dos objetos dessa classe
const p1 = new Person('Maria', 171, 58); // assim q usamos o new, o contructor é chamado
const p2 = new Person('João', 175, 66);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 66
Maria: zzzzzzz
João: zzzzzzz
*/

// class ttt {
//   // definição dos atributos
//   constructor(parameters) {
//   // inicialização dos atributos
//   }
// }