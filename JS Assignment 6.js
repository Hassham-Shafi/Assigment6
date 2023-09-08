//1. Write a program to display the message “Hello World” 5 times in your browser using for loop.

for (var i = 0; i < 5; i++) {
    alert('Hello World')
}

// //2. Write a program to print numeric counting from 1 to 10.

for (var i = 1; i <= 10; i++) {
    alert(i)
}

// //3. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

var TableNum = prompt('Multiplication table of : ')
var TableLenght = prompt('Lenght : ')
for (var i = 1; i <= TableLenght ; i++) {
    alert(TableNum+' x '+i+ ' = '+TableNum*i )
}

//4. You have an array A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”] Write each element on new line with the help of for loop.

var Mobile =  ['Nokia','Samsung','Apple','Sony','Huawei']
for (var i = 0; i < Mobile.length ; i++) {
    alert(Mobile[i])
}

// 5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

var fruits = ['apple','banana','mango','orange','strawberry']
for (var i = 0; i < fruits.length ; i++) {
    alert('Element at index '+i+' is '+fruits[i] )
}

//6. Write a program to initialize an array of N items by using prompt. Where N is number of items as entered by the user.

var numOfItems = +prompt("Enter number of Items");
var index0 = prompt("Enter value for Index 0");
var index1 = prompt("Enter value for Index 1");
var index2 = prompt("Enter value for Index 2");
var index3 = prompt("Enter value for Index 3");

var arr = [index0, index1, index2, index3];
for (i = 0; i<=numOfItems; i++)
document.write(arr[i]+"<br>");
document.write("Number of Items: "+numOfItems+" Items "+"<br>");

//7. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20

document.write('Counting: ')
for (let i = 1; i < 16; i++) {
    document.write(i+', ')
}
document.write('Reverse counting: ')

for (let i = 10; i > 0; i--) {
    document.write(i+', ')
}

document.write('Even: ')

for (let i = 0; i <= 20; i+=2) {
    document.write(i+', ')
}

document.write('Odd: ')

for (let i = 1; i < 20; i+=2) {
    document.write(i+', ')
}

document.write('Series: ')

for (let i = 2; i <= 20; i+=2) {
    document.write(i+'k, ')
}

//8. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:

var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var item = prompt('item is found in the list or not.')
var cakeFound = false
for (let i = 0; i < A.length; i++) {
    if (A[i]==item) {
        document.write(A[i]+' is available in our bakery ')
        cakeFound = true
    }
}
if (cakeFound === false) {
    document.write('We are sorry '+item+' is not available in our bakery')
}

// 9. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12]
 
var A = [24, 53, 78, 91, 12]
var largest = A[0]
for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i]
    } 
}
document.write('The largest number in the array is:  '+largest)

//10. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]

var A = [24, 53, 78, 91, 12]
var smallest = A[0]
for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i]
    } 
}
document.write('The smallest number in the array is:  '+smallest)

//11. Write a program to identify the largest & the smallest number in the given array. A = [24, 53, 78, 91, 12]

var A = [24, 53, 78, 91, 12]
var largest = A[0]
var smallest = A[0]
for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i]
    } 
    else if (A[i] < smallest){
        smallest = A[i]
    }
}
document.write('The largest number in the array is:  '+largest)
document.write('The smallest number in the array is:  '+smallest)

//12. Write a program to print multiples of 5 ranging 1 to 100

for (var i = 1; i <= 100; i++) {
   
    if (i % 5 === 0) {
      document.write(i," "); 
    }
  }
  
//13. You have given the following arrays: var students = ["Ali", "Sami", "Taha", "Inam"]; var scores = [58, 73, 89, 90];

var students = ['Ali', 'Sami', 'Taha', 'Inam'];
var scores = [58, 73, 89, 90];
for (var i = 0; i < students.length; i++) {
    document.write( ' '+students[i] + " : " + scores[i]);
  }
  


var A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (var i = 0; i < A.length; i++) {
  for (var j = 0; j < A[i].length; j++) {
    document.write(A[i][j]);
  }
}

// 16. Write a program to repeatedly print the value of the variable num which is input by user. Value should be decreasing by 0.5 each time, as long as x Value remains positive.


var num = prompt('Enter a positive number:');

for (i = num; num > 0; num -= 0.5) {
    document.write(num +', ');
  }

// 17. The even/odd reporter Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      document.write(i + ' is even <br>');
    } else {
      document.write(i + ' is odd <br>');
    }
  }

//18. Write a program to calculate the product of the odd integers from 1 to 7.

var product = 1;

for (var i = 1; i <= 7; i += 2) {
  product *= i;
}
document.write("The product of the odd integers from 1 to 7 is:", product);

//19. Write a program that will write out a wedge of stars. The user will enter the initial number of stars, and the program will write out lines of stars where each line has one few star than the previous line. Initial number of stars: 7


var initialStars = prompt('Enter the initial number of stars:');


  for (var i = initialStars; i >= 1; i--) {
    var line = '';
    for (var j = 1; j <= i; j++) {
      line += '*';
    }
    document.write(line+'<br>');
  }

  //20. Write a program to create the following patterns in your browser. Take number of lines as an input.



  
 

