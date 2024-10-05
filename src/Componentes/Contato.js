import git from "../Assets/icon-github.png"
import linkedin from "../Assets/icon-linkedin.png"


function Contato() {
      return (
            <div>
                  <h1 id="tituloContato">Contato</h1>
                  <div id="contatos">
                        <div id="infos">
                              <p>Osasco, São Paulo</p>
                              <p>[11]98438-7945</p>
                              <p>pedro.zorzeteb@gmail.com</p>
                        </div>
                        <div id="iconsContato">
                              <img alt="Ícone que simboliza o github" className="icon" src={git}/>
                              <img alt="Ícone que simboliza o linkedIn" className="icon" src={linkedin}/>
                        </div>
                  </div>
            </div>
      )
}

export default Contato