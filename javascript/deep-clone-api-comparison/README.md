# Deep clone api comparison
This API build to test deep cloning api or technique available with respect to performance.

## How to run
```bash
> npm install

> npm run start
```

## Results
After running different cloning api for 100 times each following are the results
```bash
# First iteration of cloning with 100 times function execution 
# cloneWithJSONAPI average time in millsecons 0.042000001994892955 
# cloneWithLodash average time in millsecons 0.19125000049825758 
# cloneWithES6Spread average time in millsecons 0.08140000165440142 

# Second iteration of cloning with 100 times function execution
# cloneWithJSONAPI average time in millsecons 0.024399998947046697 
# cloneWithLodash average time in millsecons 0.11079999792855233 
# cloneWithES6Spread average time in millsecons 0.08225000114180148 

# Third iteration of cloning with 100 times function execution
# cloneWithJSONAPI average time in millsecons 0.019550001015886664 
# cloneWithLodash average time in millsecons 0.16999999701511115 
# cloneWithES6Spread average time in millsecons 0.09355000162031502

``` 

## Codesandbox link
[deep clone comparison](https://codesandbox.io/s/keen-firefly-6h8nl)