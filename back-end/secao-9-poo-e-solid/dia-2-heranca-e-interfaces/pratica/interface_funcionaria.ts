export default interface IFuncionaria {
  registro: string;
  salario: number;
  contratadaDate: Date;

  funcGenerate(): string;
}

const ttt: IFuncionaria = {
  registro: 'sdfljhsfadhsdfg',
  salario: 2.00,
  contratadaDate: new Date(),

  funcGenerate():string {
     return 'string'; 
  },
}