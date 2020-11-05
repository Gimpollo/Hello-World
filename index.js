let hello = document.createElement("div");
hello.id="helloWorld";
let world = prompt("Hello World?")
hello.innerHTML = `<h1>${world}</h1>`
document.body.appendChild(hello);