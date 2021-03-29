function Exchange() {
    let number = document.getElementById("number").value;
    let result = document.getElementById("result");
    let currFr = document.getElementById("From").value;
    let currTo = document.getElementById("To").value;
  
    if (number >= 0){
      if (currFr === "USD") {
        if (currTo === "VND") {
          n = number * 23000;
        }
        if (currTo === "USD") {
          n = number * 1;
        }
      }
      if (currFr === "VND") {
          if (currTo === "VND") {
            n = number * 1;
          }
          if (currTo === "USD") {
            n = number * 0.000044;
          }
        }
        result.innerText = `${number} ${currFr} = ${n} ${currTo}`;
      }else {
        result.innerText = "Please enter possitive number";
      }
  }
  
  function reset() {
    location.reload();
  }