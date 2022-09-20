interface MyInterface {
  myNumber: number 
  myFunc(myParam: number):string 

}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {
    
  }
  // gabarito
  myFunc(myParam: number): string {
    /////////////////////////// não reconhece o myNumber
    return `myNumber + myParam: ${this.myNumber + myParam}`; // agr foi AAAAAAA
  }
}