export default class Person {

  constructor(
  private name: string,
  private birthday: Date    
  ) {
    this.name = name;
    this.birthday = birthday;    
  }

  public get getName(): string {
    return this.name;
  }

  
  public get getBithday() : Date {
    return  this.birthday;
  }

  
  public set setName(v : string) {
    if (v.length >= 3) {
      this.name = v;
    }
  }
  
  public set setBirthday(v : Date) {
    // if alguma coisa
    this.birthday = v;
  }

  //GABARITO
  // private validateBirthDate(value: Date): void {
  //   if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
  //   if (Person.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
  // }
}