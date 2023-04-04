let a,b,c;
a=5;
b=6;
c=a+b;

console.log(c)





var name="Avinash";


//function 
function Myfunction(){
    var a=43;
    console.log(name);
    console.log("<br>"+ a);
}
Myfunction();






// here is an object
var student={
    name:"Avinash",
    clg:"Svkm",
    age:2
}
console.log(student.name);
const arr1=["Avinash","raghav","ruji","moji"]
console.log(arr1.toString());
console.log(arr1[1]);
var x = 21
console.log(x.toString());
console.log(x.toExponential());
console.log(x.toPrecision(4));
console.log(Number.isInteger(x));
console.log(x.toLocaleString("bn-BD"));
function divide_num(a,b){
    return a/b
}
obj=divide_num(100,5);
console.log(obj)
let school={
    name:"Adarsh highschool",
    locate:"kusumba",
    schoolinfo:function(){
        console.log(`${school.name} was locate
         at ${school.locate}`);    } 
}

school.schoolinfo()
console.log(school.name);
console.log(school["locate"]);
var school2=Object.create(school);
school2.gender="male";
for(let key in school){
    console.log(key);
}
let obj1={
    propfirst:3000,
}
console.log(obj1.propfirst);
delete obj1.propfirst;
console.log(obj1.propfirst);
const usermethod={
    about: function(){
    return `${this.name} is ${this.age} year old`;
}, is18:function(){
    if (this.age >=18){
        return "Congrats you are eligible to vote"
    }
}
}

function student(name,age){
    var person={};
    person.name=name;
    person.age=age;
    person.about=usermethod.about;
    person.is18=usermethod.is18;
    return person

}
const student1=  student("Avinash",29);
const student2=Object.create(student1);
student2.name="Rajudada";
console.log(student2);
function hello(){
    var department={};
    department.name1="It";
    department.floor="3rd";
}
hello.myOwnProperty="visit our department" ;
var func1=hello();
console.log(func1);

function hello(){
    return ("hello world");
}
if(hello.prototype){
    console.log("prototype present");
}else{
    console.log("not here");
}
hello.prototype.abc="abc";
console.log(hello.prototype.abc)
var student1={
    name:"Avinash"
};
var student=Object.create(student1);
console.log(student.__proto__);


function student(name,age){
    var user=Object.create(student.prototype);
    user.name=name;
    user.age=age;
    return user;

}
student.prototype.sing=function(){
    return " sare jaha se achha..";
};
student.prototype.info=function(){
    return `hello my name is ${this.name} and I'm ${this.age} years old`;
}
var user1=student("Avinash",29);
console.log(user1.sing());
console.log(user1.info());


function student(name,year){
    this.name=name;
    this.year=year;
    
}
student.prototype.info=function(){
    return`hello ${this.name}, are you in ${this.year} year`;
}
ar student1=new student("Avinash","final");
// covnsole.log(student1.name);
for(const key in student1){
    if(student1.hasOwnProperty(key)){
       console.log(key);
    }
}






// prototype
let numbers=[1,2,3,4,5,6];
console.log(numbers);
console.log(Object.getPrototypeOf(numbers));
console.log(Array.prototype);
console.log(Array.isArray(Array.prototype));
function hello(){
    return "hello world";

}
console.log(hello.prototype);
hello.prototype.Push('1');
console.log(hello.prototype);















//  here we have indroducing class

// 
class vehicle{
    constructor(wheel,color,price,model,model_year){
        this.wheel=wheel;
        this.color=color;
        this.price=price;
        this.model=model;
        this.model_year=model_year;

    }
    vehicle_type(){
        if(this.wheel==4){
            return "four wheelr";

        }else if(this.wheel==2){
            return "two wheeler";
        }else{
            return "other"
        }
    

    }
    vehicle_info(){
        return`it is ${this.wheel} wheeler vehicle of ${this.color}  color, ${this.model} ${this.model_year} having price ${this.price} `;
    }
}

class car extends vehicle{
    constructor(wheel,color,price,model,model_year,avg_speed){
        super(wheel,color,price,model,model_year);
        this.avg_speed=avg_speed;
    }
    name_of_car(){
        return `it is ${this.model}`;
    }
    avg_speed_car(){
        return `the car run ${this.avg_speed} Km/hr`
    }

}
var vehicle1=new car(4,"black",2000000,"scarpio",2022,60);
console.log(vehicle1.vehicle_type());
console.log(vehicle1.vehicle_info());
console.log(vehicle1.name_of_car());
console.log(vehicle1.avg_speed_car());
















