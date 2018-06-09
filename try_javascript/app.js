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

const url = 'http://api.nobelprize.org/v1/prize.json?year=2017';
const value = fetchJSON(url)
                        .then(data => viewData(data))
                        .catch(err => renderError(err));

function viewData(txt){
  console.log(txt);
}