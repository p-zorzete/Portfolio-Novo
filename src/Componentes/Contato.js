import git from "../Assets/github.png"
import linkedin from "../Assets/linkedIn.png"
import curriculo from "../Assets/curriculo.png"


function Contato() {
      return (
            <div id="Contato">
                  <h1 className="tituloBranco">Contato</h1>
                  <div id="contatos">
                        <div>
                              <p className="infos">Osasco, São Paulo</p>
                              <p className="infos">[11]98438-7945</p>
                              <p className="infos">pedro.zorzeteb@gmail.com</p>
                        </div>
                        <div id="iconsContato">
                              <img alt="Ícone que simboliza o github" className="icones" src={git}/>
                              <img alt="Ícone que simboliza o linkedIn" className="icones" src={linkedin}/>
                              <img alt="Ícone que simboliza o linkedIn" className="icones" src={curriculo}/>
                        </div>
                  </div>
            </div>
      )
}

export default Contato