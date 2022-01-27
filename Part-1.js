"use strict"
let fruits = ["mango", "apple", "banana"];
//  console.log(fruits);
//  fruits[0]="Lemon";
//  console.log(fruits);
// fruits.push("Apple");
// console.log(fruits);

// **********For Clone an Array *********************

//  It means we are going to make an which has the same elements of another
//   elemets this is called clone of an array 


// Methods:1
// 1.slice method-  THIS IS FAST Method 
let array1 = ["a", "b", "c"];
let array2 = array1.slice(0);
array1.push("d");
console.log(array1);
console.log(array2)
console.log(array2 === array1);



//  Methode:2
// 2. Cocate method-
let array3 = ["1", "2", "3"];
let array4 = [].concat(array3);
array3.push("4");
console.log(array3);
console.log(array4);
console.log(array3 === array4);

//  New  Methode:3  But mostly use this method 
// 2.Spread operator method-
let array5 = ["Ram", "Bikky", "Vivek"];
let array6 = [...array5];
array5.push("Amit");
console.log(array5);
console.log(array6);
console.log(array5 === array6);
// we say it spread operator becouse  see below--
let array7 = [..."123456789"];
console.log(array7);


// Further if we want add some elements in the clone array then 
// we have write the code:gievn Below
let arrayclone = array1.slice(0).concat("k", "L", "M");
console.log(arrayclone);
// OR.. By using concate 

let arrayI = [].concat(arrayclone, ["y", "Pushpendra"]);
console.log(arrayI);

// OR.. By using Spread operator 
let onemorearray = [...arrayI, ...array3, "onemore"]
console.log(onemorearray);

// Use const for array for safer side **********************

// NOTE:-- try to use const instead of let in reference type bcz we will onplay
// do pop and push we will not change the array8--------



// **********LOOPS IN ARRAY ************************************

// For Loop:

let lparray = ["Aman", "Rita", "sonu", "Hima", "simran", "Usman"];
// console.log(lparray);
let fruits2 = [];

for (let i = 0; i <= lparray.length - 1; i++) {
    fruits2.push(lparray[i].toUpperCase());

}
console.log(fruits2);

// While Loop:-----------------------

const whilearray = ["A1", "A2", "A3"];
console.log(whilearray);
let i = 0;
while (i < whilearray.length) {
    console.log(whilearray[i]);
    i++;
}
//   For of Loop---------------------

const games = ["Football", "Basketball", "Cricket"];
for (let game of games) {
    console.log(game);
}

//  ...............Array Destructing......**********************
// kisi array   ke elements ko kisi varible me store krna 
// on basis of Index number
// // Go to notes 
let rd = ["value1", "value2", "value3", "value4", "value5", "v6", "v7"];
let [ar1, ar2, , ar4, ...allar5] = rd;
console.log(allar5);


// -----------------------------------------------Introduction of OBJECTS---------------------------******************************************************
const person = {
    name: "Ankit",
    age: 21,
    hobbies: ["song", "gym"]

};
console.log(person.name);

//  How to add an key pair value In a Object 
person.gender = "male";
console.log(person);
// Same process for using Bracket ---------
person["gender2"] = "female";
console.log(person);

// Bracket and Dot Method ---
//  **** See in Notebook *****

// new-line 
// agar mujhe kisi variable ki value ko mujhe as a key use karna hai 
// to  normal people trying to do this ---
// yaha per key ki value ket ho rhi hai na ki email.
const ket = "email";
person.ket = "aknasa12@gmail.com";
console.log(person.ket);

// Right method 
person[ket] = "aknass@gmail.com";
console.log(person.ket);
//   ------------------------------How to use iteration in Objects----------
// for in loop
// Object.keys  
// Methode : 1
for (let i in person) {
    console.log(i);
}
// if i want that outcome come alogwith key values then 
for (let i in person) {
    console.log(`${i}: ${person[i]}`);
    // console.log(i, ":",person[i]); ese bhi kar skte hai
}
// Method:2
for (let i of Object.keys(person)) {
    console.log(i, ":", person[i]);
}
// ----------Computed Properties ----------------------
const var1 = "Name";
const var2 = "Age";

