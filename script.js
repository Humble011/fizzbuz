function fizzBuzz() {
    var input = document.getElementById("inputNumber").value;
    var result = document.getElementById("result");
    if (input == 0) {
        result.innerHTML = "Invalid input";
        result.style.color = "red";
    } else if (input % 3 == 0 && input % 5 == 0) {
        result.innerHTML = "FizzBuzz!";
        result.style.color = "black";
    } else if (input % 3 == 0) {
        result.innerHTML = "Fizz!";
        result.style.color = "black";
    } else if (input % 5 == 0) {
        result.innerHTML = "Buzz!";
        result.style.color = "black";
    } else {
        result.innerHTML = input;
        result.style.color = "black";
    }
}