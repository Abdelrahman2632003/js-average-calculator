let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let num4 = document.querySelector("#num4");
let num5 = document.querySelector("#num5");
let num6 = document.querySelector("#num6");
let num7 = document.querySelector("#num7");
let num8 = document.querySelector("#num8");
let num9 = document.querySelector("#num9");
let num10 = document.querySelector("#num10");
let btn = document.querySelector("#calc");
let res = document.querySelector("#result");

btn.addEventListener("click", calcAverage);

function calcAverage() {
  const average =
    (parseFloat(num1.value) +
      parseFloat(num2.value) +
      parseFloat(num3.value) +
      parseFloat(num4.value) +
      parseFloat(num5.value) +
      parseFloat(num6.value) +
      parseFloat(num7.value) +
      parseFloat(num8.value) +
      parseFloat(num9.value) +
      parseFloat(num10.value)) /
    10;
  res.style.display = "block";
  res.textContent = "Average :" + average.toFixed(2);
}
