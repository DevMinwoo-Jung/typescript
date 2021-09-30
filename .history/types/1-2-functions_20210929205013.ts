{

  // //Javascript shit!
  // function jsAdd(num1, num2){
  //   return num1 + num2;
  // }

  // // TypeScript
  // function add(num1:number, num2:number): number{
  //   return num1+ num2;
  // }

  // function jsFetchNum(id:string): Promise<number>{
  //   //code ...
  //   //code ...
  //   //code ...
  //   return new Promise((resolve, reject):void => {
  //     resolve(100);
  //   });
  // }

  // Optional parameter
  function printName(firstName: string, lastName?: string){
    console.log(firstName);
    console.log(lastName);
  }

  printName('Steve','minwoo');
  printName('Ellie');
  printName('Ellie', undefined);
}