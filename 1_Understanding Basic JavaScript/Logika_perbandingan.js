/*
Comparison Operators

== comparing 2 values is the same
4 == 4 // true
"hello" == "hi" //false

!= comparing 2 values is not the same
"hello" != "hi" // true 
4 != 4 // false

=== comparing 2 values is identical (It's about the data type)
4 === 4 // true
4 === '4' // false

!== comparing 2 values is not identical (It's about the data type)
"hello" !== "hi" // true 
4 !== 4 // false

> compares 2 values whether the 1st val greater than 2nd val
5 > 2 // true
2 > 5 // false

>= compares 2 values whether the 1st val greater or equal than 2nd val
5 >= 5 // true
5 >= 6 // false

< compares 2 values whether the 1st val is less than 2nd val
5 < 9 // true
5 < 2 // false

<= compares 2 values whether the 1st val is less or equal than 2nd val
5 <= 5 // true
5 <= 4 // false


The Different using equal ("==") and identical ("===")
const aString = '10' ; 
const  aNumber = 10 

consoles . log ( aString == aNumber ) // true, because both values ​​are 10 
consoles . log ( aString === aNumber ) // false, because even though the value is the same, the data type is different 

outputs
true
false

*/