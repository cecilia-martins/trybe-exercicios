class Person {
  name: string; // por padrão ta publica?
  // underscored é convensão
  private _weight: number;
  private _age: number;
  readonly height: number; // só poderá ser iniciada uma vez
  // passa pro constructor as obrigatorias
  constructor(name: string, height: number, weight: number, age: number) {
    this.name = name;
    this._weight = weight;
    this._age = age;
    this.height = height;
  }

// esta sintaxe permite acessar o valor retornado via person.getWeight()
  getWeight():number {
    return this._weight; // para ter acesso ao q está privado // lendo o valor de weight
  }

// esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
  get age():number {
    return this._age; // same here // lendo a idade
  }

// do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
// mesmo que esteja ocorrendo uma validação internamente
  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) { // 
      this._age = newValue; // aletrando a idade
    }
  }

  birthday() {
    this._age += 1; 
  }

}

const p1 = new Person('Maria', 171, 58, 19);
const p2 = new Person('João', 175, 66, 18);

// Alteração direta de variável pública
p1.name = 'Mariah'; // a unica que pode ser alterada por ser a unica publica?
