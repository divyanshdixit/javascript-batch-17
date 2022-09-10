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

// for of:
var arr = [1,2,3,4];
var str = 'divyansh';

for(j of arr){ // arr[1]
    console.log(j)
}

// forEach: