class Student {
  private id: number;

  constructor(id: number, private name: string) {
    this.id = id;
  }

  show() {
    console.log("id  = ", this.id, this.name);
  }
}

var obj = new Student(101, "Vikrant");
obj.show();
// console.log(obj.id);
