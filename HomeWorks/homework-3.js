// 1 // ---------------
let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "capacity": 5
  },
  {
    "color": "red",
    "type": "cabrio",
    "capacity": 2
  }
];

// Write a function that will get objects from above array as arguments and check
// if capacity <= 2, will return 'Small, otherwise will return 'Large'
// Call function 3 times with each objects
function myCars(capacity){
    if (capacity <= 2) {
        return 'Small';
    } else {
        return 'Large';
    }
      };
    //   console.log(myCars(cars[0].capacity));
    //   console.log(myCars(cars[1].capacity));
    //   console.log(myCars(cars[2].capacity));

    // 2 // ---------
      // Write a function that will get 2 arguments as numbers and return which one is begginer
      function begginerNum(a, b){
        if( a > b){
            return a;
        } else if(a < b){
            return b;
        } else {
            return 'there are equal';
        }
      };
    //   console.log(begginerNum(9, 11));


// 3 // ------------------

// Write a function that will get the objects from person as an argument, check if gender is male or female,
// if the gender is female, return, 'I would like to know more about <firstname> <lastname>.'
// else, return '<firstname> <lastname> mast be a good man.'

persons = [
    {
      id: 325326,
      firstname: "Dan",
      lastname: "Tiger",
      image: "url",
      birthday: "03.18.1990",
      gender: "Male",
      hobbie: ["Football", "Reading"],
      nationality: "switzerland",
      friends: [325330, 325334],
      residence: 10041
    },
    {
      id: 325326,
      firstname: "Jannifer",
      lastname: "Lopez",
      image: "url",
      birthday: "03.18.2005",
      gender: "female",
      hobbie: ["Football", "Reading"],
      nationality: "switzerland",
      friends: [325330, 325334],
      residence: 10041
    },
    {
      id: 325330,
      firstname: "Frank",
      lastname: "Lion",
      image: "url",
      birthday: "10.05.1991",
      gender: "male",
      hobbie: ["walking", "basketball"],
      nationality: "syria",
      friends: ["", "", ""],
      residence: 10041
    }
  ];
  
  function maleOrFemail(person){
    if(person.gender === 'female'){
        return ('I would like to know more about ' + person.firstname + ' ' + person.lastname 
        + '.');
    } else {
        return (person.firstname + ' ' + person.lastname + ' mast be a good man.');
    }
  };
  console.log(maleOrFemail(persons[0]));
  console.log(maleOrFemail(persons[1]));
  console.log(maleOrFemail(persons[2]));