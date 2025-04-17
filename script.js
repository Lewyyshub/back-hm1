// 1) დაითვალეთ დადებითი რიცხვები / შეკრიბეთ უარყოფითი რიცხვები:
// გაქვთ მასივი: const nums = [1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15], უნდა დააბრუნოს: [10, -65]

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

const posNums = nums.filter((num) => num > 0).length;
const negNums = nums
  .filter((num) => num < 0)
  .reduce((sum, num) => sum + num, 0);

const res = [posNums, negNums];
console.log(res);

// 2) აიღეთ რიცხვების მასივი, გაამრავლეთ ყველა ელემენტი 2 ზე, და შემდეგ გაფილტეთ ეს მასივი იმ რიცვებზე რომლებიც იყოფა 3ზე.

const numbers = [1, 2, 3, 4, 5];

const multiplyed = numbers.map((num) => num * 2);
const divisible = multiplyed.filter((num) => num % 3 === 0);

const results = [multiplyed, divisible];
console.log(results);

// 3) შექმენით ფუნცქცია რომელიც დააბრუნებს ბოლო ორი ყველაზე პარატა რიცხვის ჯამს: e.g:[19, 5, 42, 2, 77] => 7

const numbz = [19, 5, 42, 2, 77];

const smallnums = numbz.filter((num) => num < 6);
// console.log(smallnums);
const sum = smallnums.reduce((sum, num) => sum + num);
console.log(sum);

// 4)შექმენით ფუნცქია სადაც შეადარებთ ამ ორ მასივს ერთმანეთს და დააბრუნეთ ახალ მასივს ყველაზე დიდი რიცხვებით:
// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]

let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];

function LargeNums(arr1, arr2) {
  return arr1.map((num, i) => Math.max(num, arr2[i]));
}
console.log(LargeNums(arr1, arr2));

// 5)
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];
//   მოცემულ მასივზე გააკეთეთ შემდეგი ტასკები:
//   * Get an array of all names
//   *  Get an array of all first names
//   * დააჯგუფეთ თვალის ფერის მიხედვით, გამოიყენეთ რედიუსი და უნდა მიიღოთ შემდეგი შედეგი:
//   {blue: 2, brown: 1, yellow: 1}

const names = characters.map((nm) => nm.name);
console.log(names);

const onlyfirstname = characters.map((char) => char.name.split(" ")[0]);
console.log(onlyfirstname);
// 3??

// 6)
const movies = [
  { title: "Inception", year: 2010, rating: 8.8 },
  { title: "Interstellar", year: 2014, rating: 8.6 },
  { title: "Tenet", year: 2020, rating: 7.5 },
  { title: "Dunkirk", year: 2017, rating: 7.9 },
];
//   * გაფილტრეთ მარტო ისეთი ფილმები რომელთა რეიტინგიც არის 8ზე მეტი
//   * ამოიღეთ მხოლოდ სახელები
//   * დაალაგეთ ეს სახელები ანბანის მიხედვით

const ratings = movies.filter((rat) => rat.rating > 8);
console.log(ratings);

const movienames = movies.map((namez) => namez.title);
console.log(movienames);
// 3??

// 7)
const students = [
  { name: "Lia", scores: [90, 85, 100] },
  { name: "Tom", scores: [70, 60, 75] },
  { name: "Mia", scores: [88, 92, 95] },
];
//   * გამოიყენეთ map და reduce მეთოდები და დაუმატეთ თითეულ ობიექტს average ფილდი შემდეგ გაფილტრეთ და დააბრუნეთ მხოლოდ 85ზე მეტი ვისაც აქვს საშუალო ქულა ეგ სტუდენდები.

const updatedStudents = students
  .map((student) => {
    const avg =
      student.scores.reduce((sum, score) => sum + score, 0) /
      student.scores.length;
    return { ...student, average: avg };
  })
  .filter((student) => student.average > 85);

console.log(updatedStudents);
