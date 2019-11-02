function test() {
    alert("Funcion test ejecutada");

   let input = document.getElementById("input");
   console.log(input.value);
    let prueba = document.getElementById("prueba");
    console.log(prueba.innerHTML);
    prueba.innerHTML = input.value; 
    prueba.classList.add("is-red");
}