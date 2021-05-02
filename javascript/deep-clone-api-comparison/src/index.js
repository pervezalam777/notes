import { cloneWithES6Spread, cloneWithJSONAPI, cloneWithLodash } from "./clone.js";
import { data } from "./data.js";
import {
  printAverageData,
  performanceTest,
  getData
} from "./performance.util.node.js";

performanceTest(cloneWithJSONAPI, data, 100);
performanceTest(cloneWithES6Spread, data, 100);
performanceTest(cloneWithLodash, data, 100);

printAverageData();

//console.log(getData());
