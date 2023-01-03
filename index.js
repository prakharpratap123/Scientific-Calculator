let string = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let btntext = e.target.innerText;
    if (btntext == "=") {
      string = eval(string);
      document.querySelector("input").value = string.toFixed(6);
    } else if (btntext == "AC") {
      string = "";
      document.querySelector("input").value = string;
    } 
    
    else if (btntext == "CE") {
      string = string.substring(0, string.length - 1);
      document.querySelector("input").value = string;
    }
    
    else if (btntext == "π") {
      string += Math.PI.toFixed(6);
      document.querySelector("input").value = string;
    } 
  
    
    else if (btntext == "e") {
      string += Math.E.toFixed(6);
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string += btntext;
      document.querySelector("input").value = string;
    }
  });
});


function factorial() {
  let n = document.getElementById("screen").value;
  console.log(n);
  let result = 1;

  for (let i = n; i >= 1; i--) {
    result *= i;
  }
  console.log(result);
  document.getElementById("screen").value = result;
}



function sin() {
  let n = document.getElementById("screen").value;

  let result = Math.sin((n * Math.PI) / 180);
  // console.log(result)
  document.getElementById("screen").value = result.toFixed(6);
}
function cos() {
  let n = document.getElementById("screen").value;

  let result = Math.cos((n * Math.PI) / 180);
  document.getElementById("screen").value = result.toFixed(6);
  
}
function tan() {
  let n = document.getElementById("screen").value;

  let result = Math.tan((n * Math.PI) / 180);
  document.getElementById("screen").value = result.toFixed(6);
}
function log() {
  let n = document.getElementById("screen").value;

  let result = Math.log10(n);
  // console.log(result)
  document.getElementById("screen").value = result.toFixed(6);
}
function cube() {
  let n = document.getElementById("screen").value;

  let result = Math.pow(n, 3);
  document.getElementById("screen").value = result.toFixed(6);
}
function square() {
  let n = document.getElementById("screen").value;

  let result = Math.pow(n, 2);
  document.getElementById("screen").value = result.toFixed(6);
}
function sqrt() {
  let n = document.getElementById("screen").value;

  let result = Math.pow(n, 0.5);
  document.getElementById("screen").value = result.toFixed(6);
}
