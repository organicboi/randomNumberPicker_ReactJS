function generateCombinations() {
  var numberInput = document.getElementById("numberInput").value;
  var numbers = numberInput.split("").map(Number);

  var combinations = [];

  // Generate all possible combinations
  for (var i = 0; i < numbers.length - 2; i++) {
    for (var j = i + 1; j < numbers.length - 1; j++) {
      for (var k = j + 1; k < numbers.length; k++) {
        var combination = "" + numbers[i] + numbers[j] + numbers[k];
        combinations.push(combination);
      }
    }
  }

  // Display the combinations
  var resultDiv = document.getElementById("result");
  var totalCountDiv = document.getElementById("totalCount");

  // resultDiv.innerHTML = "<h2>Combinations:</h2>";

  var count = combinations.length;
  totalCountDiv.innerHTML += "<p>Total combinations: " + count + "</p>";

  for (var i = 0; i < combinations.length; i++) {
    resultDiv.innerHTML += combinations[i] + "<br>";
  }
}

function copyResult() {
  var resultText = document.getElementById("result").innerText;
  var marketName = document.getElementById("marketName").value;
  var playAmount = document.getElementById("playAmount").value;

  var combinations = resultText.split(/\s+/).filter(Boolean); // Split the result text by whitespace and remove empty elements
  var predefinedText = marketName + "\n\n";
  var formattedText = predefinedText;

  for (var i = 0; i < combinations.length; i++) {
    var combination = combinations[i];
    formattedText += combination;

    if (i !== combinations.length - 1) {
      formattedText += ",";
    }

    // formattedText += "\n";
  }

  var tempInput = document.createElement("textarea");
  tempInput.value = formattedText + "\n\n" + "total= " + playAmount + "/-";
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Result copied to clipboard!");
}
