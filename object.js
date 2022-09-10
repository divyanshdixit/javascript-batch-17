var name ="div";
var city = 'noida';

// property and methods(functions)
var obj = {
    name:'div', //  key : value
    city:'noida',
} // object literals

console.log(obj);

// access to the props:

// obj['name'] => read only 
// obj.name => read and write , adding new props:

console.log(obj.city)

// change the value of props:

obj.name = 'divyansh'
console.log(obj)

// adding new prop:
obj.age = 25
console.log(obj)

var obj3 = {
    age: 30,
    name:'ddd',
    getAge: function(){ // Anonyums 
        console.log('my name is ' + this.name + ' and my age is ' + this.age) // this refere to the parent object
    }
}

console.log(obj3.getAge())

obj3.getName = function(){
    console.log(this.name)
}

console.log(obj3.getAge(), obj3.getName())


// duplication of object:

var x = 10;
console.log(x); // 10

var y;
y = x;
console.log(y); // 10

y = 30;
console.log(x); // 10

// 
var obj4 = { // reference
    x:20
}

var obj5 = obj4; // 
console.log(obj5); // 

obj5.x = 30;
console.log(obj4); // {x:30}

// never copy of object

// JSON.stringify(JSON.parse())

delete obj3.name;
console.log(obj3);
