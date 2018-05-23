//TODO: add function that return select element
function main(){
  console.log('main!');
  const HyfReposHttps = 'https://api.github.com/orgs/HackYourFuture/repos';
  getRepositories(HyfReposHttps, xhrCallback);
}


// Function that makes an server request (API call)
function getRepositories(theUrl, callback)
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
    }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous 
  xmlHttp.send(null);
}

// Callback that handles response from server
function xhrCallback(data){
  console.log('data obj from server', JSON.parse(data));
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
    console.log('select option is changed');
    renderRepositoryDetails(arr, selectElement);
  });
}

function renderRepositoryDetails(arr, element){
  let selectValue = element.value;
  let repo = arr.filter(repo => repo.id == selectValue)[0]
  const repositoryInfo = document.querySelector('#repo_info');
  repositoryInfo.innerHTML =`<label>Repository  </label><span>${repo.name}</span>`;
  console.log(repo.name);
}

// var row = document.createElement('tr');
//     row.innerHTML = `<td>${arr[i].id}</td>
//                      <td>${arr[i].name}</td>
//                      <td>${arr[i].education}</td>
//                      <td>${arr[i].city}</td>
//                      <td><img src=${arr[i].pic}></td>`;
//     table.appendChild(row);
//   }
//   document.body.appendChild(table)