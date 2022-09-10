// regular function:
printObj('div');
function printObj(fname){ // parameter
    let obj = {
        name: fname // divyansh
    }
    console.log(obj.name);
} 

printObj('divyansh'); // arguments
 // arguments

 

 let t = 10;
 console.log(t);

 function add(x=0,y=0){
    // let res = x + y;
    return x+ y; // single value 
    // console.log(res);
 }

 console.log(add(2));

//  functional scope (local scope:)
var x = 10;
function some(){
    
var y=20;
    return x+y;
}

console.log(some()) // 30
console.log(y) // 20
y = 30;

console.log(some()) // 40
