// Dates

// Basics
let d = new Date();
console.log(d);

// Year
console.log(`Year: ${d.getFullYear()}`);

// Month
console.log(`Month: ${d.getMonth() + 1} `);

// Date
console.log(`Date: ${d.getDate()} `);

// Day
console.log(`Day: ${d.getDay()} `);

// Hours
console.log(`Hours: ${d.getHours()} `);

// Minutes
console.log(`Minutes: ${d.getMinutes()} `);

// Seconds
console.log(`Seconds: ${d.getSeconds()} `);

// Month - Switch Case
let month = "";
switch (d.getMonth() + 1) {
  case 1:
    month = "January";
    break;
  case 2:
    month = "February";
    break;
  case 3:
    month = "March";
    break;
  case 4:
    month = "April";
    break;
  case 5:
    month = "May";
    break;
  case 6:
    month = "June";
    break;
  case 7:
    month = "July";
    break;
  case 8:
    month = "August";
    break;
  case 9:
    month = "September";
    break;
  case 10:
    month = "October";
    break;
  case 11:
    month = "November";
    break;
  case 12:
    month = "December";
    break;
}

// Day - Switch Case
let day = "";
switch (d.getDay()) {
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  case 7:
    day = "Sunday";
    break;
}

console.log(
  `Today is year ${d.getUTCFullYear()} Month of ${month} and date is ${d.getDate()} which is ${day}`
);
