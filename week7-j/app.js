'use strict';

function main() {
    const button = document.getElementById('btn-go');
    button.addEventListener('click',() => fetchAndRender());

    const span = document.getElementById('counter');
    let counter = 0;
    setInterval(() => {
        counter += 1; 
        span.innerHTML = counter;
    }, 200);
}

function fetchAndRender() {
    const pre = document.getElementById('response');
    const prizeUrl = 'http://api.nobelprize.org/v1/prize.json?year=2017';
    var prizeData;
    fetchJSON(prizeUrl, (err, data) => { 
        if (err) {
            pre.innerHTML = err.message; 
        } else { 
            const firstPrize = data.prizes[0];
            const firstLaureate = firstPrize.laureates[0];
            const laureateUrl = 'http://api.nobelprize.org/v1/laureate.json?id=' + firstLaureate.id;
            fetchJSON(laureateUrl, (err, data) => { 
                if (err) {
                    pre.innerHTML = err.message; 
                } else { 
                    const result = { 
                        prize: firstPrize,
                        laureate: data.laureates[0]
                    };
                    pre.innerHTML = JSON.stringify(result,null,2);
                    console.log(result);
                }
            }); 
        };
    }); 

    
}

function fetchJSON(url, cb) { 
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url); // default is true for 3rd arg
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) { 
            if (xhr.status < 400) { 
                cb(null, xhr.response);
            } else {
                cb(new Error(xhr.statusText));
            }
        }
    };
    xhr.send();
}

window.onload = main(); 

