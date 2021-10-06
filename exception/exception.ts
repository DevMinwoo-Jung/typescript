{
  //Java는 Exception
  //Javascript는 Error
  
  // Error(Exception) Handling: try(코드진행) -> catch(에러 있다면 에러잡기) -> finally(에러가 있던없던 실행)

  function readFile(fileName: string):string{
    if(fileName === 'not exist!'){
      throw new Error(`file not exist! ${fileName}`);
    }
    return `file contnets`;
  }

  function closeFile(fileName: string){
    console.log(`Done`);
  }



function run(){

  const fileName = 'not exist!';
  try{
    console.log(readFile(fileName));
  } catch(error){
    console.log(`error`);
  } finally {
    closeFile(fileName);
    console.log(`closed!`);
  }
}

run();





function badrun(){

  const fileName = 'not exist!';
  try{
    console.log(readFile(fileName));
  } catch(error){
    console.log(`error`);
    return;
  } 
    closeFile(fileName);
    console.log(`closed!`);
}
  badrun();

}