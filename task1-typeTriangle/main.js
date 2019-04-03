function Triangle(a,b,c) {
    if (arguments.length == 3) {
        let arr = [a, b, c],
            sumOfMin,
            squareOfMin,
            squareOfMax;

        arr.sort(compareNumeric);
        sumOfMin = arr[0] + arr[1];
        squareOfMin = Math.pow(arr[0], 2) + Math.pow(arr[1], 2);
        squareOfMax = Math.pow(arr[2], 2);

        function compareNumeric(a, b) {
            return a - b;
        }

        function getTypeTriangle() {
            let case1 = "не существует",
                case2 = "остроугольный",
                case3 = "тупоугольный",
                case4 = "прямоугольный",
                result;

            switch (true) {
                case sumOfMin <= arr[2]:
                    result = case1;
                    break;
                case squareOfMin == squareOfMax:
                    result = case4;
                    break;
                case squareOfMin < squareOfMax:
                    result = case3;
                    break;
                default:
                    result = case2;
            }
            return result;
        }
        var answer = `Ваш треугольник ${getTypeTriangle()}`;
    } else {
        alert("Введите три аргумента");
    }

    console.log(answer);
}
Triangle(14,10,8);