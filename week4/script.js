var students = [
  {
    id: "1",
    name: "David",
    education: "Art",
    city: "Växjö",
    pic: "./images/david.jpg"
  },

  {
    id: "2",
    name: "Per",
    education: "Business",
    city: "Götenborg",
    pic: "./images/per.jpg"
  },

  {
    id: "3",
    name: "Alex",
    education: "IT",
    city: "Stockholm",
    pic: "./images/alex.jpg"
  },

  {
    id: "4",
    name: "Annica",
    education: "Home Desig",
    city: "Uppsala",
    pic: "./images/annica.jpg"
  }

  
];

function createStudents(arr) {
  var table= document.createElement('table');
  var header = document.createElement('tr')
  //write the header row
  for(var key in arr[0]){
    console.log(key)
    header.innerHTML += `<th>${key.toUpperCase()}</th>`;
  }
  table.appendChild(header);
  for(let i=0; i<arr.length; i++){
    var row = document.createElement('tr');
    row.innerHTML = `<td>${arr[i].id}</td>
                     <td>${arr[i].name}</td>
                     <td>${arr[i].education}</td>
                     <td>${arr[i].city}</td>
                     <td><img src=${arr[i].pic}></td>`;
    table.appendChild(row);
  }
  document.body.appendChild(table)
}