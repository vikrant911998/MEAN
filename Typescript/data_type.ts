var a: number = 10;
var b: number = 10.45;
// a = "string";
var str: string = "Hello";
var bool: boolean = true;

var arr: Array<number> = [1, 2, 4, 5];
var arr1: number[] = [11, 22, 33, 44];

//Object Literal Form
var obj: object = { id: 101, name: "Vikrant" };
var obj1: { id: number; name: string; isStudent: boolean } = {
  id: 101,
  name: "Rahul",
  isStudent: true
};
var obj2: { id: number; name: string; isStudent: boolean };
obj2 = { id: 102, name: "Rohit", isStudent: false };

var temp: any;
temp = "string";
temp = 10;

console.log(a);
console.log(b);
console.log(str);
console.log(bool);
console.log(obj);
console.log(arr);
console.log(obj2);
