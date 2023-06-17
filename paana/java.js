// Predefined arrays
const arrays = [
  {
    name: "panna 1",
    values: [
      137, 128, 146, 236, 245, 290, 380, 470, 489, 560, 678, 579, 119, 155, 227,
      335, 344, 399, 588, 669, 777, 100,
    ],
  },
  {
    name: "panna 2",
    values: [
      129, 138, 147, 156, 237, 246, 345, 390, 480, 570, 589, 679, 110, 228, 255,
      336, 499, 660, 688, 778, 200, 444,
    ],
  },
  {
    name: "panna 3",
    values: [
      120, 139, 148, 157, 238, 247, 256, 346, 490, 580, 670, 689, 166, 229, 337,
      355, 445, 599, 779, 788, 300, 111,
    ],
  },
  {
    name: "panna 4",
    values: [
      130, 149, 158, 167, 239, 248, 257, 347, 356, 590, 680, 789, 112, 220, 266,
      338, 446, 455, 699, 770, 400, 888,
    ],
  },
  {
    name: "panna 5",
    values: [
      140, 159, 168, 230, 249, 258, 267, 348, 357, 456, 690, 780, 113, 122, 177,
      339, 366, 447, 799, 889, 500, 555,
    ],
  },
  {
    name: "panna 6",
    values: [
      123, 150, 169, 178, 240, 259, 268, 349, 358, 367, 457, 790, 114, 277, 330,
      448, 466, 556, 880, 899, 600, 222,
    ],
  },
  {
    name: "panna 7",
    values: [
      124, 160, 179, 250, 269, 278, 340, 359, 368, 458, 467, 890, 115, 133, 188,
      223, 377, 449, 557, 566, 700, 999,
    ],
  },
  {
    name: "panna 8",
    values: [
      125, 134, 170, 189, 260, 279, 350, 369, 378, 459, 468, 567, 116, 224, 233,
      288, 440, 477, 558, 990, 800, 666,
    ],
  },
  {
    name: "panna 9",
    values: [
      126, 135, 180, 234, 270, 289, 360, 379, 450, 469, 478, 568, 117, 144, 199,
      225, 388, 559, 577, 667, 900, 333,
    ],
  },
  {
    name: "panna 10",
    values: [
      127, 136, 145, 190, 235, 280, 370, 389, 460, 479, 569, 578, 118, 226, 244,
      299, 334, 488, 668, 677, 0o0, 550,
    ],
  },
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
