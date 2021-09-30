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
  // ?가 optional이다 그래서 함수 두번째에서 두번째 인자 없어도 ok
  function printName(firstName: string, lastName?: string){
    console.log(firstName);
    console.log(lastName);
  }

  printName('Steve','minwoo');
  printName('Ellie');
  printName('Ellie', undefined);

  // Default parameter
  function printMessage(message: string = 'hello I am Default'){
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...nums: number[]):number{
    let result:number = 0;
    for(let key of nums){
      console.log(nums);
    }
    return result;
  }

  console.log(addNumbers(1,2,3,4,5,6));
}