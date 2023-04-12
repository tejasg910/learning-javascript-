let btns = document.querySelectorAll(".btn");

let add = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let arr = [];
let answerDiv = document.querySelector(".answer");
let answer = 0;
console.log(btns);
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    arr.push(parseInt(btn.innerText));
    console.log(arr);
    answerDiv.innerText = "";
    answer = 0;
    arr.forEach((item) => {
      answerDiv.innerText += item;
    });
  });
});

add.addEventListener("click", () => {
  answerDiv.innerText = "";
  arr.forEach((item) => {
    answer += item;
  });
  arr = [];
  answerDiv.innerText = answer;
});

minus.addEventListener("click", () => {
  answerDiv.innerText = "";
  arr.forEach((item) => {
    answer -= item;
  });
  arr = [];
  answerDiv.innerText = answer;
});
