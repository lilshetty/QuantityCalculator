function calculateQuantity() {
    const risk = parseFloat(document.getElementById("risk").value);
    const entry = parseFloat(document.getElementById("entry").value);
    const stopLoss = parseFloat(document.getElementById("stopLoss").value);
  
    const resultDiv = document.getElementById("result");
  
    if (!risk || !entry || !stopLoss || entry <= stopLoss) {
      resultDiv.innerHTML = "⚠ Invalid input. Ensure entry > stop loss and valid values.";
      resultDiv.style.color = "#dc3545";  // Red color for error
      return;
    }
  
    const quantity = Math.floor(risk / (entry - stopLoss));
    resultDiv.innerHTML = `Quantity: ${quantity} shares`;
    resultDiv.style.color = "#28a745";  // Green color for valid result
  }