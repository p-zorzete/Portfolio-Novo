import barbearia from "../Assets/Barbearia.png"
import sugestoes from "../Assets/Sugestoes.png"
import mentalista from "../Assets/Mentalista.png"
import educacao from "../Assets/Educacao-web.png"

function Projetos() {
      return (
            <div>
                  <h1 className="tituloBranco">Projetos</h1>
                  <h2 className="subtitulo">Front-End</h2>
                  <div>
                        <ul id="projetos">
                              <li className="blocos">
                                    <h3 className="tituloProjeto">Educação Web</h3>
                                    <img className="imagemProjeto" alt="visualição do site da educação web" src={educacao}/>
                                    <p className="resumoProjeto">Site para indicar livros e a importância de ler</p>
                                    <button>Veja o código no meu GitHub</button>
                              </li>
                              <li className="blocos">
                                    <h3 className="tituloProjeto">Barbearia</h3>
                                    <img className="imagemProjeto" alt="visualição do site da barbearia" src={barbearia}/>
                                    <p className="resumoProjeto">Site de uma barbearia feito durante curso na Alura</p>
                                    <button>Veja o código no meu GitHub</button>
                              </li>
                              <li className="blocos">
                                    <h3 className="tituloProjeto">Sugestões</h3>
                                    <img className="imagemProjeto" alt="visualição do projeto de sugestões" src={sugestoes}/>
                                    <p className="resumoProjeto">Site para indicar diferentes tipos de filmes, animes e jogos</p>
                                    <button>Veja o código no meu GitHub</button>
                              </li>
                              <li className="blocos">
                                    <h3 className="tituloProjeto">Mentalista</h3>
                                    <img className="imagemProjeto" alt="visualição do projeto do mentalista" src={mentalista}/>
                                    <p className="resumoProjeto">Joguinho para descobrir se o número pensado é o correto</p>
                                    <button>Veja o código no meu GitHub</button>
                              </li>
                        </ul>
                  </div>
            </div>
      )
}

export default Projetos