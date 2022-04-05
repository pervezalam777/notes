const list = new Array(60000).join('1.1').split('.');

/**
 * NOTE: though it solves the problem but
 * it will keep the thread busy so nothing will happen
 * until the execution finish. 
 * check 'stackoverflow.problem-1-solution-3.js' of enhanced version of it.
 * 
 */
function removeItemsFromList() {
    while(list.length > 0) {
      const item = list.pop();
      console.log('item..',item)
    }
};
 
removeItemsFromList();