const var3 = "Rahul";
const var4 = 21;
// ab inki  key + values ko in  variables se uthana hai to inko computed 
// karna padega 
const pk = {
    [var1]: var3,
    [var2]: var4

};
console.log(pk);
//   OR--
const pk2 = {};
pk2[var1] = var3;
pk2[var2] = var4;
console.log(pk2);


// Spread Operator in Objects -------------------------------
const spObject = {
    sp1: "Valsp1",
    sp2: "Valsp2"
};
const spObject2 = {
    sp1: "Again same key",
    sp4: "Valsp4"
};
const NewspObj = { ...spObject, ...spObject2 };
console.log(NewspObj);

//  ------------Object Destructuring ---------------------------
//  kisi object ke key ki value ko kisi dusare  variable me store 
//  karna ko hi object destructuring kahte hai

const band = {
    bandname: "Led zeppellin",
    famoussong: "Stairway to heaven",
    year: 1997,
    location: "New York"
};
let { bandname: kp, famoussong: song, ...restall } = band;
console.log(song, restall);


//  -----------------Objects Inside Array ---------------------------------
const users = [

    { UserID: 1, UserName: "Rahul Kumar", Usergender: "Male" },
    { UserID: 2, UserName: "Pankaj Kumar", Usergender: "Male" },
    { UserID: 3, UserName: "Anushka sharma", Usergender: "Female" },
];
for (let user of users) {
    console.log(user.UserID);
}
// -----------------Nested Destructuring--------------------------
const [{ UserName }, , { usergender }] = users;

// By defoult uper line  (210) me automatic wo variables hi hote hai or agr 
// hamko un varibles ka naam change karna ho to use code line (214)

const [{ UserName: wwd }, , { Usergender: wwe }] = users;
console.log(wwd, wwe);

//   **************************** -- FUNCTIONS --  *********************************************

//    function Declaration

function uk() {
    console.log("Happy Birthday to all uk users In this company");
}
//  now call this function from anywhere like below:

uk();

//    #Examples:

function iseven(num) {

    if (num % 2 == 0)
        return true;


    else
        return false;


}
const lm = iseven(7);
console.log(lm);

// # Ex-2

function inputuser(strname) {
    return strname[0];
}
const op = inputuser("apna");
console.log(op);

//   function expression means function ko direct varible me Store karana
const RIP = function () {
    console.log("happyirthDay to you ");

}
RIP();

//  Arrow function---------------------
// Remove = function word and add => and also remove {} and remove Return and 
// if ther eis single varible/parameter then also remove (). 

const kpia = num1 => num1 % 2 == 0;
console.log(kpia(7));


// ....... ...... .... Hoisting---------------------
//    * Only in  case of function declaration  IN only Javascript  fumction can be call 
//     before function declaration 


ravi();
function ravi() {
    console.log("Hello India");
}

// block scope VS function Scope ----------------------------------------------
//  *let and const are block scope
// * var is function scope it means isko hum khi se bhi acces kr skate hai 
// outside to the block
//  block ke ander jo let ya const likha hai wo us block ke ander hi console hoga

{
    let firstname = "Seema kumari";
    console.log(firstname);

}
{
    let firstname = "Raj kumar";

    console.log(firstname);
}
//  var is function scope

{
    var firstname = "Apple";

}
console.log(firstname);

// Thats why people use let and const instead of var to avoid errros 


// --------------------------------------------------------------------__---------------------------------------------------------


