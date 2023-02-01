console.log('hello world');

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
  ];

  

  console.log(languages);
  console.table(languages);
  document.write(languages+ `<br>`);

  function Sortierung(){
languages.sort();


    console.log(languages);
    console.table(languages);
    document.write(languages+ `<br>`);
  }


  Sortierung();

