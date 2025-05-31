document.addEventListener("DOMContentLoaded", function () {
  let cuenta = document.getElementById("dorco");
  let correo = document.getElementById("imeil");
  let contra = document.getElementById("pass");
  let perf = document.getElementById("perfil");
  let boton = document.getElementById("btn");
  let pafuera = document.getElementById("salida");
  let borratodo = document.createElement("button");
  let algo = document.getElementById("cualquiercosa");

  function yavete() {
    while (pafuera.firstChild) {
      pafuera.removeChild(pafuera.firstChild);
    }
  }

  borratodo.textContent = "BORRAR TODOO";
  borratodo.addEventListener("click", yavete); //FORMA 1 FUNCION CREQADA
  algo.appendChild(borratodo);

  boton.addEventListener("click", function () { // FORMA  2 FUNCION ANONIMA
    yavete(); //funcion PONER PARENTESIS PARA LLAMAR AAAAA
    //obtener todo
    let gc = correo.value;
    let gc2 = cuenta.value;
    let gc3 = contra.value;
    let perfil = perf.value;
    const hoy = new Date();
    const dia = hoy.getDate().toString().padStart(2, "0");
    const mes = (hoy.getMonth() + 1).toString().padStart(2, "0"); // +1 porque enero es 0
    const anio = hoy.getFullYear();
    const fecha = `${dia}/${mes}/${anio}`;
    //luego generar todo
    const lineas = [
      "━━━━━━━━━━━━━━━ ࣪ ִֶָ☾.𝑳𝒖𝒏𝒂𝒍𝒊  𝑺𝒕𝒓𝒆𝒂𝒎𝒊𝒏𝒈 ࣪ ִֶָ☾.━━━━━━━━━━━━━━━━━━",
      "" + gc2,
      "📧Correo: " + gc,
      "🔑Contraseña: " + gc3,
      "👤Perfil: " + perfil,
      "F. Entrega: " + fecha,
      "━━━━━━━━━━━━━━━",
      " ⚠Reglas Básicas⚠ ",
      "✔No modificar datos",
      "✔Un solo dispositivos",
      "✔Puedes poner PIN o cambiar ícono",
      "✔12 Hrs para confirmar el acceso a la cuenta, pasado este tiempo es REPORTE",
      "━━━━━━━━━━━━━━━",
      "🌟¡Gracias por elegirnos!🌟",
      "━━━━━━━━━━━━━━━━━━",
    ];
    // Crea y agrega cada línea como un <p>
    lineas.forEach((texto) => { // 
      const p = document.createElement("p"); //crea p para guardar
      p.textContent = texto; //contenido del texto en p
      pafuera.appendChild(p); // lo mete pafuera
    });
  });
});
