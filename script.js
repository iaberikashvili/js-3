// 1. ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: არგუმენტად გადაეცით ეს მასივი:
//10, 50, 6, 7, 8, 11, 6, 3, 9
 
"use strict"


function sum (...numbers) {
    let numberSum = 0 
    for (let item of numbers) {
        numberSum + item
    }

    return numberSum

}
let sumResalt = sum(10,50,6,7,8,11,6,3,9)
console.log(sumResalt);





// 2.ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 
'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;



let user = {
  firstname: 'giorgi',
  lastname: 'saakadze',
  age: 32,
  isloggedin: true
}


function nameLastname() {
        if (user.isloggedin) {
    const aftermath = user.firstname + ' ' + user.lastname;
          return aftermath;
      }
    
         return false;
     }
    
    console.log(nameLastname());
    
	



// 3.შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:
// ვერ გავაკეთე


// 4 
//დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - this number is even‘; თუ კენტია დააბრუნოს - this number is odd;
 
function oddEven(numb) {
       if (numb % 2 === 0) {
        return 'The number is even';
        }
    
         return 'The number is odd';
     }
    
    const item = oddEven(120);
     console.log item(item);


// 5.მოცემულია მასივი:
//for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1

let array = [1,2,3,4,5]; 
 //ვერ გავაკეთე






