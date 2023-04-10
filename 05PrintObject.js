console.log("Basic Challenge 05 : Create a function that print data from array of object input:");

function printData(data) {
    data.forEach((item, index) => {
      console.log(`${index+1}. Nama: ${item.name}, Usia: ${item.age}`);
    });
  }
  
const arrayData = [
    {
        name:"Xiu",
        age:21
    },
    {
        name:"Zena",
        age:21
    },
    {
        name:"Marty",
        age:20
    },
    {
        name:"Tyra",
        age:20
    },
];

printData(arrayData);
