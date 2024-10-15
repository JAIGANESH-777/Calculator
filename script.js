const bs = document.getElementById("expression");

function backspace() {
  bs.value = bs.value.slice(0, -1);
}

function appendValue(value) {
  // Always append to the end of the current value
  bs.value += value;
}

function clearDisplay() {
  bs.value = "";
}

function calculate() {
  try {
    let result = eval(bs.value); // Warning: eval() can be risky for untrusted input
    bs.value = result;
  } catch (e) {
    alert(e.message);
  }
}
