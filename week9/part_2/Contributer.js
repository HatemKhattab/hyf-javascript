class Contributer {
  constructor(data){
    this._data = data;
  }

  render(){
    const repoContributers = document.querySelector('#repo_contributors');
    repoContributers.innerHTML += `<div class="row">
                                   <div class="col-xs-6"><h3>${this._data.login}</h3></div>
                                   <div class="col-xs-6"><img src=${this._data.avatar_url}></div>
                                   </div>`;
  }
}