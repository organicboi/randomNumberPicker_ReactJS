// Predefined arrays
const arrays = [
  { name: "panna 1", values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { name: "panna 2", values: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
  { name: "panna 3", values: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30] },
  { name: "panna 4", values: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40] },
  { name: "panna 5", values: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50] },
  { name: "panna 6", values: [51, 52, 53, 54, 55, 56, 57, 58, 59, 60] },
  { name: "panna 7", values: [61, 62, 63, 64, 65, 66, 67, 68, 69, 70] },
  { name: "panna 8", values: [71, 72, 73, 74, 75, 76, 77, 78, 79, 80] },
  { name: "panna 9", values: [81, 82, 83, 84, 85, 86, 87, 88, 89, 90] },
  { name: "panna 10", values: [91, 92, 93, 94, 95, 96, 97, 98, 99, 100] },
];

// Function to pick random numbers without duplicates
function pickRandomNumbers(array, count) {
  const randomNumbers = [];
  const availableIndexes = array.values.map((_, index) => index);

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * availableIndexes.length);
    const selectedIndex = availableIndexes[randomIndex];

    randomNumbers.push(array.values[selectedIndex]);
    availableIndexes.splice(randomIndex, 1);
  }

  return randomNumbers;
}

// Usage
const selectElement = document.getElementById("array-select");
const resultElement = document.getElementById("result");

function generateRandomNumbers() {
  const selectedArrayName = selectElement.value;
  const selectedArray = arrays.find(
    (array) => array.name === selectedArrayName
  );

  if (selectedArray) {
    const randomNumbers = pickRandomNumbers(selectedArray, 10);
    resultElement.textContent = randomNumbers.join(", ");
  } else {
    resultElement.textContent = "Invalid array selection.";
  }
}
//copy code
// function copyText() {
//   const inputField = document.getElementById("result");
//   inputField.select();
//   document.execCommand("copy");
//     alert("Text copied to clipboard!");
// }

//copy the beutifed text
function copyText() {
  var selectedText = document.getElementById("text-select").value;
  var divText = document.getElementById("result").innerText;
  var amount = document.getElementById("amount").value;
  console.log(selectedText);

  // Replace the placeholder text with the selected text
  //   var copiedText = divText.replace("Selected Text", selectedText);

  var finalText = selectedText + "\n\n" + divText + "....= " + amount + "/-";
  console.log(finalText);

  var copyText = document.createElement("textarea");
  copyText.value = finalText;
  document.body.appendChild(copyText);
  copyText.select();
  document.execCommand("copy");
  document.body.removeChild(copyText);
  console.log(amount);
  alert("Text copied: " + finalText);
}