// array methods
let arr=[2,3,4,5,6,8,9];
let value1=arr[0];
let value2=arr[1];
console.log(value1);
let[val1,,,,valn]=arr;
console.log(valn);
let newarr=arr.slice(3,6);
console.log(newarr);
console.log(Array.isArray(newarr));
arr.push(33);
console.log(arr);
let pop_element=arr.pop();
console.log(pop_element);
console.log(arr);
let fruits=["Apple","banana","Chikoo","Pineapple"];
fruits.shift();
console.log(fruits);
fruits.unshift("dryfruit");
console.log(fruits);
fruits.shift
console.log(fruits.shift());
var name="avinash"
console.log(name.toUpperCase());






// touppercase()
let lower_alpha=['a','b','c','d','e'];
let upper_alpha=[];
for(let i=0 ;i<lower_alpha.length;i++){
    upper_alpha.push(lower_alpha[i].toUpperCase());

}
console.log(upper_alpha);






// unshift method
fruits=['apple','banana','cherry','dryfruits']
console.log(fruits.unshift("pineapple"));
console.log(fruits);
function myfunction(){
    console.log(" Welcome Avinash ");
}
myfunction();







// function calling using call()
const user1={
    name:"Avinash",
    age: 20,
    about:function(){
        console.log(`${this.name} is ${this.age} years old`);
    }

 }
const user2={
    name:"Akash",
    age:15,


}
user1.about.call(user2);



function myfunction2(name){
    console.log("hello myfunction2");
    console.log(``);
}
function myfunction(callback){
    console.log("hello myfunctin");
    callback();
    callback("avinash")
}
myfunction(myfunction2);








// function inside function
function myfunction(){
    function hello(){
        console.log("function inside function");
    }
    return hello;
}
var ans=myfunction();
ans();





// // object cloning
var obj1={
    key1:"value1",
    key2:"value2",
    key3:"value3",
    key4:"value4",
}
var obj2={obj1};
console.log(obj2);
delete obj1.key4;
console.log(obj2);





// clone using Object.assign
var obj1={
    key1:"value1",
    key2:"value2",
    key3:"value3",
    key4:"value4"
}
var obj2=Object.assign( {},obj1);
console.log(obj2);
delete obj1.key4;
console.log(obj2);






// clone using slice
const arr1=[1,2];
const arr2=[1,2];
const arr3=arr1;
const arr4=arr2.slice(0);
console.log(arr1===arr2);
console.log(arr1===arr3);
console.log(arr4===arr2);
console.log(arr4)






//slice
arr1=[1,2];
arr2=[3,4];
arr3=arr1.slice(0).concat(arr2);
console.log(arr3);






const stringarry=[...'abcd'];
console.log(stringarry);







//.trim() function
let fname ="Avinash   ";
let tr=fname.trim();

console.log(tr.length)
console.log(fname+ "spaces:"+fname.length);







var num=22;
console.log(typeof num);// number
var strnum=String(num);
console.log(typeof strnum);//string
var str="Avinash";
console.log(typeof str);// string
var NumStr=parseInt(str);
console.log(typeof NumStr);// number

var numstr= +"Avinash" ;
console.log(typeof numstr);









// ternary 
var num=4
console.log(num>=3 ? "greater": "smaller");let









//if else
let luck = 13;
let your_choice = Number(prompt("Make your choice:"));

if (luck === your_choice) {
    console.log("congrats");
} else {
    console.log("Please Make another Choise");
}






//every method

var num=[2,4,6];
var ans = num.every((number)=> number%2==0);
console.log(ans);






// fill method 
const arr=new Array(10).fill( for (let i=1;i<10;i++){

});
console.log(arr);







// array filter method
const arr=[1,2,3,4,5,6,7,8,9,10]
var IsEven=function(number){
    return number%2==0;
}
var ans=arr.filter((number)=>number%2==1);
console.log(ans);





// find method
var arr=[1,2,3,4,5,6,7,8,9,0]
var ans=arr.find((num)=>num%2==0);
console.log(ans);





// foreach method

var arr=[1,2,3,4,5]
arr.forEach(function(num){
    console.log(num**2);
})







// function inside function

function person(){
    const name=(nm)=>{
        return (`hey meet ${nm}`);
    }
    const age=(ag)=>{
        return (`and he/she is${ag} years old  `);
    }
    console.log("inside the function");
    console.log(name("Avinash"))
    console.log(age(29))
    
}
person();


function svkm(dep,hod){

    const department=()=>{
        return `Welcome to ${dep} department`;
    }


    const HOD=()=>{
        return `Meet  Mr/Mrs. ${hod} HOD of ${dep} department`;
    }


    console.log(department());
    console.log(HOD());
}

