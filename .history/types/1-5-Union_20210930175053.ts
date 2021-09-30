{
  /**
   *  Union Types: OR
   *  발생하는 케이스가 여러가지일 때 하나만 정하고 싶을 때 쓴다..? 
   */

  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction){
    console.log(direction);
  }
  move('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  //function: login -> success, fail

  type SuccessState = {
    response: {
      body: string;
    };
  }

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  // function login(): LoginState {
  //   return {
  //     response: {
  //       body: 'logged in!',
  //     },
  //   };
  // }

  // printLoginState(state)
  // success -> body
  // fail -> reason

  function printLoginState(state: string){
    if(state === 'success'){
      let result = {response: {body: '로그인 성공!'}}
      return console.log(result);
    } else {
      return  {reason: '로그인 실패!'}}
    }
  
    printLoginState('success');
}