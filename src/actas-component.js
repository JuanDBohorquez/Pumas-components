import { LitElement, html} from "lit-element";
import stylesScss from './actas-componentStyle';


export class Actas extends LitElement{
  render() {
      return html `

      
      <header> 
        <header class="xd"> 
            <div class="logo"><img src="img/logo.png" alt="Imagen"></div> 
            <h1>usuarios</h1>
        </header> 
             
    </header> 

        
    <div class="dropdown">
        <div class="menu-icon">&#9776;</div>
        <ul class="menu">
            <li><a href="index.html">Vista 1</a></li>
            <li><a href="home.html">Vista 2</a></li>
            <li><a href="solicitudes.html">Vista 3</a></li>
            <li><a href="actas.html">Vista 4</a></li>
            <li><a href="pendientes.html">Vista 5</a></li>
        </ul>
    </div>

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

    <div class="row1">
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

    <div class="acta">
        <h1>Acta</h1>
        <h3>Por favor seleccione el año a consultar</h3>

        <label for="opciones"></label>
        <select id="opciones">
            <option value=""></option>
           
        </select>
    </div>
    
    <div class="acta2">
        <h3>Por favor seleccione el mes a consultar</h3>
        <label for="opciones2"></label>
        <select id="opciones2">
            <option value=""></option>
            
        </select>
    </div>

    <div class="contorno">
        <div class="table-container">
            <table>
                <tr>
                    <th class="narrow-column">Nº de Referencia</th>
                    <th>Titulo</th>
                    <th>Fecha</th>
                    <th>Url detalle</th>
                </tr>
                <tr>
                    <td class="narrow-column"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="narrow-column"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="narrow-column"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="narrow-column"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="narrow-column"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="narrow-column"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>

`
  }

  static get styles(){
    return [stylesScss]
  }
}

customElements.define("actas-component", Actas)