const display = document.getElementById("display");
const clear = document.getElementById('clear');

let calculation = '';

const updateValue = (calculation) => {
  display.innerHTML = calculation;
}

const allClear = () => {
  display.innerHTML = '';
}

clear.addEventListener('click', allClear);