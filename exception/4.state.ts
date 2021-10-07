// {



// class NetworkClient {
//   tryConnect(): ResultState{}
  

// class UserService {
//   constructor(private clinet: NetworkClient) {}

//   login(){
//     this.clinet.tryConnect();
//     // login....
//   }
// }

// class App {
//   constructor(private userService: UserService){}
//   run(){
//     try {
//       this.userService.login();
//     } catch(error){
//       // show dialog to user
//       console.log(`error catched!! ${error}`);
//       if(error instanceof OfflineError){
        
//       }
//     }
//   };
// }
// /**
//  * error를 세분화하여 알리고 싶을때 아래와 같이 하면 될까??
//  * 아니다. 위처럼 instanceof를 사용해도 catch에서 any로 받기 때문에 instanceof를 사용할 수 없다!
//  * 그렇다면?? state를 쓰면 된다.
//  */
// class TimeoutError extends Error {}
// class OfflineError extends Error {}

// type NetworkErrorState = {
//   result: 'fail',
//   reason: 'offline' | 'serverDown' | 'timeout';
// };

// type SucceessState = {
//   result: 'success';
// }

// type ResultState = SucceessState | NetworkErrorState;


// const clinet = new NetworkClient();
// const service = new UserService(clinet);
// const app = new App(service);
// app.run();
// }