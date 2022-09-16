// 1 - length => props. (str.length)

// 2- find a string in a string:
// indexOf(), lastIndexOf(), search()


// indexing:

var x = "D I V Y A N S H" // 8, 7

// last index  = length - 1;

// x.indexOf('what you want to search', where do you want to start (position(optional parameter)) => find the index of first occurance of given text.

// if given text in string is not found return -1.

var str = " return quick quick quick  the brown box fox jumps over the lazy dog ";

console.log(str.indexOf('quick'))
console.log(str.indexOf('quick', 40))


// lastIndexOf('parameter', position(where to start)) => find the index of last occurance of given text in a string.
// "this is a string"
console.log(str.lastIndexOf('quick'));
console.log(str.lastIndexOf('dog', 7))
console.log(str.lastIndexOf('quick', 3))
console.log(str.lastIndexOf('quick', 14))

// regular expression: pattern
// "devilme96#"
// ([A-Z]{1,}[a-z]{1,}[0-9]{1,}(@#$%^&*))

// search(\pattern\) => same as indexOf() // recives either pattern or word
search(/Divyansh/)
// differenc in search and indexof()

// indexOf() can't recv pattern 
// search() can't take second argument

// /^b(a-z)n$/
// [a-z]
console.log(str.search('brown'))
console.log(str.search(/(b?)[a-z]{1,}[n]/))


// 3 - extract string part from a string:

// slice(start,end), substring(start, end), substr(start, length)

// slice(start, end)=> 

// return the extracted part as new string.
// starting index , ending index => if not included then extreact whole string
// ending  index will be end index - 1, if ending index is 3 , it'll extract till 2nd index 
// it can take -ve aurguments 

var whole = 'get a part of string';

console.log(whole.slice(0,3)) // start < end

// -ve arguments

console.log(whole.slice(-6,-1)) // -12, -6

console.log(whole.slice(-3));


// substring(start, end)

// it's similar to slice, but it cannt take -ve arguments


// substr(start, length):
// it's similar to slice, second parameter represent the length of the extracted part:
// if first param is -ve , coutn start from end of the string.

console.log(whole.substr(0, 1))
console.log(whole.substr(-8, 5))
var newString = whole.substr(-8, 5);
console.log(newString, whole)

// Replacing the string content:

// replace("replace this", "replace with")
// replace only first match by default,
// case senstive
// it can take reg ex (regular expression) pattern also.

var before = "Before replace before";
console.log(before.replace(/before/ig, "After"))


//  Convert string to upper or lower case:

console.log(before.toUpperCase(), before)

// convert all to lower case
console.log(before.toUpperCase().toLowerCase())

// "asdas" + "sadas"

// add two or more stings in one :
// concat('one', 'second', ....)
var first = "first";
console.log(first.concat('second'), ''.concat('asdas', 'adsasd'));


// trim(): remove white spaces before/after the string.
// trimStart(), trimEnd(), trimLeft(), trimRight()

var or = "             Divyansh       Dixit                 ";
console.log(or.trim())


// extracting string chars:

// charAt(position) => return char at given index
// return empty string if index is not found 

// charCodeAt(position) => return the unicode(ASCII) of char at given index

var str2 = "Div,yansh";

// str2[0] => read-only purpose 
str2[0] = 'A';
// str2.charAt(0);
console.log(str2.charAt(0), str2[0], str2.charCodeAt(0));


// document.getElementById('uname').onkeydown = function(e){
//     console.log(e, e.key, e.which, e.target.value, typeof e.target.value);
//     // if(e.keyCode === 32){ // e.target.value == '   '
//     //     alert('Spaces are not alleoed');
//     //     return false;
//     // }else{
//     //     return true;
//     // }
// }

// document.getElementById('uname').onchange = function(){
//     console.log(this.value)
//     if(this.value.charCodeAt(0) == 32){
//         alert('spaces are not allowed')
//         this.value = '';
//         return false;
//     }else{
//         return true;
//     }
// } 

// convert string into array:

// split(delimeter): 

// split string with the delimeter passed:
// if omitted then return whole string as an array or passed delimeter not found then reutnr whole stirng

// 
console.log(str2.split(','))

// toString()
// var f = function(){
//     var arr = fetch('https://jsonplaceholder.typicode.com/posts')
//    return {
//        "status":'OK',
//        "data":arr
//    }
// }
// promise 
// document.getElementById('demo').innerHTML = f()


// console.log(f())
// console.log(f.toString())
console.log( Boolean(false) )


// Prototype: parent, all method an props belongs to prototype
// you can add new/own props and method to all stirng.

String.prototype.myCustomFunction = function(param){
    console.log('custom func using prototype ' + param)
    return '';
}

console.log(str2.myCustomFunction(str2), first.myCustomFunction(first));