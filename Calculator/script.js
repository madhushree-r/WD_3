const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');

let currentInput = '';
let resultDisplayed = false;

const operatorMap = {
  '÷': '/',
  '×': '*',
  '+': '+',
  '−': '-'
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === null) return; // skip buttons like "=" with no value

    const actualValue = operatorMap[value] || value;

    if (resultDisplayed && !isNaN(actualValue)) {
      currentInput = '';
      resultDisplayed = false;
    }

    currentInput += actualValue;
    display.value = currentInput;
  });
});

clearBtn.addEventListener('click', () => {
  currentInput = '';
  display.value = '';
});

equalsBtn.addEventListener('click', () => {
  try {
    const result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
    resultDisplayed = true;
  } catch {
    display.value = 'Error';
    currentInput = '';
  }
});
