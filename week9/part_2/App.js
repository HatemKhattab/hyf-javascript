
class App {
  constructor(data){
    this._data = data;
  }

  start(){
  }

  greeting(){
    console.log('Greeting');
  }
}

window.onload = () =>{
  const HyfReposHttps = 'https://api.github.com/orgs/HackYourFuture/repos';
  const app = new App(HyfReposHttps);
  app.start();
}


  
