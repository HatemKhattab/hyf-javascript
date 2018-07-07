//contains general functions that App use
class Util{

}

Util.fetchJSON = function(url){
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

Util.greeting = function(){
  console.log('Hello');
};

Util.addSelectElementOptions = function (arr){
  const selectElement = document.getElementById("repositories");
  arr.forEach(rep => {
    let option = document.createElement('option');
    option.text = rep.name;
    option.value = rep.id;
    selectElement.appendChild(option);
  });
}

Util.checkSelectChanging = function(arr) {
  try {
    const selectElement = document.getElementById("repositories");
    selectElement.addEventListener("change", async function(){
      const selectValue = selectElement.value;
      const selectedRepo = Util.renderRepositoryInfo(arr, selectValue);
      const repoContributersUrl = selectedRepo._data.contributors_url;
      const contributersList = await Util.fetchJSON(repoContributersUrl);
      Util.renderRepositoryContributers(contributersList);
    });
  }catch(err) {
    console.log(err);
  }
}

Util.renderRepositoryInfo = function(arr, value){
  const repoData = arr.filter(repo => repo.id == value)[0];
  const repository = new Repository(repoData);
  repository.render();
  return repository;
}

Util.renderRepositoryContributers = function(arr){
  const repoContributers = document.querySelector('#repo_contributors');
  repoContributers.innerHTML =``;
  arr.forEach(function(item){
  const contributer = new Contributer(item);
  contributer.render();
  });
}
