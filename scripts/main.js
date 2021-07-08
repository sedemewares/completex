let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/completex.png') {
      miImage.setAttribute('src','images/sushipletex.jpg');
    } else {
      miImage.setAttribute('src', 'images/completex.png');
    }
}

/*document.querySelector('html').onclick = function() {
    alert('Acepta que quiere un completex?');
}
*/

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = 'Bienvenido ' + miNombre + 'x al completex';
    }
  }

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = nombreAlmacenado + ' quiere un completex!';
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}



