/* 

**Developed by Raul Arroyo Gonzalez 2ºDAW**

Crearemos una fichero externo denominado relacion1-3.js donde se incluyan 
todas las funciones, y generaremos un fichero html para para uno de los ejercicios.
En logar de almacenar en una variable solicitaremos los datos necesarios al
usuario.


### 1. The Age Calculator: function ageCalculator
*Forgot how old someone is? Calculate it!*
- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", 
  substituting the values.
*/

function ageCalculator() {
  var birth = parseInt(prompt("Ejercio 1: Age Calculator\nIntroduce el año de nacimiento"));

  const year = parseInt(2023);

  console.log(""+(year-birth));

  document.write("Ejercicio 1<br>Año introducido: "+birth+"<br>Resultado :"+(year-birth)+" o "+((year-birth)-1)+"<br><br>"); 
}


/*
### 2. The Lifetime Supply Calculator: function supplyCalculator
*Ever wonder how much a "lifetime supply" of your favorite snack is? 
Wonder no more!*
- Store your current age into a variable.
- Store a maximum age into a variable.
- Store an estimated amount per day (as a number).
- Calculate how many you would eat total for the rest of your life.
- Output the result to the screen like so: "You will need NN to last you 
  until the ripe old age of X".
*/

function supplyCalculator() {
  var currentAge = parseInt(prompt("Ejercicio 2: Lifetime Supply Calculator\nIntroduce tu edad actual"));
  var perDay = parseInt(prompt("Ejercicio 2: Lifetime Supply Calculator\nIntroduce la cantidad diaria de Lays Campesinas"));

  const maxAge = parseInt(100);

  console.log("Max age: "+maxAge+"\nCurrent age: "+currentAge);
  console.log("Snacks per day: "+perDay);

  var restLife = maxAge-currentAge;

  console.log("Rest of life = "+restLife+" years");

  var snackLife = restLife*perDay;

  document.write("Ejercicio 2<br>Edad introducida: "+currentAge+"<br>");
  document.write("Te quedan por comer "+snackLife+" Lays Campesinas en "+restLife+" años hasta que mueras a los "+maxAge+" años.");
}


/*
### 3. The Geometrizer: function circumference, function area
Calculate properties of a circle, searching the internet for definitions if not remember.
- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/

function circumference() {
  var radius = parseFloat(prompt("Ejercicio3: The Geometrizer\nIntroduce el radio de tu circunferencia"));

  var circ = 2*Math.PI*radius;

  console.log("Radio introducido: "+radius+"\nCircunferencia = 2·pi·r = "+circ);

  document.write("<br><br>Ejercicio 3<br>Radio introducido: "+radius+"<br>Circunferencia = 2·pi·r = "+circ);
}


/*
### 4. The Temperature Converter convertTemperature
It's hot out! Let's make a converter, and again you'll have to search the internet how to do it.
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

function convertTemperature() {
  var celsius = parseFloat(prompt("Ejercicio 4: The Temperature Converter\nIntroduce los Cº"));  

  var celsius2Fahrenheit = (1.8*celsius) + 32;
  
  console.log("Cº introducidos: "+celsius+"\nEquivale en Fº: "+celsius2Fahrenheit);

  var fahrenheit = celsius2Fahrenheit;

  document.write("<br><br>Ejercicio 4<br>Cº introducidos: "+celsius+"<br>"+celsius+"cº son "+celsius2Fahrenheit+"fº<br><br>");

  var fahrenheit2Celsius = (fahrenheit-32)/1.8;

  document.write("Revirtiendo conversión...<br>"+fahrenheit+"fº son "+fahrenheit2Celsius+"cº");
}