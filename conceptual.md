### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

we used to use callbacks and then promises with .then but now we can use async and async await 

- What is a Promise?

 A promise is an object that may produce a single value some time in the future

- What are the differences between an async function and a regular function?

a regular function will only begin once the function before it has stopped. With an async function it can be operatign whilst another function is working. 

- What is the difference between Node.js and Express.js?

express.js is a framework for building web applications which was built on node 

node is for server side event handling 

- What is the error-first callback pattern?

Error-first callbacks are used to pass error and data. The first argument to these functions is an error object and the subsequent arguments represent associated data. So, you can check the first argument i.e the error object to see if something went wrong and may be handle it.

- What is middleware?
 
It is code that runs in the middle of the request / response cycle!

- What does the `next` function do?

If we do not include it, we will not make it to the next route!

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
