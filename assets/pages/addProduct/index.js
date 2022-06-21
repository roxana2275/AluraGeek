import { lista } from '../../js/fakeAPI/index.js';
import { updateList } from '../../js/index.js';
import { footer, nav } from '../../js/navHeader/index.js'

window.onload = function () {

  /*const titulo = document.getElementById('categoria');
  const alt = document.getElementById('alt');
  const nombre = document.getElementById('nombre');
  const precio = document.getElementById('precio');
  const descripcion = document.getElementById('descripcion');
  const img = document.querySelectorAll("#select");;
  const file = document.querySelector("[data-imgFile]");
  const enviar = document.querySelector('[data-send]');*/

  const paths = {
    controle: "../../img/controle.png",
    alura: "../../img/alura.png",
    geek: "../../img/geek.png",
    lupa: "../../img/lupa.png",
    home: "../../../index.html",
    url: "../product/index.html",
    login: "../login/index.html",
    inputShow: true,
  }

  nav(paths);
  footer(paths);

}


