interface NomeDaInterface {
  propriedade1: string;
  propriedade2: number;
  propriedade3: boolean;
}


let exemplo: NomeDaInterface = {
  propriedade1: "valor tal",
  propriedade2: 576863284628,
  propriedade3: true
}

interface NovaIn extends NomeDaInterface {
  propriedade1: string;
  propriedade2: number;
  propriedade3: boolean;

  something: string;
  anotherThing: string;
  arrayN: string[];
  functionFn(): void;
}
