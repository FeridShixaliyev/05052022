//Praktikada yazdigimiz tasklar

//gonderilen string-i count qeder yan-yana getiren function
function Repeat(word,count=1){
    var sum="";
    for (let i = 0; i < count; i++) {
        sum+=word;
    }
    return sum;
}
console.log(Repeat("ha!",4))
//----------------------------------------
//Gonderilen arrayin sadece reqemleri getiren function
function checkNum(numbers){
    let numArr=[];
    for (let i = 0; i < numbers.length; i++) {
        if(typeof numbers[i]=="number"){
            numArr[numArr.length]=numbers[i]
        }
    }
    return numArr;
}
console.log(checkNum([1,2,3,4,"ssd",null,false]))

//Elchin mellimin dersinde yazdigimiz ve eve praktica ucun verdiyi tasklar

//50+ bala sahib studentleri getiren function
class Student{
    constructor(fullname,point){
        this.fullname=fullname,
        this.point=point
    }
}
function chooseStudent(students){
    let studentArr=[];
    for (let i = 0; i < students.length; i++) {
        if(students[i].point>50){
            studentArr[studentArr.length]=students[i];
        }
    }
    return studentArr;
}
std1=new Student("Rasim",51);
std2=new Student("Ismet",39);
std3=new Student("Sakir",79);

console.log(chooseStudent([std1,std2,std3]))
//-------------------------------------------

//Gonderilen arrayin icinde cut,tek ve 3-e bolunen ededleri tapip getiren function

function oddNumber(numbers){
    let numArr=[];
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]%2==1){
            numArr[numArr.length]=numbers[i];
        }
    }
    return numArr;
}
console.log(oddNumber([1,2,3,4,5,6,76]))
//-----------------------------------

function evenNumber(numbers){
    let numArr=[];
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]%2==0){
            numArr[numArr.length]=numbers[i];
        }
    }
    return numArr;
}
console.log(evenNumber([1,2,3,4,5,6,7,8,9]))
//---------------------------------------------
function isDevide(num){//<-----Burda asagidaki metodun icine metod gondermeyi yoxlamaq ucun bele bir metod yazdim
    if(num%3==0){
        return true
    }
    else
    return false;
}

function devideToThree(numbers){
    let numArr=[];
    for (let i = 0; i < numbers.length; i++) {
        if(isDevide(numbers[i])){
            numArr[numArr.length]=numbers[i];
        }
    }
    return numArr;
}
console.log(devideToThree([1,3,6,7,8,9]))
//----------------------------------------

//Array metodlari practice
const arr=[1,2,"3",4,5,6,7,8,9];
var num =arr.find(x=>x==3);
console.log(num)
var num1=arr.indexOf(5,0)
console.log(num1)
arr.pop()
console.log(arr)
arr.push(11)
console.log(arr)


//Yaranmis obyektin property -sini sonradan deyisen code bloku
class Person{
    constructor(fullname,age){
        this.fullname=fullname,
        this.age=age,
        this.changAge=function newAge(chAge){
            return this.age=chAge;
        }
    }
}
const person1=new Person("Ferid Shixaliyev",21)
person1.changAge(30);
console.log(person1)
//--------------------------
