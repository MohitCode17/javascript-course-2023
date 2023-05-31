// Calculate BMI on clicking of button
const button = document.querySelector(".btn");
button.addEventListener("click", calculateBmi);

function calculateBmi() {
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const result = document.querySelector("#result");

  // check validation
  if (!height || isNaN(height) || height < 0) {
    result.innerText = "Please provide valid height!!";
    return;
  } else if (!weight || isNaN(weight) || weight < 0) {
    result.innerText = "Please provide valid width!!";
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  // check bmi
  if (bmi < 18.5) {
    result.innerText = `Under weigth: ${bmi}`;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    result.innerText = `Normal: ${bmi}`;
  } else if (bmi >= 25 && bmi < 29.9) {
    result.innerText = `Over weigth: ${bmi}`;
  } else if (bmi >= 30 && bmi < 34.9) {
    result.innerText = `Obesity (Class I): ${bmi}`;
  } else if (bmi >= 35 && bmi < 39.9) {
    result.innerText = `Obesity (Class II): ${bmi}`;
  } else {
    result.innerText = `Extra Obesity: ${bmi}`;
  }
}
