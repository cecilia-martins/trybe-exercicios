class Conta {
  // atributo
  private _saldo: number; // atributo privado

  constructor(saldo: number) {
    // saldo = atributo da classe Conta
    // saldo = parametro do contructor
    this._saldo = saldo; // iniciando o _saldo ali de cima
  }

  // metodo
  public debido (valor: number) {
    if (this._saldo < valor) {
      throw new Error('Saldo insuficiente!');
    }
    this._saldo = this._saldo - valor;
  }

  // get/set porque o atributo é privado
  set saldo (s: number) {
    this._saldo = s; // acessando intrnamente o atributo
  }
  get saldo(): number {
    return this._saldo;
  }
}

export default Conta;