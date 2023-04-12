console.log("this is file");

const obj = {
  email: "admin@gmail.com",
  password: "admin",
};

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;
  if (obj.email === email && obj.password === password) {
    alert("login success");
  } else {
    alert("invalid credentials ");
  }
});
