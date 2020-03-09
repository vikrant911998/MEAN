namespace Origination {
  export class Student {
    constructor(private id: number) {}
  }
}

var obj = new Origination.Student(101);
var obj1 = new Origination.Student(101);
var obj2 = new Origination.Student(101);

var arr: Origination.Student[] = [obj, obj1, obj2];
var arr1: Array<Origination.Student>;

var a: number = 10;
var b: Number = new Number(10);

namespace Management {
  export class Student {}
}
