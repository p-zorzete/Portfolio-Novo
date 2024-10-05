import css from "../Assets/icon-css.png"
import html from "../Assets/icon-html.png"
import python from "../Assets/icon-python.png"
import react from "../Assets/icon-react.png"
import java from "../Assets/icon-java.png"
import js from "../Assets/icon-javascript.png"

function Linguagens() {
      return (
            <div>
                  <h1 className="titulo">Linguagens</h1>
                  <div className="iconesLinguagens">
                        <img alt="Ícone que simboliza o css" className="icon" src={css}/>
                        <img alt="Ícone que simboliza o html" className="icon" src={html}/>
                        <img alt="Ícone que simboliza python" className="icon" src={python}/>
                        <img alt="Ícone que simboliza o react" className="icon" src={react}/>
                        <img alt="Ícone que simboliza java" className="icon" src={java}/>
                        <img alt="Ícone que simboliza o javascript" className="icon" src={js}/>
                  </div>
                  <div className="textoLinguagens">
                        <h2 className="resumo">Essas são as linguagens que já realizei cursos e possuo um bom conhecimento, criando projetos que usaram todas elas.</h2>
                        <button className="botaoProjetos">Projetos</button>
                  </div>
            </div>
      )
}

export default Linguagens