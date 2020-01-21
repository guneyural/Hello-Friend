function sayHi(name){
    if(typeof name === 'number') throw 'I only say hi to strings'
    if(!name.length > 0) throw 'Person should have a name'
    console.log(`Hello ${name}`);
}

module.exports = sayHi;