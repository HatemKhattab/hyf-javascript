class Repository {
  constructor(data){
    this._data = data;
  }

  render(){
    const repositoryInfo = document.querySelector('#repo_info');
    repositoryInfo.innerHTML =``;
    repositoryInfo.innerHTML =`<strong>Repository  </strong><span>${this._data.name}</span><br>
                               <strong>Description  </strong><span>${this._data.description}</span><br>
                               <strong>Forks  </strong><span>${this._data.forks}</span><br>
                               <strong>Updated  </strong><span>${this._data.updated_at}</span><br>`;
  }
}