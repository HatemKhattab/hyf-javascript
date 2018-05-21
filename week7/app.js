function main(){
  console.log('main!');
  const HyfReposHttps = 'https://api.github.com/orgs/HackYourFuture/repos';
  getRepositories(HyfReposHttps, xhrCallback);
  let selectElement = document.getElementById("repositories");
  selectElement.addEventListener("change", function(){
    console.log('select option is changed');
  });
}

// activities.addEventListener("change", function() {
//   if(activities.value == "addNew")
//   {
//       addActivityItem();
//   }
// });



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

//TODO: change functions name, make add options as a new function
// Callback that handles response from server
function xhrCallback(data){
  console.log('data obj from server', JSON.parse(data));
  dataInJson = JSON.parse(data);
  addSelectElementOptions(dataInJson);
}

// Add options to select element
function addSelectElementOptions(arr){
  let selectElement = document.getElementById("repositories");
  arr.forEach(rep => {
    let option = document.createElement('option');
    option.text = rep.name;
    option.value = rep.name;
    selectElement.appendChild(option);
  });
}