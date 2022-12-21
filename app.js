//? ************AVERAGE NUMBER***********

let totalNumber = +prompt("How many numbers will you average?:");
let sum = 0;
let average = 0;

for (i = 1; i <= totalNumber; i++) {
  let newNumber = +prompt("Sayıyı giriniz:");
  sum = sum + newNumber;
}
average = sum / totalNumber;

alert(`The average of these ${totalNumber} numbers is: ${average}`);

//? ************by muratozkan***********
