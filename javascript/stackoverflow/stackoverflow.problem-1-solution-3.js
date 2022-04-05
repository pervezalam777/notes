// NOTE: to run in node env using 'global' but it should be 'windows' for web application
// The following is the polyfill of requestIdleCallback webAPI
global.requestIdleCallback = global.requestIdleCallback || function(handler) {
  let startTime = Date.now();

  return setTimeout(function() {
    handler({
      didTimeout: false,
      timeRemaining: function() {
        return Math.max(0, 50.0 - (Date.now() - startTime));
      }
    });
  }, 1);
}

const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList(deadline) {
  while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && list.length > 0) {
    let value = list.pop();
    console.log('value ', value)
  }

  if (list.length > 0) {
    taskHandle = requestIdleCallback(removeItemsFromList, { timeout: 1000} );
  } else {
    taskHandle = 0;
  }
};
 
requestIdleCallback(removeItemsFromList, { timeout: 1000} );