svkm("IT","Avinash");






// default value

function adddd(a,b=2){
    console.log(a+b);
}
adddd(3);  //print 5
adddd(3,4);  //print 7




function myfun(a,c,...b){
    console.log(a)
    console.log(c)
    console.log(b)
}
myfun(1,2,3,4,5,6);






// addition of the parameters


function add_para(...values){
    let total=0;
    for(let num of values){
        total=total+num;
    }
    return total;

}
var xyz=prompt("Enter the values :");
console.log(add_para(xyz));





// function call using object

const Avinash={
    name:"Aviraje",
    age: 20
}
function info(obj){
    console.log(obj.name);
    console.log(obj.age);


}
info(Avinash);

function myfun(name){
    for(let letter of name){
        console.log(letter);
    }

}
myfun("Avinash")






// loop
// switchcase

var day=3;
switch(day){
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("Wednesday");
    break;
    case 4: console.log("Thursday");
    break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("Saturday");
    break;
    case 7: console.log("Sunday");
    break;
    
}




//while loop

var i=1;
while(i<=5){
    console.log(i);
    i=i+1;
}




// map => map is like object diff btw map and obj 
                //  is obj have str and sym as key but 
//                       map can have anything as key

const svkm=new Map();
svkm.set('dep','IT');
svkm.set('principle','Aijdhh');
svkm.set('dep','comp');
svkm.set('dep','IT');
console.log(svkm.get('dep'));




// // map array 
var nums=[1,2,4];
function sqr(num){
    return num*num;
}
const sqr_num=nums.map(sqr);
console.log(sqr_num);
const cut_num=nums.map(function(num){
    return num**3;
})
console.log(cut_num);







var person={
    name:'Avinash',
    age:20
}
console.log(person.name) //Avinash
console.log(Object.values(person)); //[ 'Avinash', 20 ]
console.log(person) //{ name: 'Avinash', age: 20 }
for(let i in person){
    console.log(i)  //name age
    
}
for(let i in person){
    console.log(person[i])  //Avinash 20
    
}




// array reduce method
var num=[1,2,3]
var con=num.reduce((ac,dc)=>{
    return ac+dc;
})
console.log(con);




//set in javascript
// order is not guaranteed 
// do not contain duplicates
const set1= new Set([1,2,3,4,2,1]);
console.log(set1);      //Set(4) { 1, 2, 3, 4 }
set1.add([9,5,9]);
console.log(set1);   //Set(5) { 1, 2, 3, 4, [ 9, 5, 9 ] }
set1.add(4);
console.log(set1);  //Set(5) { 1, 2, 3, 4, [ 9, 5, 9 ] }

if(set1.has(6)){
    console.log("6 is present");
}else{
    console.log("6 is not present");  //6 is not present
}





// conver array into set

var arr=[1,2,3,4,5,6,7,1,2,3,4];
const set_arr= new Set(arr);
console.log(set_arr);  //Set(7) { 1, 2, 3, 4, 5, 6, 7 }

let len=0;
for( let ele of set_arr){
    len++;
}
console.log(len);  //7





//some method of array
// it rtn true or false 
// if any one ele satisfy conditio it rtn true 
var arr12=[1,2,3,4,5]
const even=arr12.some((ele1)=>ele1%2==0);
console.log(even); //true


//array sorting
var arr13=[1,4,35,6,2];
var sor_arr=arr13.sort();
console.log(sor_arr);
  

var arr14=['a','z','Z','n','b'];
var sort_arr=arr14.sort();
console.log(sort_arr);

//ascending sort
var arr15=['a','z','Z','n','b','P'];
var sort1_arr=arr15.sort((a,b)=>{
    return a-b;
});
console.log(sort1_arr);

var arr15 = ['a', 'z', 'Z', 'n', 'b', 'P'];  // initialize an array with 6 elements
var sort1_arr = arr15.sort((a, b) => {       // sort the array using the sort() method with a callback function
  return a.localeCompare(b);                 // compare the strings using the localeCompare() method
});
console.log(sort1_arr);                      // print the sorted array to the console


// descending sort
var arr16=['a','z','Z','n','b','P','y','Q'];
var sort2_arr=arr16.sort((a,b)=>{
    return b.localeCompare (a);
});
console.log(sort2_arr);


// array splice method
var arr17=[1,2,3,4,5,6,7,8,9];
arr17.splice(3,3,'Avinash');
console.log(arr17);

// console.log(window);