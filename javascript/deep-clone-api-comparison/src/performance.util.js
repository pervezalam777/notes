const averageTime = {};
function testFunctionTime(context, fun, ...arg) {
  let cntxt = context ? context : null;
  let t1 = performance.now();
  let output = fun.apply(cntxt, arg);
  let t2 = performance.now();
  let millseconds = t2 - t1;
  storeTimeTaken(fun.name, millseconds);
  return output;
}

export function wrraper(fun) {
  return function(...arg) {
    return testFunctionTime(this, fun, ...arg);
  };
}

function storeTimeTaken(funName, msTime) {
  let entry = averageTime[funName];
  if (entry) {
    entry.push(msTime);
  } else {
    averageTime[funName] = [msTime];
  }
}

export function printAverageData() {
  let entries = Object.entries(averageTime);
  entries.forEach(entry => {
    let avg = average(entry[1]);
    console.log(`${entry[0]} average time in millsecons ${avg}`);
  });
}

function average(arr) {
  let sum = arr.reduce((sum, val) => {
    return sum + val;
  }, 0);

  return sum / arr.length;
}

export function performanceTest(func, arg, runCount) {
  for (let i = 0; i < runCount; i++) {
    testFunctionTime(null, func, arg);
  }
}

export function getData() {
  return JSON.parse(JSON.stringify(averageTime));
}
