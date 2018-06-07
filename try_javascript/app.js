function fetchJSON(url){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) { 
      if (xhr.status < 400) { 
        return (xhr.response);
      } else {
          console.log('failled') ;
      }
    }
  };
  xhr.send();
}



let value = fetchJSON('http://api.nobelprize.org/v1/prize.json?year=2017');
console.log(value);