/*
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
*/
function subtract(n) {
    let result = n;
    let i = n - 1;
    while (i > 0) {
        result = result - i;
        i--;
    }

    return result;
}


console.log(subtract(5));




/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/

function factorial(number) {
    let i = number;
    let result = 1;

    while (i > 0) {
        result = result * i
        i--;
    }


    return result;
}

console.log(factorial(4));

/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/

function repeatStr(string, number) {
    if (string !== "") {
        result = [];

        for (i = 0; i < number; i++) {
            result[i] = string;

        }

        return result;
    } else {
        result = "The string is empty";
        return result;
    }
}

console.log(repeatStr("", 2));

/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/

function sum2(num1, num2) {
    result = 0;
    i = 0;

    let min = num1;
    let max = num2;

    if (min > num2) {
        min = num2;
        max = num1;
    }
    i = min;
    while (i <= max) {
        result = result + i;
        i++;
    }
    return result;
}


console.log(sum2(3, 6));

/*
5
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
** Important: the continue condition should be [somthing!== 0]
** Important: You should't have extra space at the end
Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/

function repeatStr2(string1, string2) {
    if (string1 !== "" & string2 !== "") {
        result = [];
        i = 0;
        number = string2.length;
        while (i < number) {
            result[i] = string1;
            i++;
        }

        return result;
    }

    else {
        result = "The string is empty";
        return result;
    }
}

console.log(repeatStr2(" ro", " cc"));

/*
6
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/

function multiOf(num1, num2, num3) {
    result = 1;
    
    for (let i = 0;i < num3 ; i++) {
        result = result * num2;
       
    }


    return result * num1;
}

console.log(multiOf(4, 10, 3));

/*
7
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/

function muti2(num1, num2) {
    result = 1;
    i = 0;

    let min = num1;
    let max = num2;

    if (min > num2) {
        min = num2;
        max = num1;
    }
    
    for (i = min;i <= max;   i++) {
        result = result * i;
      
    }
    return result;
}

console.log(muti2(3, 6));

/*
8
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [num1!==num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/

function numberBetweenUs(num1, num2) {
    result = [];
    i = 0;

    let min = num1;
    let max = num2;

    if (min > num2) {
        min = num2;
        max = num1;
    }
    i = min + 1;
    index = 0;
    while (i < max) {
        result[index] = i;
        index++;
        i++;
    }
    return result
}

console.log(numberBetweenUs(1, 3));

/*
9
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/
function countDown(number) {
    result = [];
    index = 0;
    while (number > 0) {
        result[index] = number;
        index++;
        number--;
    }

    result[index] = "done";
    return result;
}


console.log(countDown(7));
/*
10
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum
multiplication2(5,4) => 20
multiplication2(2,8) => 16
multiplication2(7,6) =>  42
*/
function multiplication2(num1, num2) {
    let sum = 0;
    while (num1 > 0) {
        sum = sum + num2;
        num1--;
    }

    return sum;
}

console.log(multiplication2(2, 8));


/*
11
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1
mod2(2,8) => 2
mod2(7,4) => 3
mod2(8,4) => 0
*/

function mod2(num1, num2) {
    result = 0;

    if (num1 < num2) {
        result = num1;
    } else {
        result = num1 - Math.floor(num1 / num2) * num2;
    }

    return result;
}

console.log(mod2(8, 4));


/*
12
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
repeatChar("schOol","o") => 2
repeatChar("school","a") => 0
repeatChar("School","s") => 1
try more case by yourself
*/


function repeatChar(string, char) {
    result = 0;
    let i = 0;
   while ( i < string.length) {
        if (string[i] == char) {
            result++;
            i++ ;
        }
    }

    return result;
}

console.log(repeatChar("school", "s"));






