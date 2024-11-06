import css from "../Assets/icon-css.png"
import html from "../Assets/icon-html.png"
import python from "../Assets/icon-python.png"
import react from "../Assets/icon-react.png"
import java from "../Assets/icon-java.png"
import js from "../Assets/icon-javascript.png"
import seta from "../Assets/seta-direita.png"

function Linguagens() {
      return (
            <div id="linguagens">
                  <h1 className="tituloRosa" id="tituloLinguagem">Linguagens</h1>
                  <div id="linguagemInfo">
                        <div id="areaIcone">
                              <div className="divisaoIcones">
                                    <img alt="Ícone que simboliza o css" className="icon" src={css}/>
                                    <img alt="Ícone que simboliza o html" className="icon" src={html}/>
                              </div>
                              <div className="divisaoIcones">
                                    <img alt="Ícone que simboliza python" className="icon" src={python}/>
                                    <img alt="Ícone que simboliza o react" className="icon" src={react}/>
                                    <img alt="Ícone que simboliza java" className="icon" src={java}/>
                              </div>
                              <div className="divisaoIcones">
                                    <img alt="Ícone que simboliza o javascript" className="icon" src={js}/>
                              </div>
                        </div>
                        <div id="textoLinguagens">
                              <h2 className="resumo">Essas são as linguagens que já realizei cursos e possuo um bom conhecimento, criando projetos que usaram todas elas.</h2>
                              <button id="botaoProjetos">Projetos<img alt="seta para a direita" id="setaDireita" src={seta}/></button>
                        </div>
                  </div>
            </div>
      )
}

export default Linguagens