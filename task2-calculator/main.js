let wraper = document.getElementById('wraper'),
    safeResult = document.getElementById('safe'),
    display = document.getElementById('resultField'),
    _local = window.localStorage;

function calculate (n1, operator, n2) {
    let result = '';
    if (operator === '+') {
        result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === '-') {
        result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === '*') {
        result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === '/') {
        result = parseFloat(n1) / parseFloat(n2);
    }
    return result;
}

wraper.addEventListener('click', (e)=>{
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const wraper = document.getElementById('wraper');
    const displayedNum = display.textContent;
    const previousKeyType = wraper.dataset.previousKeyType;

    switch (true) {
        case action == '+':
        case action == '-':
        case action == '*':
        case action == '/':
            wraper.dataset.previousKeyType = "operator";
            wraper.dataset.firstValue = displayedNum;
            wraper.dataset.operator = action;
            break;
        case action == 'clear':
            display.textContent = "0";
            break;
        case action == "=":
            const firstValue = wraper.dataset.firstValue;
            const operator = wraper.dataset.operator;
            const secondValue = displayedNum;
            display.textContent = calculate(firstValue, operator, secondValue);
    }

    if (!action) {
        if (displayedNum === '0' || previousKeyType === 'operator' || displayedNum === _local.getItem("result")) {
            display.textContent = keyContent;
            wraper.dataset.previousKeyType = "";
        } else {
            display.textContent = displayedNum + keyContent;
        }
    }
});

safeResult.addEventListener('click', function () {
        _local.setItem('result', (function () {
            _local.setItem('lastResult', 'true');
            return display.textContent;
        })());
});

if (_local.getItem('lastResult')) {
    document.getElementById('resultField').innerText =  _local.getItem("result");
}





