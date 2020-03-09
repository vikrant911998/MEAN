var Student = /** @class */ (function () {
    function Student(id, name) {
        this.name = name;
        this.id = id;
    }
    Student.prototype.show = function () {
        console.log("id  = ", this.id, this.name);
    };
    return Student;
}());
var obj = new Student(101, "Vikrant");
obj.show();
// console.log(obj.id);
