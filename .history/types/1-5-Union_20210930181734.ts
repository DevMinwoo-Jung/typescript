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

  type SuccessState = {
    state: 'success',
    response: {
      body: string;
    };
  }

  type FailState = {
    state: 'fail',
    reason?: string;
  };

  type LoginState = SuccessState | FailState;


  function printLoginState(state: LoginState): void{
    switch(state.state){
      case "success":
        state.response.body = "로그인에 성공했슈!";
        return console.log(state.response.body);
      case "fail":
        state.reason = "잘못된 접근이유";
        return console.log(state.reason);
      }
  } 
  printLoginState({state:'success', response: {body: "아 이게 뭐냐고"}});
}

