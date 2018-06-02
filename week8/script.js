

// function fetchJSON(url){
//   //var xhr = new XMLHttpRequest();//XMLHttpRequest
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', url);
//   xhr.responseType = 'json';
//   xhr.onreadystatechange = function() { 
//   if (xhr.readyState == 4 && xhr.status == 200)
//     return xhr.response;
//   } 
//   xhr.send();
// }

//var value = fetchJSON('https://api.github.com/repos/HackYourFuture/React/contributors')

// var xmlHttp = new XMLHttpRequest();
//   xmlHttp.onreadystatechange = function() { 
//     if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//       callback(xmlHttp.responseText);
//     }
//   xmlHttp.open("GET", theUrl, true); // true for asynchronous 
//   xmlHttp.send(null);

function fetchJSON(theUrl){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      return xmlHttp.responseText;
    }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous 
  xmlHttp.send(null);
}

var x = fetchJSON('');