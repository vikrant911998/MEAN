//function declaration style
function demo(a: number, b?: string): void {
  let str: string = a.toString();
  console.log("Function Declaration Style ", a, b);
}
// var a;
// console.log(a);

demo(10, "Hello");
demo(20);

var temp: any = function(a: number): void {
  console.log("Anonymous Function");
};

var arrow = (a: number): void => {
  console.log("Arrow Function", a);
};

temp(10);
arrow(10);
