function main(){
  console.log('main!');
  const HyfReposHttps = 'https://api.github.com/orgs/HackYourFuture/repos';
  getApiResponse(HyfReposHttps, xhrCallback);
}


// Function that makes an server request (API call)
function getApiResponse(theUrl, callback)
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
      showLoading(false);
      callback(xmlHttp.responseText);
    }
  }
  
  xmlHttp.open("GET", theUrl, true); // true for asynchronous 

  showLoading(true);
  xmlHttp.send(null);
}


// Callback that handles response from server
function xhrCallback(data){
  dataInJson = JSON.parse(data);
  addSelectElementOptions(dataInJson);
  checkSelectChanging(dataInJson);
}

// Add options to select element
function addSelectElementOptions(arr){
  let selectElement = document.getElementById("repositories");
  arr.forEach(rep => {
    let option = document.createElement('option');
    option.text = rep.name;
    option.value = rep.id;
    selectElement.appendChild(option);
  });
}

//Function that works if select element change
function checkSelectChanging (arr) {
  let selectElement = document.getElementById("repositories");
  selectElement.addEventListener("change", function(){
    const selectValue = selectElement.value;
    renderRepositoryInfo(arr, selectValue);
    const repo = arr.filter(repo => repo.id == selectValue)[0];
    const repoContributersUrl = repo.contributors_url;
    getApiResponse(repoContributersUrl, renderRepositoryContributers);
  });
}

function renderRepositoryInfo(arr, value){
  let repo = arr.filter(repo => repo.id == value)[0];
  const repositoryInfo = document.querySelector('#repo_info');
  repositoryInfo.innerHTML =``;
  repositoryInfo.innerHTML =`<strong>Repository  </strong><span>${repo.name}</span><br>
                             <strong>Description  </strong><span>${repo.description}</span><br>
                             <strong>Forks  </strong><span>${repo.forks}</span><br>
                             <strong>Updated  </strong><span>${repo.updated_at}</span><br>`;
}

function renderRepositoryContributers(response){
  const contributers = JSON.parse(response);
  const repoContributers = document.querySelector('#repo_contributors');
  repoContributers.innerHTML =``;
  contributers.forEach(function(item){
    repoContributers.innerHTML += `<div class="row">
                                   <div class="col-xs-6"><h3>${item.login}</h3></div>
                                   <div class="col-xs-6"><img src=${item.avatar_url}></div>
                                   </div>`;
  });
}

function showLoading(option) {
  const loadingIcon = document.querySelector('#loading-icon');
  if (option) {
    loadingIcon.innerHTML = `<h1>Loading</h1>`;
  }else {
    loadingIcon.innerHTML = ``;
  }
  
}