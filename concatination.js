function addJavaScriptPrefix(str) {
    if (str.startsWith("JavaScript")) {
        return str;
    } else {
        return "JavaScript " + str;
    }
}

let inputString = "is a popular language!";
let result = addJavaScriptPrefix(inputString);

console.log(result);
