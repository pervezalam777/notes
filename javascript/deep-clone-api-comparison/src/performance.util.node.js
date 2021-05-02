"use strict"
import { performance, PerformanceObserver } from "perf_hooks";
const perfObserver = new PerformanceObserver((items) => {
  items.getEntries().forEach((entry) => {
    storeTimeTaken(entry.name, entry.duration);
  })
})
perfObserver.observe({ entryTypes: ["measure"], buffer: true })


const averageTime = {};
function testFunctionTime(context, fun, ...arg) {
  let cntxt = context ? context : null;
  performance.mark(fun.name+"_start")
  let output = fun.apply(cntxt, arg);
  performance.mark(fun.name+"_end");
  performance.measure(fun.name, fun.name+"_start", fun.name+"_end");
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
  const fastestEntry = [entries[0][0], average(entries[0][1])];
  entries.forEach(entry => {
    let avg = average(entry[1]);
    if(fastestEntry[1] > avg) {
      fastestEntry[0] = entry[0];
      fastestEntry[1] = avg;
    }
    console.log(`${entry[0]} average time in millsecons ${avg}`);
  });
  console.log('--------------------------------------------');
  console.log(`Fastest is: ${fastestEntry[0]} average time in millsecons ${fastestEntry[1]}`);
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
