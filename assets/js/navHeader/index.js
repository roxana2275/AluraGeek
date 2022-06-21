
const logo = (paths) => {
  const logoLink = `
  <a href="${paths.home}">
      <img src="${paths.controle}" alt="control de videogame">
      <img src="${paths.alura}" alt="alura">
      <img src="${paths.geek}" alt="geek">
  </a>
  `
  return logoLink;
}


export function nav(paths) {

  const navHeader = document.querySelector('[data-nav]');
  const logoLink = logo(paths)
  const html = `
  <div class="navHeader--left">
    <div class="logo">
      ${logoLink}
    </div>
    <div class="navHeader--search">
      <input type="text" class="navHeader--search--input" placeholder="¿Que deseas buscar?"/>
      <img src="${paths.lupa}" alt="imagem lupa" class="navHeader--search--img">
    </div>
  </div>
  ${paths.login && (`<div class="navHeader--login"><a href="${paths.login}" class="btn--login">Login</a><img class="lupa--hidden" src="${paths.lupa}" alt="lupa de busqueda" data-input/></div><input type="text" class="lupa--hidden--input" placeholder="¿Que desea buscar?"/>`)}
  `;

  navHeader.innerHTML = html;

  if(paths.inputShow){
    inputShow();
  }

}

export function inputShow(){
  const img = document.querySelector('[data-input]')
  img.addEventListener('click',()=>{
    document.querySelector('.lupa--hidden--input').classList.toggle('show');
    document.querySelector('.lupa--hidden--input').focus();
  })
  
  document.querySelector('.lupa--hidden--input').addEventListener('blur',()=>{
    document.querySelector('.lupa--hidden--input').classList.toggle('show');
  })  
}


export function footer(paths) {

  const footer = document.querySelector('[data-footer]');
  const logoLink = logo(paths)
  const html = `
  <section class="footer">
    <div class="container">
      <div class="logo">
        ${logoLink}
      </div>
      <div class="footer--text">
        <a href="#">Quienes somos</a href="">
        <a href="#">Política de privacidad</a href="">
        <a href="#">Programa de fidelidad</a href="">
        <a href="#">Nuestras Tiendas</a href="">
        <a href="#">Quero ser franquiciado</a href="">
        <a href="#">Anúncie aquí</a href="">
      </div>
    </div>
    <form class="footer--forms">
      <p>Hable con conosco</p>
      <input type="text" placeholder="André Lisboa" required/>
      <textarea placeholder="Escribe tu mensaje" required></textarea>
      <input type="submit" value="Enviar mensage" class="btn--submit" data-submit />
    </form>
  </section>
  <div class="footer--dev">
  <p>Desarrollado por Roxana Ciccone</p>
  <p>2022</p>
  </div>
  `;

  footer.innerHTML = html;
}