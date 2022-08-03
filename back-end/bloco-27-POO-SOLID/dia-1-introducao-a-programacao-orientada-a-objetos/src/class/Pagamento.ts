import IPrestacao from '../interfaces/IPrestacao';
import Conta from './Conta';


class Pagamento {
  // atributos - todos serão privados
  private _conta: Conta;
  private _valor: number;
  private _tipo: string;
  private _vencimento: Date;
  private _descricao: string;
  private _multa: number;
  private _prestacao: IPrestacao[]; // tipo interface - (array)
  // passo no contructor apenas atributos q desejo setar 
  constructor(conta: Conta, valor: number, tipo: string, vencimento: Date, descricao?: string, multa?: number) {
    // não preciso passar/inicializar todos, se não quiser

    this._conta = conta;
    this._valor = valor;
    this._tipo = tipo;
    this._vencimento = vencimento;
    this._descricao = descricao || ''; // iniciei ela com valor fixo
    this._multa = multa || 0.2; // iniciei ela com valor fixo
    this._prestacao = [];

  }
  
  public set valor(v : number) {
    this._valor = v;
  }

  public get valor() : number {
    return this._valor
  }
  public set tipo(t: string) {
    this._tipo = t;
  }

  public get tipo(): string {
    return this._tipo;
  }

  public set vencimento(venci: Date) {
    this._vencimento = venci;
  }

  public get vencimento(): Date {
    return this._vencimento;
  }

  public set descricao(desc: string) {
    this._descricao = desc
  }

  public get descricao(): string {
    return this._descricao;
  }

  public set multa(m: number) {
    this._multa = m;
  }
  
  public get multa(): number {
    return this._multa;
  }

  public set prestacao(p: IPrestacao[]) {
    if (p.length > 10) {
      throw new Error("Maximo parcelamento em 10x");
      
    }
    this._prestacao = p;
  }

  public get prestacao(): IPrestacao[] {
    return this._prestacao;
  }

  public get Conta(): Conta {
    return this._conta
  }

  public pagar() {
    // método tipo com GET
    switch (this.tipo) {
      case 'boleto':
        this.pagarBoleto();
        break;
      case 'cartão':
        this.pagarCartao();
        break;
      case 'pix':
        this.pagarPIX();
        break;
      default:
        throw new Error("Método de pagamento não aceito/conhecido!");
        
    }
  }
  private estaVencido(): boolean {
    return isBefore(this.vencimento, new Date());
    // isBefore 
  }

  private pagarBoleto() {
    console.log('Boleto');
  if (this.estaVencido()) {
    this.valor = this.valor + (this.valor * this.multa)
  }
  this.Conta.debido(this.valor);
  }

}

export default Pagamento;
