class Superclass {
  public isSuper: boolean

  constructor() {
    this.isSuper = true
  }

  public sayHello():void {
    console.log('Olá mundo');
  }
}

class Subclass extends Superclass{

  constructor() {
    super();
    this.isSuper = false
  }

  // public function sayHello2(p:Superclass) {
  //   //... em classes, metodos não tem essa sintaxe
  // }

  public sayHello2() {
    this.sayHello();
  }
}

// tem que receber a classe
function myFunc(p: Superclass) {
  // p.sayHello2();
  p.sayHello();
}

// const novoObj = new Superclass();

const novoObjSub = new Subclass();

// myFunc(novoObj)
myFunc(novoObjSub)