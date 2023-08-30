import { LitElement, html} from "lit-element";
import stylesScss from './login-componentStyle';


export class Login extends LitElement{
  render() {
      return html `

      
      <title>Formulario Login</title>
      <section class="form-main">
        <div class="form-content">
            <div class="box">

            
                <h3>Pumas DC</h3>

                <form action="">
                    <div class="input-box">
                        <input type="text" placeholder="Usuario" class="input-control">
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="Contraseña" class="input-control">
                        
                    </div>
                    <button type="submit" class="btn">Ingresar</button>
                </form>
                <p><a href="#" class="gradient-text" >Olvido su Contraseña?</a></p>
            </div>
        </div>
    </section>

`
  }

  static get styles(){
    return [stylesScss]
  }
}

customElements.define("login-component", Login)