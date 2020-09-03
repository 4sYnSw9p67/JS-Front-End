function solve() {
    let clearBtn = document.querySelector("button.clear");
    let expressionBtnCollection = document.querySelectorAll("div.keys button");
    let expressionOutput = document.querySelector("#expressionOutput");
    let resultOutput = document.querySelector("#resultOutput");
    let regexIntorDoubleChars = /[0-9]|\.+/g;
    let regexDouble = /\d+.+\d+/g;
    let regexExpression = /(\d+.+\d|\d)+\s+[\/\*\-+]+\s+(\d+.+\d|\d)+/g;

    clearBtn.addEventListener("click", clearWindow);

    for (let i = 0; i < expressionBtnCollection.length; i++) {
        let button = expressionBtnCollection[i];
        if (button.textContent == "=") {
            button.addEventListener("click", evaluateExpression);
            continue;
        }
        button.addEventListener("click", addBtnText);
    }

    function clearWindow() {
        expressionOutput.textContent = "";
        resultOutput.textContent = "";
    }

    function addBtnText() {
        if (this.textContent.match(regexIntorDoubleChars)) {
            expressionOutput.textContent += this.textContent;
        } else {
            expressionOutput.textContent += " " + this.textContent + " ";
        }
    }

    function evaluateExpression() {
        let result = "";
        let expression = expressionOutput.textContent.replace("x", "*");
        if (expression.match(regexExpression)) {
          result = eval(expression);
        } else {
          result = "NaN";
        }
        console.log(result);
        resultOutput.textContent = result;
    }
}
