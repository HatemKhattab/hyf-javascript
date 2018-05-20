function main(){
  const HyfReposHttps = 'https://api.github.com/orgs/HackYourFuture/repos';
  getRepositories(HyfReposHttps, xhrCallback);
  //createSelectElement();
  console.log('main!');
  
}

// Callback that handles response from server
function xhrCallback(data){
  console.log('data from server', data);
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