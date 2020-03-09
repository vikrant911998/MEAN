//function declaration style
function demo(a, b) {
    console.log("Function Declaration Style ", a, b);
}
// var a;
// console.log(a);
demo(10, "Hello");
demo(20);
var temp = function (a) {
    console.log("Anonymous Function");
};
var arrow = function (a) {
    console.log("Arrow Function", a);
};
temp(10);
arrow(10);
