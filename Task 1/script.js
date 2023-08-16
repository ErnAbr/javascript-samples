/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const calculate = document.querySelector("#submit-btn");
const enteredWeight = document.querySelector("#search");
const output = document.querySelector("#output");

const weightConverter = (kilograms) => {
  const pounds = (kilograms * 2.2046).toFixed(2);
  const grams = kilograms * 0.001;
  const ounces = (kilograms * 35.274).toFixed(2);

  return { pounds: pounds, grams: grams, ounces: ounces };
};

calculate.addEventListener("click", () => {
  output.innerHTML = "";
  const resultList = document.createElement("ul");
  const returnedWeight = weightConverter(Number(enteredWeight.value));
  output.className = "output-style";
  enteredWeight.value = "";

  const poundsItem = document.createElement("li");
  poundsItem.textContent = `Pounds: ${returnedWeight.pounds}`;
  resultList.appendChild(poundsItem);

  const gramsItem = document.createElement("li");
  gramsItem.textContent = `Grams: ${returnedWeight.grams}`;
  resultList.appendChild(gramsItem);

  const ouncesItem = document.createElement("li");
  ouncesItem.textContent = `Ounces: ${returnedWeight.ounces}`;
  resultList.appendChild(ouncesItem);

  output.appendChild(resultList);
});
