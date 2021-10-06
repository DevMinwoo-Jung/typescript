{
  class NetworkClient {
  tryConnect():void{
    throw new Error('no network!');
  }
}

class UserService {
  constructor(private clinet: NetworkClient) {}

  login(){
    this.clinet.tryConnect();
    // login....
  }
}

class App {
  constructor(private userService: UserService){}
  run(){
    try {
      this.userService.login();
    } catch(error){
      // show dialog to user
      console.log(`error catched!! ${error}`);
    }
  };
}

/**
 * 에러를 어디서 처리하는게 좋을까?? userService??
 * 에러가 생기면 잡을수는 있지만 userService에서 하는 거라고는
 * netWorkClient를 dependeny Injection하는 것 밖에 없다
 * 그렇기 때문에 정확하게 처리할 수 없어 try catch를 남발하기 보다는
 * 실질적으로 app이 구동되는 곳 (이곳에서는 App = 왜냐하면 login이라는 동작하는 함수가 있기 때문에)에서 처리한다!
 */

const clinet = new NetworkClient();
const service = new UserService(clinet);
const app = new App(service);
app.run();
}