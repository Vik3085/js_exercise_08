function calculateAverageAge(persons) {
  let allAges = [];
    for (i=0; i<persons.length; i++) {
      allAges.push(persons[i].age);
    }
    let somma = allAges.reduce ((sum, current) => sum + current, 0);
    let media = somma / persons.length;
    return media;
  }

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const averageAge = calculateAverageAge(persons);
console.log(persons);
console.log(averageAge);