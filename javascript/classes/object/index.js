const obj = {
  name: "tejas",
};
// console.log(obj);

Object.defineProperty(obj, "age", {
  value: 20,
});

Object.defineProperty(obj, "marks", {
  writable: true,
  value: null,
});
//runs automatically
//hoisting does not work here
// console.log(obj);

//getter and setter in object

//although this is part of pure classes but classes are not pure thats it

Object.defineProperty(obj, "setMarks", {
  set: function (marks) {
    this.marks = marks;
  },
});

console.log("before calling setter ", obj);
obj.setMarks = 40;

//if we want to set the value using the set inside defProperty then we need to add the writable :true option if there is already property defined then we can update it directly
console.log("after calling setter ", obj);
