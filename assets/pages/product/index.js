import { lista } from '../../js/fakeAPI/index.js'
import { containerCards, updateList } from '../../js/index.js'
import { footer, nav } from '../../js/navHeader/index.js'

const productInfo = (produto)=>{
  const productInfos = document.querySelector('[data-product]')
  
  const html = `
  <div class="product--img" id="teste" style="background-image: url('${produto.img}');background-size: contain ;"></div>
  <div class="product--infos">
    <h1>${produto.nombre}</h1>
    <p>$${produto.precio}</p>
    <p>${produto.descripcion}</p>
  </div>
  `
  productInfos.innerHTML = html;
}


window.onload = function () {

  
  const url = new URL(window.location)
  const listIndex = url.searchParams.get('listIndex')
  const id = url.searchParams.get('id')
  
  updateList();
  
  const paths = {
    controle: "../../img/controle.png",
    alura: "../../img/alura.png",
    geek: "../../img/geek.png",
    lupa: "../../img/lupa.png",
    home: "../../../index.html",
    imgSeta: "../../img/seta.png",
    allProducts: "../allproducts/index.html",
    productList: lista[listIndex],
    productAmount: '',
    listIndex: listIndex,
    url: "",
    login: "../login/index.html",
    inputShow: true,
  } 
  

  const productURL = ''
  containerCards(paths);
  const title = document.querySelector('[data-title]')
  title.innerHTML = "Produtos similares"


  

  nav(paths);
  productInfo(lista[listIndex].produtos[id-1].infos)
  footer(paths);

}