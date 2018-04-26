var bookNames = 
                ["harry_potter_chamber_secrets",
                "effective_java",//Joshua Bloch
                "the_ruby_programming_language",//Yukihiro Matsumoto
                "fifty_shades_of_grey",//E. L. James
                "html_quickStart_guide",//ClydeBank Technology
                "design_patterns_elements_of_reusable_object_oriented_software",// Erich Gamma
                "mastering_node_js_second_edition",//Sandro Pasquali
                "sql_quickStart_guide",//ClydeBank Technology
                "the_road_to_learn_react",//Robin Wieruch
                "bootstrap_4_quick_start"//Jacob Lett
                ];

// write books id on HTML from an array
function createUl(arr){
  var ul = document.createElement('ul');
  document.body.appendChild(ul)
  for (let i=0; i<arr.length; i++){
    var li = document.createElement('li');
    li.setAttribute('id', i);
    li.innerHTML = arr[i];
    ul.appendChild(li);
  }
}
//createUl(bookNames);

// books object
var books = {
  harry_potter_chamber_secrets:
    {
      title: "Harry Potter's - The Chamber of Secrets " ,
      language: "english",
      author: "J. K. Rowling"
    },

  effective_java: 
    {
      title: "Effective Java " ,
      language: "english",
      author: "Joshua Bloch"
    },

  the_ruby_programming_language:
    {
      title: "The Ruby programming language" ,
      language: "english",
      author: "Yukihiro Matsumoto"
    },

  fifty_shades_of_grey:
    {
      title: "Fifty shades of grey" ,
      language: "english",
      author: "E. L. James"
    },

  html_quickStart_guide:
    {
      title: "HTML quick start quide" ,
      language: "english",
      author: "ClydeBank Technology"
    },

  design_patterns_elements_of_reusable_object_oriented_software:
    {
      title: "Design patterns elements of reusable object oriented software" ,
      language: "english",
      author: "Erich Gamma"
    },

  mastering_node_js_second_edition:
    {
      title: "Mastering Node.js second edition" ,
      language: "english",
      author: "Sandro Pasquali"
    },

  sql_quickStart_guide:
    {
      title: "SQL quick start guide" ,
      language: "english",
      author: "ClydeBank Technology"
    },

  the_road_to_learn_react:
    {
      title: "The road to learn React" ,
      language: "english",
      author: "Robin Wieruch"
    },

    bootstrap_4_quick_start:
    {
      title: "Bootstrap 4 quick start" ,
      language: "english",
      author: "Jacob Lett"
    }
};

// write books object on HTML
function viewBooks(obj) {
  var booksUl = document.createElement('ul');
  document.body.appendChild(booksUl)
    for (let i=0; i<Object.keys(obj).length; i++){
      var book_li = document.createElement('li');
      book_li.setAttribute('id', Object.keys(obj)[i]);
      booksUl.appendChild(book_li);

      var title = document.createElement('h1');
      title.innerHTML = obj[Object.keys(obj)[i]].title;

      var language = document.createElement('h2');
      language.innerHTML = obj[Object.keys(obj)[i]].language;

      var author = document.createElement('h2');
      author.innerHTML = obj[Object.keys(obj)[i]].author;
      book_li.appendChild(title);
      book_li.appendChild(language);
      book_li.appendChild(author);
    }
}

//viewBooks(books);

//images object
var booksCover = {
  harry_potter_chamber_secrets: "./images/harry_potter.jpg",
  effective_java: "./images/effective_java.jpg",
  the_ruby_programming_language: "./images/the_ruby_programming_language.jpg",
  fifty_shades_of_grey: "./images/fifty_shades.jpg",
  html_quickStart_guide: "./images/html_quick_start_guide.jpg",
  design_patterns_elements_of_reusable_object_oriented_software: "./images/design_pattern.jpg",
  mastering_node_js_second_edition: "./images/mastering_node_js.jpg",
  sql_quickStart_guide: "./images/sql_quick_guide.jpg",
  the_road_to_learn_react: "./images/the_road_to_react.jpg",
  bootstrap_4_quick_start: "./images/bootstrap_quick_start.jpg"
};


//To view book imgage at the corresponding li
function viewImages(obj){
  console.log("calling viewImages function ");
  console.log(obj);
  for (let i=0; i<Object.keys(obj).length; i++){
    var li = document.getElementById(Object.keys(obj)[i]);
    var img = document.createElement('img');
    var key = Object.keys(obj)[i];
    img.setAttribute("src", obj[key]);
    img.setAttribute("alt", "books cover");
    li.appendChild(img);
  }
}

//viewImages(images);