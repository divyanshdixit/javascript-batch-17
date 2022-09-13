// for 
// for in => objects
// for of => those object who can iteratable., used only to get the values not indexes
// foreach 


for(let i=0; i<5; i++){
console.log(i) // 0,4
}

// console.log(i); //

// for in:

var obj = {
    uname: 'unamek',
    pass: 'passk'
}

// ['uname', 'pass'] 
// ['unamek', 'passwk']
// [ ['uname', 'unamek'], ['pass', 'passwk'] ]

// obj.key
// obj[key]
var count = 0;
for(key in obj){
    count++;
    console.log(obj.hasOwnProperty('city'))
    console.log(key, obj[key])
}
console.log(count)

// for of: give the value but not index.
var arr = [1,2,3,4];
var str = 'divyansh';

for(j of arr){ // arr[1]
    console.log(j)
}

// forEach:
// all callback function are anonymus function:
// 
// array.forEach(callback)


// syntax: 

/*
array.forEach( function(item, index, array){
    // console.log(item, index)
    // no return value
});

*/

// ex:1
var total = 0;
var arr1 = [1,2,3,4];

arr1.forEach(function(item, index){
    console.log(index, item);
    total = total + item;
})

console.log(total)



// arr.forEach( () => {})
