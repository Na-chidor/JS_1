function calculateArea(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

let a = 5;
let b = 6;
let c = 7;

let area = calculateArea(a, b, c);

// Output the result
console.log("The area of the triangle is: " + area.toFixed(2));
