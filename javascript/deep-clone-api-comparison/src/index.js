import { cloneWithES6Spread, cloneWithJSONAPI, cloneWithLodash } from "./clone";
import { data } from "./data";
import {
  printAverageData,
  performanceTest,
  getData
  // wrraper
} from "./performance.util";

performanceTest(cloneWithJSONAPI, data, 100);
performanceTest(cloneWithLodash, data, 100);
performanceTest(cloneWithES6Spread, data, 100);

printAverageData();

console.log(getData());
