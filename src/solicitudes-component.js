import { LitElement, html} from "lit-element";
import stylesScss from './solicitudes-componentStyle';


export class Solicitudes extends LitElement{
  render() {
      return html `

      
      <header> 
            <header class="lg"> 
                <div class="logo"><img src="img/logo.png" alt="Imagen"></div> 
                <h1>usuarios</h1> 
            </header> 
             
        </header> 
     
<div class="gray-box">
        <ul class="list">
            <li><img src="img/balon.png" alt="Icono 1">Home</li>
            <li><img src="img/balon.png" alt="Icono 2">Presidencia</li>
            <li><img src="img/balon.png" alt="Icono 3">Presidencia</li>
            <li><img src="img/balon.png" alt="Icono 4">Vice-presidencia</li>
            <li><img src="img/balon.png" alt="Icono 5">Secretaria</li>
            <li><img src="img/balon.png" alt="Icono 6">Tesoreria</li>
            <li><img src="img/balon.png" alt="Icono 7">Revisoria fiscal</li>
            <li><img src="img/balon.png" alt="Icono 8">Lista afiliados</li>
            <li><img src="img/balon.png" alt="Icono 9">Lista jugadores</li>
            <li><img src="img/balon.png" alt="Icono 10">Lista coach's</li>
        </ul>
        
    </div>
    <div class="row3">
        <div class="card">
            <img src="img/solicitudes.png" >
            <h2>Solicitudes</h2>
            <img src="img/proximo.png" >
        </div>
        <div class="card">
            <img src="img/actas.png" >
            <h2>Actas</h2>
            <img src="img/proximo.png" >
        </div>
        <div class="card">
            <img src="img/pendientes.png" >
            <h2>Pendientes</h2>
            <img src="img/proximo.png" >
        </div>
    </div>
             
    <div class="solicitud">
        <h1>Solicitudes</h1>
        <h3>Por favor seleccione el tipo de solicitud</h3>
            <label for="opci"></label>
            <select id="opci">
                <option value=""></option>
    
            </select>
        </div>
        <div class="contorno">
            <div class="elemento">
              <input type="text" placeholder="Elemento a comprar" required>
              
            </div>
            <div class="valor">
              <input type="text" placeholder="Valor de la compra" required>
              
            </div>
            <div class="unidades">
              <label for="opciones"></label>
              <select id="opciones">
                <option value="">Unidades a comprar</option>
                
              </select>
            </div>
            <div class="fecha">
              <input type="text" placeholder="Fecha de la compra" required>
              
            </div>
            <div class="descripcion">
              <input type="text" placeholder="Descripcion ">
              
            </div>
            <button>Gestionar</button>
          </div>

`
  }

  static get styles(){
    return [stylesScss]
  }
}

customElements.define("solicitudes-component", Solicitudes)