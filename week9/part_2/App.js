'use strict'
class App {
  constructor(url){
    this._reposUrl = url;
  }

  async start(){
    try {
      const repositories = await Util.fetchJSON(this._reposUrl);
      Util.addSelectElementOptions(repositories);
      Util.checkSelectChanging(repositories);
    }
    catch(error){
      console.log(error);
    }
  }

}

window.onload = () =>{
  const HyfReposHttps = 'https://api.github.com/orgs/HackYourFuture/repos';
  const app = new App(HyfReposHttps);
  app.start();
}


  
