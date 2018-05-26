//TODO: add function that return select element
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
    const selectValue = selectElement.value;
    renderRepositoryInfo(arr, selectValue);
    //TODO: renderRepositoryConributers(arr, selectValue);
    //bring contributers list

  });
}

function renderRepositoryInfo(arr, value){
  let repo = arr.filter(repo => repo.id == value)[0]
  const repositoryInfo = document.querySelector('#repo_info');
  repositoryInfo.innerHTML =`<label>Repository  </label><span>${repo.name}</span>
                             <label>Description  </label><span>${repo.description}</span>
                             <label>Forks  </label><span>${repo.forks}</span>
                             <label>Updated  </label><span>${repo.updated_at}</span>`;
}



// function fetchJSON(url, cb) { 
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', url); // default is true for 3rd arg
//   xhr.responseType = 'json';
//   xhr.onreadystatechange = () => {
//       if (xhr.readyState === 4) { 
//           if (xhr.status < 400) { 
//               cb(null, xhr.response);
//           } else {
//               cb(new Error(xhr.statusText));
//           }
//       }
//   };
//   xhr.send();
// }
