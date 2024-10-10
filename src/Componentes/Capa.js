import { Link } from "react-router-dom";
import canto from "../Assets/Canto.png"
import seta from "../Assets/seta.png"

function Capa() {
      return (
            <div>
                  <div id="capa">
                        <div id="apresentacao">
                              <h1 className="titulo tituloRosa">Bem Vindo</h1>
                              <h2 className="resumo">Meu nome é Pedro Zorzete. Tenho 23 anos e sou um estudante de TI com foco em programação e desenvolvimento, estudo o back e o front possuindo conhecimento nessas duas partes do desenvolvimento.</h2>
                        </div>
                        <nav id="menuLateral">
                              <h3 id="textoMenu">Menu</h3>
                              <img alt="Canto de um quadro, sendo a parte superior" className="cantos" id="cantoSuperior" src={canto}/>
                              <ul id="listaMenu">
                                    <li className="itemMenu">
                                          <Link to="#sobre">
                                                <span class="linkTexto">Sobre mim</span>
                                          </Link>
                                    </li>
                                    <li className="itemMenu">
                                          <Link to="#linguagens">
                                                <span className="linkTexto">Linguagens</span>
                                          </Link>
                                    </li>
                                    <li className="itemMenu">
                                          <Link to="#habilidades">
                                                <span className="linkTexto">Habilidades</span>
                                          </Link>
                                    </li>
                                    <li className="itemMenu">
                                          <Link to="#projetos">
                                                <span className="linkTexto">Projetos</span>
                                          </Link>
                                    </li>
                                    <li className="itemMenu">
                                          <Link to="#contato">
                                                <span className="linkTexto">Contato</span>
                                          </Link>
                                    </li>
                              </ul>
                              <img alt="Canto de um quadro, sendo a parte superior" className="cantos" id="cantoInferior" src={canto}/>
                        </nav>
                  </div>
                  <div id="blocoInferior">
                              <p>Meus projetos e informações</p>
                  </div>
                  <img alt="Seta rosa apontando para baixo" id="seta" src={seta}/>
            </div>
      )
}

export default Capa