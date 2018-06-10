'use strict';

function main(){
  console.log('main function');
  const HyfReposHttps = 'https://api.github.com/orgs/HackYourFuture/repos';
  fetchJSON(HyfReposHttps)
    .then(data => xhrCallback(data))
    .catch(err => renderError(err));
}

function fetchJSON(url) {
  console.log('calling fetch json');
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status < 400) {
          resolve(xhr.response);
        } else {
          reject(new Error(xhr.statusText));
        }
      }
    };
    xhr.send();
  });
}

function renderError(err) {
  console.error(err.message);
}

function xhrCallback(data){
  console.log('calling xhrcallback');
  addSelectElementOptions(data);
  checkSelectChanging(data);
}

function addSelectElementOptions(arr){
  console.log('calling addSelectElementOptions');
  let selectElement = document.getElementById("repositories");
  arr.forEach(rep => {
    let option = document.createElement('option');
    option.text = rep.name;
    option.value = rep.id;
    selectElement.appendChild(option);
  });
}

function checkSelectChanging (arr) {
  console.log('calling checkSelectChanging');
  let selectElement = document.getElementById("repositories");
  selectElement.addEventListener("change", function(){
    const selectValue = selectElement.value;
    renderRepositoryInfo(arr, selectValue);
    const repo = arr.filter(repo => repo.id == selectValue)[0];
    const repoContributersUrl = repo.contributors_url;
    fetchJSON(repoContributersUrl)
      .then(data=> renderRepositoryContributers(data))
      .catch(err => renderError(err));
    });
}

function renderRepositoryInfo(arr, value){
  console.log('calling renderRepositoryInfo');
  let repo = arr.filter(repo => repo.id == value)[0];
  const repositoryInfo = document.querySelector('#repo_info');
  repositoryInfo.innerHTML =``;
  repositoryInfo.innerHTML =`<strong>Repository  </strong><span>${repo.name}</span><br>
                             <strong>Description  </strong><span>${repo.description}</span><br>
                             <strong>Forks  </strong><span>${repo.forks}</span><br>
                             <strong>Updated  </strong><span>${repo.updated_at}</span><br>`;
}

function renderRepositoryContributers(response){
  console.log('calling renderRepositoryContributers');
  const repoContributers = document.querySelector('#repo_contributors');
  repoContributers.innerHTML =``;
  response.forEach(function(item){
    repoContributers.innerHTML += `<div class="row">
                                   <div class="col-xs-6"><h3>${item.login}</h3></div>
                                   <div class="col-xs-6"><img src=${item.avatar_url}></div>
                                   </div>`;
  });
}
