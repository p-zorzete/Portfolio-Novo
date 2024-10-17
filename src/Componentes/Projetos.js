import barbearia from "../Assets/Barbearia.png"

function Projetos() {
      return (
            <div>
                  <h1 className="tituloBranco">Projetos</h1>
                  <h2 className="subtitulo">Front-End</h2>
                  <div>
                        <ul id="projetos">
                              <li className="blocos">
                                    <h3 className="tituloProjeto">Educação Web</h3>
                                    <img className="imagemProjeto" alt="visualição do site da educação web"/>
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
                                    <img className="imagemProjeto" alt="visualição do projeto de sugestões"/>
                                    <p className="resumoProjeto">Site para indicar diferentes tipos de filmes, animes e jogos</p>
                                    <button>Veja o código no meu GitHub</button>
                              </li>
                              <li className="blocos">
                                    <h3 className="tituloProjeto">Mentalista</h3>
                                    <img className="imagemProjeto" alt="visualição do projeto do mentalista"/>
                                    <p className="resumoProjeto">Joguinho para descobrir se o número pensado é o correto</p>
                                    <button>Veja o código no meu GitHub</button>
                              </li>
                        </ul>
                  </div>
            </div>
      )
}

export default Projetos