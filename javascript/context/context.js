// At the time of declaration of object property
// context is window or root but anonymous or named function 
// bind the context with the collar of the function
var container = {
  store:[],
  add: function (value) {
    this.store.push(value);
    console.log('container::add | success');
  }
}

//container bind its context reference to add function
// so in container it contains a property 'store'
container.add(10) // will work

// At the time of declaration of object property
// context is window or root so arrow function holds
// window/root reference in 'this'
var container_two = {
  store:[],
  add: value => {
    this.store.push(value);
    console.log('container_two::add | success');
  }
}

// container_two will not be able to override the context
// when function is an arrow function
container_two.add(10) // Cannot read property 'push' of undefined

// You can not bind the context via apply, call or bind method if function is arrow function
// container_two.add.apply(container_two, [10]); // Cannot read property 'push' of undefined
// container_two.add.call(container_two, [10]); // Cannot read property 'push' of undefined
// container_two.add.bind(container_two)(10); // Cannot read property 'push' of undefined