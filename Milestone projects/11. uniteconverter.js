

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }

const celsius = 25;
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius} degrees Celsius is ${fahrenheit} degrees Fahrenheit.`);
