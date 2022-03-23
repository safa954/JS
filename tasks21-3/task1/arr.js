console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7 , 9  45 ]
 ["Str", "alex","moh"]
 ['the','fox' 'over' lazy, 'dog' ]
*/

number = [1, 7, 9, 45];
names = ["Str", "alex", "moh"];
animals = ['the', 'fox', 'over', 'lazy', 'dog'];


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
The index of Tomato is 0
The index of Banana is 1
*/
var fruit = ["Tomato", "Banana", "Watermelon"]
document.getElementById('s').innerHTML = fruit.indexOf('Tomato') + "<br>";
document.getElementById('s').innerHTML = fruit.indexOf('Banana');

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

food = ["Mansaf", "shorma", "makmora","dd","ss"];
Sport = ["football", "gaming", "handball"];
Movie = ["sayrena ya donia", "no", "no","no"];

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

function firstOfArray(a) {

    console.log(a[0]);
}

firstOfArray([1, 4, 5]);

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array
Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

function lastOfArray(a) {

    length = a.length;
    console.log(a[length - 1]);
}

lastOfArray([1, 4, 5]);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)
var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0, 5, 7, 9]
array.push("10");
array.shift();
array.shift();
array.shift();
array.unshift(1, 3, 4, 6, 8);
console.log(array);


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
var array2 = [5,9,-7,3.5]
*/
var array2 = [5, 9, -7, 3.5]
console.log(array.push());
console.log(array.shift());
console.log(array.shift());
console.log(array.pop());

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets
Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

function middleOfArray(a) {
    if (a.length % 2 == 0) {
        a = [a[Math.ceil(a.length / 2)], a[Math.floor(a.length / 2)]];
        return a
    } else {
        b = a[Math.floor(a.length / 2)];
        return b;
    }
}

console.log(middleOfArray([1, 4, 5]));



/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something
var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

animals[3] = 'zebra';
animals[4] = 'elephant';

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index
var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9
**try more cases by your self
*/


function indexOfArray(num, index) {
    return indexOfArray(num, index);
}


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search about the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]
**try more cases by your self
*/

function arrayExceptLast(a) {

    a.pop();

    return a;
}

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array
var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]
**try more cases by your self
*/

function addToEnd(nums, value) {
    nums.push(value);
    return nums;
}


// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array
var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23
** solve it one time using for loop and another using while loop
**try more cases by your self
*/


function sumArray(nums) {
    sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    return sum;
}
function sumArray(nums) {
    sum = 0;
    i = 0;
    while( i < nums.length) {
        sum += nums[i];
         i++;
    }

    return sum;
}


/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array
var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(a) {
    let min = a[0];
    
    for (i = 0;i < a.length;i++){
        if (min > a[i])
            min = a[i];
    }

}


function minInArray(a) {
    let min = a[0];
    i = 0
    while (i < a.length) {
        if (min > a[i])
            min = a[i];
    }

}



/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it
var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]
*/

function removeFromArray(nums, value) {

    index = nums.indexOf(value);
    nums.splice(index, 1);
    return nums;
}

var nums = [1, 2, 3, 8, 9]
console.log(removeFromArray(nums));




/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts
var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(nums) {
    index = 0;
   
    let odd = [];

    for ( i = 0;i < nums.length;i++) {

        if (nums[i] % 2 != 0) {
            odd[index] = nums[i]
            index++;
        }
        
    }
    return odd;
}


function oddArray(nums) {
    index = 0;
    i = 0;
    let odd = [];

    while (i < nums.length) {

        if (nums[i] % 2 != 0) {
            odd[index] = nums[i]
            index++;
        }
        i++;
    }
    return odd;
}



/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array
var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6
var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

    }
    return sum / nums.length;
}

var nums = [1, 2, 3, 8, 9, 77]
console.log(aveArray(nums));

function aveArrayWhile(nums) {
    let sum = 0;
    i = 0;
    while (i < nums.length) {
        sum += nums[i];
        i++;
    }
    return sum / nums.length;
}



/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function shorterInArray(strings) {
    min = strings[0].length;
    let index = 0;
    let count = 0;

    for (let i = 1; i < strings.length; i++) {
        count = strings[i].length;
        if (count < min) {
            min = count;
            index = i;
        }
    }


    return index;

}

strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]

shorterInArray(strings)
console.log(strings[shorterInArray(strings)])

function shorterInArraywhile(strings) {
    min = strings[0].length;
    let index = 0;
    let count = 0;
    i = 1;

    while (i < strings.length) {
        count = strings[i].length;
        if (count < min) {
            min = count;
            index = i;
        }
        i++;
    }



    return index;

}






/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string
var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 8
Ex: repeatChar(string,"z") => 0
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar(string, char) {
    count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == char)
            count++;


    }

    return count;
}
var string = "alex mercer madrasa rashed2 emad hala"

console.log(repeatChar(string, "a"));

function repeatCharWhile(string, char) {
    count = 0;
    let i = 0;
    while (i < string.length) {
        if (string[i] == char)
            count++;

        i++;
    }

    return count;
}




/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(string) {
    var result = [];
    var index = 0;

    for (let i = 0; i < string.length; i++) {
        if ((string[i].length % 2 != 0) && ((i % 2) == 0)) {

            result[index] = string[i];
            index++;
        }
    }

    return result;
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]

console.log(evenIndexOddLength(strings));


function evenIndexOddLengthWhile(string) {
    var result = [];
    var index = 0;
    let i = 0;
    while (i < string.length) {
        if ((string[i].length % 2 != 0) && ((i % 2) == 0)) {

            result[index] = string[i];
            index++;
        }
        i++;
    }

    return result;
}



/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self
var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [1, 5, 16, 27, 16, 100000]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex(nums) {
    var result = [];
    for (let i = 0; i < nums.length; i++) {
        result[i] = Math.pow(nums[i], i);
    }

    return result;
}

function powerElementIndex() {
    var result = [];
    i = 0;
    while (i < nums.length) {
        result[i] = Math.pow(nums[i], i);
        i++;
    }
}


var nums = [44, 5, 4, 3, 2, 10]
console.log(powerElementIndex(nums));

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex(nums) {
    var result = [];
    var index = 0;

    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] % 2 == 0) && ((i % 2) == 0)) {

            result[index] = nums[i];
            index++;
        }
    }

    return result;
}
var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];

console.log(evenNumberEvenIndex(nums));

function evenNumberEvenIndex (nums) {
    var result = [];
    var index = 0;
    let i = 0;
    while (i < nums.length) {
        if ((nums[i] % 2 == 0) && ((i % 2) == 0)) {

            result[index] = nums[i];
            index++;
        }
        i++;
    }

    return result;
}



