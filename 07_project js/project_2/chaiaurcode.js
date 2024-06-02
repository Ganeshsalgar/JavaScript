const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0) {
    result.innerHTML = `please Enter the valid ${height}`;
  } else if (weight === '' || weight < 0) {
    result.innerHTML = `please Enter the valid ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show result
    if (bmi < 18) {
      result.innerHTML = `<span>your bmi weight is under Weight :- ${bmi}</span>`;
    } else if (bmi > 18 && bmi < 24) {
      result.innerHTML = `<span>your bmi weight is Normal Range:-  ${bmi}</span>`;
    } else {
      result.innerHTML = `<span>your bmi weight is Over Weight :- ${bmi}</span>`;
    }
  }
});