function naam(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum = sum + number;

    }
    console.log(sum);
}
naam(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// ...................... ********************** Parameter Destructuring*********************

// Mostly used with Objects.. 
// also used with React.

const person55 = {
    Name: "Akki",
    gender: "Male"
}
function fun({ Name, gender }) {
    console.log(Name);
    console.log(gender);

}
fun(person55);


// __________________________________________________****** ***** Callback functions  ***********______________

// function ke argument me ek or functionpass krana is called callback function 

function fun2() {
    console.log("Happy happy ");
}
function fun3(callback) {
    callback();

}
fun3(fun2);

//  ****************** important methods of Array*************
// 1.forEach 
// 2.map
// 3.fliter
// 4.reduce

// 1. forEach 
//    it actually works as For loop

const man = [2, 3, 4, 5, 6, 7];

man.forEach(function (number2, index) {
    console.log(`Number is  ${number2 * 2}, and Index  is ${index}`);
}
)

// Ex-2
const user = [
    { name: "Pankaj", age: 24 },
    { name: "Preeti ", age: 25 },
    { name: "Ritik", age: 22 }
]
user.forEach(function (nam) {
    console.log(nam.name);
})

// 2.map
const user1 = [2, 3, 4, 5, 6, 9];
const superhit = function (user) {
    return user * user;
    //  arrow function can also be used here 
}
const kite = user1.map(superhit);
console.log(kite);


// Ex-2
const eye = [
    { singer: "Arjit", favsong: "hum tere bin" },
    { singer: "A.R Rehman", favsong: "No idea" },
    { singer: "Shyeya Ghosal", favsong: "Tu raah hai to " }

];
const film = data => {
    return data.singer;
}
const apna = eye.map(film);
console.log(apna);

//  3.filter method  find even/Odd

const fit = [12, 3, 4, 65, 77, 45, 44]
const isEven = findEven => {
    return findEven % 2 == 0;
    //    filter method me return jo hai wo to true ya flase hi return karega agar true
    //    aata hai to wo even numbers ko filter kar dega 
}
const shots = fit.filter(isEven);
console.log(shots);


//    Method -4 reduced 
// ( kisi array me se ye value reduced krke kam dena jese sum of 
//     some numbers will come a single digit(this is reduced form))

// can use  Sum of some numbers from a array 

// ex-1

const rtr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const car = (accumulator, currentvalue) => {
    return accumulator + currentvalue;

}
// see notes in laptop notes 
const fun6 = rtr.reduce(car);
console.log(fun6);

// real ex-2 
const rtr1 = [
    { price: 200 },
    { pant: "full size", price: 500 },
    { tshirt: "small size", price: 1200 },
    { Jacket: "costly", price: 800 }

];
const addsumitems = (accumulator, currentvalue) => {
    return accumulator + currentvalue.price;

}
console.log(rtr1.reduce(addsumitems, 0));

// Method -5 sort
const rtr2 = [
    { price: 200 },
    { pant: "full size", price: 500 },
    { tshirt: "small size", price: 1200 },
    { Jacket: "costly", price: 800 }

];
const flp = (a, b) => {
    return a.price - b.price;
};
console.log(rtr2.sort(flp));

// Method - 6 find 

const ids = [
    { userId: 1, nameuser: "Ankur" },
    { userId: 2, nameuser: "Shivani kumari" },
    { userId: 3, nameuser: "Ritesh" }
];

const rr = (id) => {

    return id.userId == 2;
}
console.log(ids.find(rr));


// Method: 7 every 
// sab kuch ya to ye to true return hoga sab kuch ye na ho to return false aayega .. 
//  Real ex-
// check every product is less than the price of 3000 
const usercart = [
    { product: "mobile", Price: 2000 },
    { product: "Cloths", Price: 5000 },
    { product: "Accesories", Price: 2200 }
]
const pump = usercart.every((pp) => pp.Price < 3000);
console.log(pump);

//  Method - 8 some 
//  will give true and false 
//  koi ek bhi element
//  find some elements 

const usercart2 = [
    { product: "mobile", Price: 2000 },
    { product: "Cloths", Price: 5000 },
    { product: "Accesories", Price: 2200 }
]
const pump2 = usercart2.some((pp) => pp.Price < 2100);
console.log(pump2);

//  Method- 9 fill 
const sps = [2, 8, 3, 4, 7, 0, 32]
sps.fill("room", 1, 4);
console.log(sps);

//  Method- 9 fill 

const sps2 = [2, 8, 3, 4, 7, 0, 32]
//   sps2.splice(start,delete,insert); 
sps2.splice(1, 2, "pappu", "kappu");
console.log(sps2);
//  we can also store deleted items 
const deleteditems = sps2.splice(1, 2, "pappu", "kappu");
console.log(deleteditems);

// **********************************---------Sets------------------*****************************

const turn = [2, 3, 4, 5, 6, 12, 4, 8];
const items7 = new Set(turn);
console.log(items7);
// console.log(items7.length); this will not work 
let a = 0;
for (let number of items7) {
    a++;
}
console.log(a);


// *****************-------map data structure ----------------*******************
//  can put any name to key or any number 




// _________________________________________________________________________________________________________

// ***************_____optional chaining ********************************


// mostly used in nested objects isme kya hota hai ki hum ? lagate hai taki undefined aa jaye par 
// show na ho 

const fun9 = {
    name: "Abhinav",
    // address:{plotno:'323'}

}
console.log(fun9.name);
console.log(fun9?.address?.plotno);



// ************-------Keyword methods --------------------
// this keyword yaha par yha ke uppar waale name and age jab jab hum change karege value change hogi tab tab 
const fun10 = {
    name: "Abhinav",
    age: 23,
    address: function () {
        console.log(`my name is ${this.name} andnage is ${this.age}`);
    }
}
fun10.address();


// call, apply, bind method is important interview bases -----------------------------

// see notes laptop 
// agar kuch . se phle likha ho wo object hota hai 



// --------------------------------------------------Arrow Function _______________________________
// arrow function ke ander jo this hota hai wo surrounding se aata hai uka khud ka this nahi hota   

const fun11 = {
    firstname: "Pavan",
    age: 55,
    about: () => {
        console.log(this.firstname, this.age);
    }
}
fun11.about.call(fun11);
// outcome = undefined 

// ...............------------------- Solution using Object.create -----------

// in official ecmascript documentation me 
// __proto__ , [[prototype]] Both are same things but 
// prototype this is another thing 

// ********* proto vs prototype
// __proto__ ek reference jiski aap chain create kroge
// or 
// prototype is simple object hai
// **************

const fun12 = {
    key1: "Pavan",
    key2: 55,
}
// Method -1 to add keyvalues in obejects 
 const newf12 = {};
  newf12.key3 ="my name";
  console.log(newf12);
  
//   method -2
// there is oe more way to create empty object 
const newf13 =Object.create(fun12);
newf13.key4 ="ok me hu key4";
 console.log(newf13.key2);
//  iska matlb ye hai ki me search key ki value to newf13 me kr rha hu pr agr key value
//  is object me nhi milti hai to ye upper jaake check krega or milegi to output de dega 
 
//  line 596 ka last ka code newf13 ke proto ko set kr rha hai fun12 ke equal
// this is called  prototype chaining



// ____________________________What is Prototype____________________________________________ 

//  function treats like function + objects 
// name --- property tells name of the function 

// functions us free space or us space ko bolte hai prototype.
// only functions provide prototype(called free space) or us prototype(freespace )
// me hum function se related keypair values add store/add kr skte hai  

// __proto__ chain create krta hai jab ki yaha upper prototye is objject ki tarah kaam 
// karega


// _____________________New Keyword___________________________________________________________

//  Note-  dovelopers ko jaanne ke liye ki humne new keyword use kia hai to  humko function ka first word capital rakhana rakhana hai 

//  see notes laptop 
// new constructor call krta hai  like const abc = new fun("toomy",6);


// __________________________________________________________________
// 1.JS me array bhi objects hi hote hai 
//2. by default  prototype object hi milta hai pr array ka prototype array 
// milta hai 

// *******______________________class keyword ________________________________

class animal {
     constructor(name,age){

         this.name =name;
         this.age =age;
        }
        eat(){
            return `${this.name} is eating`;
        }
       issupercute(){
           return this.age>=4;
       }
      iscute(){
          return true;
      }

}
const newanimal = new animal("rabbit",4);
console.log(newanimal);
// now im calling prototype
console.log(newanimal.eat());


// ______________extend  and  super ______________
// agr humne 2 class banai hai or ek upper waali ( super/main class) se hum kuch
// constructor ya kuch methods ko hum second sub classs me same rakhna chahate hai to 
// hum animal class ko extend kr skte hai in doggi class me 

// or super tab use krte  suppose jb humko (name,age) upper lena ho main class se 
// or waaki ko add krna ho jese (name,age,speed)

// see notes in laptop

// phle sub class me sb kuch call hota hai agr waha na mile to super class me call hota hai 

// methods ko hum () ke call krte hai but propertirs ko hum bs .propertyname se kr lete hai 
























