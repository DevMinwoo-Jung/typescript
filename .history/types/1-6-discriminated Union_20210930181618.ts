{
  type SuccessState = {
    state: 'success',
    response: {
      body: string;
    };
  }

  type FailState = {
    state: 'fail',
    reason: string;
  };

  type LoginState = SuccessState | FailState;


  function printLoginState(state: LoginState): void{
    switch(state.state){
      case 'success':
        state.response.body = "로그인에 성공했슈!";
        return console.log(`${state.response.body}`);
      case 'fail':
        state.reason = "잘못된 접근이유";
        return console.log(`${state.reason}`);
      }
  } 
  printLoginState({state:'success', response: {body: "아 이게 뭐냐고"}});
}