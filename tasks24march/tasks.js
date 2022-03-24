/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

var person = {
    firstName: 'safa',
    lastName: 'Alyaaqbeh',
    dop: '2.9.1998',
    favoriteFood: ['mansaf', 'magloba', 'kabab'],
    favoriteMovie: ["the lost prince", "the karate kid", "scoob"]
}
document.write(`<br>My name is : ${person.firstName} ${person.lastName} ,My Birth date is : ${person.dop} ,My favorite food is: ${person.favoriteFood} ,My favorite movie is: ${person.favoriteMovie}`);


/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides
Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/
var persons = [
    { name: { first: 'John', last: 'hob' }, age: 25 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 35 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 50 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67}
];

function firstName(p) {
    arr = [];
    for (i = 0; i < persons.length; i++) {
        arr[i] = p[i].name.first + ' ';

    }
    return arr;
}
document.write(` <br>all the first name is ${firstName(persons)}`);


/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons
Ex: averageAge(persons) => 41.2
*/
function averageAge(s) {
    sum = 0;
    for (i = 0; i < s.length; i++) {
        sum = sum + s[i].age;
    }
    avg = sum / s.length;
    return avg;
}
document.write(` <br>The average is ${averageAge(persons)}`);

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person
Ex: olderPerson(persons) => "Soso Al-Amora"
*/
function olderPerson(s) {
    fullname = '';
    old = s[0].age;
    for (i = 1; i < s.length; i++) {
        if (s[i].age > old) {
            old = s[i].age;
            fullname = s[i].name.first + ' ' + s[i].name.last;
        }
    }
    return fullname;
}
document.write(`<br>The older person is ${olderPerson(persons)}`);

/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/
function longestName(s) {
    long = s[0].name.first + ' ' + s[0].name.last;
    for (i = 1; i < s.length; i++) {
        fullname = s[i].name.first + ' ' + s[i].name.last
        if (fullname.length > long.length) {
            long = fullname;
        }
    }
    return long;
}
document.write(` <br>The longest full name is ${longestName(persons)}`);

/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/
function longestName(s) {
    long = s[0].name.first + ' ' + s[0].name.last;
    for (i = 1; i < s.length; i++) {
        fullname = s[i].name.first + ' ' + s[i].name.last
        if (fullname.length > long.length) {
            long = fullname;
        }
    }
    return long;
}
document.write(` <br>The longest full name is ${longestName(persons)}`);


/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??
Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/

function repeatWord(str) {
    var s = str.split(' ');
    //s=s.toLowerCase();
    ob = {};
    for (i = 0; i < s.length; i++) {
        s[i] = s[i].toLowerCase();
        if (!s1.hasOwnProperty(s[i])) {
            s1[`${s[i]}`] = 1;

        }
        else {
            s1[`${s[i]}`]++;
        }
    }
    return s1;
}
console.log(repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO"));
document.write(` <br> ${repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")} On the consol!`);


/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??
Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/
function repeatChar(str) {
    str = str.toLowerCase();
    sa= {};
    for (i = 0; i < str.length; i++) {
        if (!sa.hasOwnProperty(str[i])) {
            sa[`${str[i]}`] = 1;

        } else {
            sa[`${str[i]}`]++;
        }
    }

    return sa;
}

console.log(repeatChar("maMababatetacedo"));
document.write(`<br> ${repeatChar("maMababatetacedo")}`);


/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array
Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/
function selectFromObject(s, arr) {
    obj = {};
    for (i = 0; i < arr.length; i++) {
        for (const [key, val] of Object.entries(s)) {
            if (key == arr[i]) {
                obj[`${arr[i]}`] = val;

            }
        }
    }

    return obj;

}
console.log(selectFromObject({ a: 1, cat: 3 }, ['a', 'cat', 'd']));
document.write(`<br> ${selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])} `);