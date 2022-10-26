//Question 1

function extractKey(anArrayOfObject, nameOfKey) {
  let result = anArrayOfObject.map(function (element) {
    return element[nameOfKey];
  });
  return result;
}

console.log(
  extractKey(
    [
      { name: "Elie", isInstructor: true },
      { name: "Tim", isInstructor: true },
      { name: "Matt", isInstructor: true },
    ],
    "name"
  )
);

//Question 2

function filterLetters(anArrayOfLetters, letter) {
  let result = anArrayOfLetters.filter(function (element) {
    return element.toLowerCase() === letter.toLowerCase();
  });
  return result.length;
}
console.log(filterLetters(["a", "a", "b", "c", "A"], "a"));
console.log(filterLetters(["a", "a", "b", "c", "A"], "z"));
console.log(filterLetters(["a", "a", "b", "c", "A"], "B"));

//Question 3

function printFirstAndLast(array) {
  let result = array.map(function (element) {
    console.log(element[0] + element[element.length - 1]);
  });
}
console.log(printFirstAndLast(["awesome", "example", "of", "forEach"]));

//Question 4

function valTimesIndex(arrayOfNumbers) {
  let result = arrayOfNumbers.map(function (element, index) {
    return element * index;
  });
  return result;
}
console.log(valTimesIndex([1, 2, 3])); // [0,2,6]
console.log(valTimesIndex([5, 10, 15])); // [0,10,30]

//Question 5

function addKeyAndValue(anArray, aKey, aValue) {
  let emptyArray = [];
  anArray.reduce((acc, initialValue) => {
    initialValue[aKey] = aValue;
    emptyArray.push(initialValue);
  }, {});
  return emptyArray;
}
console.log(
  addKeyAndValue(
    [{ name: "Joshua" }, { name: "Mark" }, { name: "Arthur" }],
    "isInstructor",
    true
  )
);

/////////////////////////////////////////////////////////////////////////////////////////////////////

let users = [
  {
    username: "larry",
    email: "larry@foo.com",
    yearsExperience: 22.1,
    favoriteLanguages: ["Perl", "Java", "C++"],
    favoriteEditor: "Vim",
    hobbies: ["Fishing", "Sailing", "Hiking"],
    hometown: {
      city: "San Francisco",
      state: "CA",
    },
  },
  {
    username: "jane",
    email: "jane@test.com",
    yearsExperience: 33.9,
    favoriteLanguages: ["Haskell", "Clojure", "PHP"],
    favoriteEditor: "Emacs",
    hobbies: ["Swimming", "Biking", "Hiking"],
    hometown: {
      city: "New York",
      state: "NY",
    },
  },
  {
    username: "sam",
    email: "sam@test.com",
    yearsExperience: 8.2,
    favoriteLanguages: ["JavaScript", "Ruby", "Python", "Go"],
    favoriteEditor: "Atom",
    hobbies: ["Golf", "Cooking", "Archery"],
    hometown: {
      city: "Fargo",
      state: "SD",
    },
  },
  {
    username: "anne",
    email: "anne@test.com",
    yearsExperience: 4,
    favoriteLanguages: ["C#", "C++", "F#"],
    favoriteEditor: "Visual Studio Code",
    hobbies: ["Tennis", "Biking", "Archery"],
    hometown: {
      city: "Albany",
      state: "NY",
    },
  },
  {
    username: "david",
    email: "david@test.com",
    yearsExperience: 12.5,
    favoriteLanguages: ["JavaScript", "C#", "Swift"],
    favoriteEditor: "VS Code",
    hobbies: ["Volunteering", "Biking", "Coding"],
    hometown: {
      city: "Los Angeles",
      state: "CA",
    },
  },
];

// Question 6

function printEmail(anArrayOfObject) {
  anArrayOfObject.map(function (element) {
    console.log(element["email"]);
  });
}
printEmail(users);

// Question 7

function printHobbies(anArrayOfObject) {
  anArrayOfObject.map(function (element) {
    element["hobbies"].map(function (element) {
      console.log(element);
    });
  });
}
printHobbies(users);

// Question 8

function findHometownByState(anArrayOfObject) {
  return anArrayOfObject.find((element) => {
    return element["hometown"]["state"] === "CA";
  });
}
console.log(findHometownByState(users));

// Question 9

function allLanguages(anArrayOfObject) {
  return anArrayOfObject.map(function (element) {
    return element.favoriteLanguages;
  });
}
console.log(allLanguages(users));

// Question 10

function allLanguages(anArrayOfObject) {
  let newArray = [];
  anArrayOfObject.map(function (element) {
    element.favoriteLanguages.map(function (element) {
      if (newArray.includes(element) === false) {
        newArray.push(element);
      }
    });
  });
  return newArray;
}
console.log(allLanguages(users));

// Question 11

function hasFavoriteEditor(anArrayOfObject, nameOfEditor) {
  return anArrayOfObject.some(function (element) {
    return element["favoriteEditor"] === nameOfEditor;
  });
}
console.log(hasFavoriteEditor(users, "VS Code"));

// Question 12

function findByUsername(anArrayOfObject, nameOfUser) {
  return anArrayOfObject.filter((element) => {
    return element["username"] === nameOfUser;
  });
}
console.log(findByUsername(users, "david"));

// Part 2

// Question 13

const vowels = ["a", "e", "i", "o", "u"];
function vowelCount(aString) {
  let newObject = {};
  for (let letter of aString) {
    if (vowels.includes(letter)) {
      if (newObject.hasOwnProperty(letter)) {
        newObject[letter] = newObject[letter] + 1;
      } else {
        newObject[letter] = 1;
      }
    }
  }
  return newObject;
}
console.log(vowelCount("awesome"));

// Question 14

function removeVowels(anotherString) {
  let newArray = [];
  for (let letter of anotherString) {
    if (!vowels.includes(letter)) {
      newArray.push(letter);
    }
  }
  return newArray;
}
console.log(removeVowels("amazing"));
