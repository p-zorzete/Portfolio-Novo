import { Link } from "react-router-dom";

function Capa() {
      return (
            <div>
                  <div className="apresentacao">
                        <h1 className="titulo">Bem Vindo</h1>
                        <h2 className="resumo">Meu nome é Pedro Zorzete. Tenho 23 anos e sou um estudante de TI com foco em programação e desenvolvimento, estudo o back e o front possuindo conhecimento nessas duas partes do desenvolvimento.</h2>
                  </div>
                  <nav className="menuLateral">
                        <h3 className="textoMenu">Menu</h3>
                        <ul>
                              <li>
                                    <Link to="#sobre">
                                        <span class="linkTexto">Sobre mim</span>
                                    </Link>
                              </li>
                              <li>
                                    <Link to="#linguagens">
                                        <span class="linkTexto">Linguagens</span>
                                    </Link>
                              </li>
                              <li>
                                    <Link to="#habilidades">
                                        <span class="linkTexto">Habilidades</span>
                                    </Link>
                              </li>
                              <li>
                                    <Link to="#projetos">
                                        <span class="linkTexto">Projetos</span>
                                    </Link>
                              </li>
                              <li>
                                    <Link to="#contato">
                                        <span class="linkTexto">Contato</span>
                                    </Link>
                              </li>
                        </ul>
                  </nav>
                  <div className="blocoInferior">
                        <p>Meus projetos e informações</p>
                  </div>
            </div>
      )
}

export default Capa