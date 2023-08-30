import { LitElement, html} from "lit-element";
import stylesScss from './home-componentStyle';


export class Home extends LitElement{
  render() {
      return html `

      <header class="header">
      <nav class="nav">
        <img class="nav-logo" src="./img/logo.png" alt="">
        <a href="#" class="logo nav-link">Usuarios</a>
        </ul>
      </nav>
      <div class="menu-hamburger">
        <img class="nav-toggle" src="./img/menu.png" alt="">
    </div>
    </header>
    <div class="container">
    <nav class="nav-bar">
      <ul>
        <li class="items"><i class="fa-sharp fa-solid fa-football"></i><a class="navbar-text" href="#">Home</a></li>
        <li class="items"><i class="fa-sharp fa-solid fa-football"></i><a class="navbar-text" href="#">Presidencia</a></li>
        <li class="items"><i class="fa-sharp fa-solid fa-football"></i><a class="navbar-text" href="#">Presidencia</a></li>
        <li class="items"><i class="fa-sharp fa-solid fa-football"></i><a class="navbar-text" href="#">Vice-presidencia</a></li>
        <li class="items"><i class="fa-sharp fa-solid fa-football"></i><a class="navbar-text" href="#">Secretara</a></li>
        <li class="items"><i class="fa-sharp fa-solid fa-football"></i><a class="navbar-text" href="#">Tesoreria</a></li>
        <li class="items"><i class="fa-sharp fa-solid fa-football"></i><a class="navbar-text" href="#">Revisoria Fiscal</a></li>
        <li class="items"><i class="fa-sharp fa-solid fa-football"></i><a class="navbar-text" href="#">Lista Afiliados</a></li>
        <li class="items"><i class="fa-sharp fa-solid fa-football"></i><a class="navbar-text" href="#">Lista Jugadores</a></li>
        <li class="items"><i class="fa-sharp fa-solid fa-football"></i><a class="navbar-text" href="#">Lista Coach's</a></li>
      </ul>
    </nav>
    <div class="modules"> 
      <div class="module"> 
          <div class="module-content"> 
              <h2>Actas</h2> 
              <img class="img-cuadricula" src="./img/actas.png" alt="Imagen 1"> 
          </div> 
          <button><a href="" class="a">Gestionar</a></button> 
      </div> 

      <div class="module"> 
          <div class="module-content"> 
              <h2>Certificados</h2> 
              <img class="img-cuadricula" src="./img/certificado.png" alt="Imagen 2"> 
          </div> 
          <button><a href="" class="a">Gestionar</a></button> 
      </div> 

      <div class="module"> 
          <div class="module-content"> 
              <h2>Reuniones</h2> 
              <img class="img-cuadricula" src="./img/sala-de-reuniones.png" alt="Imagen 3"> 
          </div> 
          <button><a href="" class="a">Gestionar</a></button> 
      </div> 
      <div class="module"> 
          <div class="module-content"> 
              <h2>Asistencia</h2> 
              <img class="img-cuadricula" src="./img/asistencia.png" alt="Imagen 4"> 
          </div> 
          <button><a href="" class="a">Gestionar</a></button> 
      </div> 

      <div class="module"> 
          <div class="module-content"> 
              <h2>Comunicación</h2> 
              <img class="img-cuadricula" src="./img/charla.png" alt="Imagen 5"> 
          </div> 
          <button><a href="" class="a">Gestionar</a></button> 
      </div> 

      <div class="module"> 
          <div class="module-content"> 
              <h2>Estado de Cuenta</h2> 
              <img class="img-cuadricula" src="./img/charla.png" alt="Imagen 6"> 
          </div> 
          <button><a href="" class="a">Gestionar</a></button> 
      </div> 
  </div> 
    </div> 
      

`
  }

  static get styles(){
    return [stylesScss]
  }

}

customElements.define("home-component", Home)