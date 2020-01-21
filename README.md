# What Is Hello Friend?
Says hello to anyone [hello-friend](https://www.npmjs.com/package/hello-friend)
# How To Install It?
Run this command in your command line:
```bash
 $ npm install Hello-Friend
```
# How To Use It In Your Project?
For using Hello-Friend in your project:
```js
    const helloFriend = require('hello-friend');
    hello('John Doe'); // => Hello John Doe
```
When you pass a number to parameter: 
```js
    const helloFriend = require('hello-friend);
    hello(123); // => I only say hi to strings
```
Or if you pass nothing to parameter:
```js
    const helloFriend = require('hello-friend);
    hello(''); // => Person should have a name
    //-----------------------------------------
    hello(); // => Person should have a name
```
