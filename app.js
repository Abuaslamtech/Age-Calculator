const calc = document.getElementById("calc");
const date = document.getElementById("dob");
const current = new Date().getFullYear();
const age = document.getElementById("age");
const calculate = () => {
  const dob = date.valueAsDate.getFullYear();
  const years = current - dob;
  age.innerHTML = years;
};
calc.addEventListener("click", calculate);
