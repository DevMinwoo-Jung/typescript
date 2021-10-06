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
      if(error instanceof OfflineError){
        
      }
    }
  };
}
/**
 * error를 세분화하여 알리고 싶을때 아래와 같이 하면 될까??
 */
 class TimeoutError extends Error {}
 class OfflineError extends Error {}

const clinet = new NetworkClient();
const service = new UserService(clinet);
const app = new App(service);
app.run();
}