// Write a program that takes a birth date as input and returns the age in days.
// Sample Input:   const birthDate = new Date('1995-10-15');
// Sample Output: 9853 days

function calculateAgeInDays(birthDate) {
  const currentDate = new Date();
  const millisecondsInADay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const ageInMilliseconds = currentDate - birthDate;
  const ageInDays = Math.floor(ageInMilliseconds / millisecondsInADay);
  return ageInDays;
}

const birthDate = new Date("1995-10-15");
const ageInDays = calculateAgeInDays(birthDate);
console.log(ageInDays + " days");

// Write a program that takes two times (in 24-hour format) as input and returns the time difference in hours and minutes.
// Sample Input:   const time1 = "08:30";
//                 const time2 = "13:45";
// Sample Output: 5 hours and 15 minutes

function calculateTimeDifference(time1, time2) {
  const [hours1, minutes1] = time1.split(":").map(Number);
  const [hours2, minutes2] = time2.split(":").map(Number);

  const totalMinutes1 = hours1 * 60 + minutes1;
  const totalMinutes2 = hours2 * 60 + minutes2;

  const timeDifferenceInMinutes = Math.abs(totalMinutes2 - totalMinutes1);
  const hours = Math.floor(timeDifferenceInMinutes / 60);
  const minutes = timeDifferenceInMinutes % 60;

  return { hours, minutes };
}

const time1 = "08:30";
const time2 = "13:45";
const result = calculateTimeDifference(time1, time2);

console.log(`${result.hours} hours and ${result.minutes} minutes`);

// Write a program that takes a date and a number of days as input and returns a new date after adding the specified number of days.
// Sample Input:   const date = new Date('2023-07-10');
//                 const daysToAdd = 5;
// Sample Output: "2023-07-15"

function addDaysToDate(inputDate, daysToAdd) {
  const newDate = new Date(inputDate);
  newDate.setDate(inputDate.getDate() + daysToAdd);
  return newDate;
}

const date = new Date("2023-07-10");
const daysToAdd = 5;
const resultDate = addDaysToDate(date, daysToAdd);

const year = resultDate.getFullYear();
const month = String(resultDate.getMonth() + 1).padStart(2, "0");
const day = String(resultDate.getDate()).padStart(2, "0");

const formattedResultDate = `${year}-${month}-${day}`;
console.log(formattedResultDate);

// Write a program that takes an object and converts it into a query string.
// Sample Input:  const obj = { name: "John", age: 30, city: "New York" };
// Sample Output: "name=John&age=30&city=New%20York"

function objectToQueryString(obj) {
  const queryString = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const encodedKey = encodeURIComponent(key);
      const encodedValue = encodeURIComponent(obj[key]);
      queryString.push(`${encodedKey}=${encodedValue}`);
    }
  }
  return queryString.join("&");
}

const obj = { name: "John", age: 30, city: "New York" };
const queryString = objectToQueryString(obj);
console.log(queryString);

// Write a program that takes a nested object containing numeric values and returns the sum of all values.
// Sample Input:  const obj = {
//   a: 1,
//   b: 2,
//   c: { d: 3, e: { f: 4 } }
// };
// Sample Output: 10

function sumNestedObjectValues(obj) {
  let sum = 0;

  for (const key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
    } else if (typeof obj[key] === "object") {
      sum += sumNestedObjectValues(obj[key]); // Recursively sum nested object values
    }
  }

  return sum;
}

const obj1 = {
  a: 1,
  b: 2,
  c: { d: 3, e: { f: 4 } },
};

const output = sumNestedObjectValues(obj1);
console.log(result);

// Write a program that takes a string and finds the length of the longest substring without repeating characters.
// Sample Input:  const str = "abcabcbb";
// Sample Output: 3

function lengthOfLongestSubstring(s) {
  const n = s.length;
  const charSet = new Set();
  let maxLength = 0;
  let left = 0; // Left pointer of the sliding window

  for (let right = 0; right < n; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

const str = "abcabcbb";
const result1 = lengthOfLongestSubstring(str);
console.log(result1);

//   Write a program that takes an array of strings and groups anagrams together.
//   Sample Input:  const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
//   Sample Output:  [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

function groupAnagrams(arr) {
  const anagramMap = new Map();

  for (const word of arr) {
    const sortedWord = word.split("").sort().join("");

    if (!anagramMap.has(sortedWord)) {
      anagramMap.set(sortedWord, []);
    }

    anagramMap.get(sortedWord).push(word);
  }

  return Array.from(anagramMap.values());
}

const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result2 = groupAnagrams(arr);
console.log(result2);
