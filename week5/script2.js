/* Step 2.2
    map, filter and =>

    This solution has a bug. Find it and fix it!!
 */

let monday = [
  {
    name: "Write a summary HTML/CSS",
    duration: 180
  },
  {
    name: "Some web development",
    duration: 120
  },
  {
    name: "Fix homework for class10",
    duration: 20
  },
  {
    name: "Talk to a lot of people",
    duration: 200
  }
];
let tuesday = [
  {
    name: "Keep writing summary",
    duration: 240
  },
  {
    name: "Some more web development",
    duration: 180
  },
  {
    name: "Staring out the window",
    duration: 10
  },
  {
    name: "Talk to a lot of people",
    duration: 200
  },
  {
    name: "Look at application assignments new students",
    duration: 40
  }
];
let tasks = monday.concat(tuesday);

function main() {
  showTasks("Duration as hours", durationToHours());
  showTasks("Short tasks removed", removeShortTasks()); //4
  console.log(`\n*** Total amount (reduce) \nEuro ${calculateCost_usingReduce("600").toFixed(2)}`); //11880 SEK     
  console.log(`\n*** Total amount (forEach) \nEuro ${calculateCost_usingForEach("600").toFixed(2)}`); //11880 SEK
}

main();

////////////////////////////////////////////////////////

function collectTwoDays() {
  console.log("I don't understand what to do here");
}

//https://stackoverflow.com/a/38242552/2650732
function getHours(minutes) {
  let h = Math.floor(minutes / 60);
  let m = minutes % 60;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;

  return `${h}:${m}`;
}

function durationToHours() {
  let convertedTasks = tasks.map(task => {
    task.duration = getHours(task.duration);

    return task;
  });

  return convertedTasks;
}

function showTasks(title, tasks) {
  console.log(`\n*** ${title}:`);
  
  tasks.forEach(task => {
    console.log(`${task.name}, ${task.duration}`);
  });
}

function removeShortTasks() {
  let longTasks = tasks.filter(task => {
    return task.duration >= 120;
  });

  return longTasks;
}

/**
 * Calculate the total cost using reduce
 *
 * @param {Number} chargePerHour The hourly charge in SEK
 */
function calculateCost_usingReduce(chargePerHour) {
  const totalMinutes = tasks.reduce((sum, currentValue) => {
    return sum + currentValue.duration;
  }, 0);

  const totalHours = (totalMinutes / 60).toFixed(1);

  return totalHours * chargePerHour;
}

/**
 * Calculate the total cost using for-each-loop
 *
 * @param {Number} chargePerHour The hourly charge in SEK
 */
function calculateCost_usingForEach(chargePerHour) {
  let totalMinutes = 0;

  tasks.forEach(task => {
    totalMinutes += task.duration;
  });

  const totalHours = (totalMinutes / 60).toFixed(1);

  return totalHours * chargePerHour;
}