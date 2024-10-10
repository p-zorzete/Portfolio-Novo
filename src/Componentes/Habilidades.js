import cinco from "../Assets/5-estrelas.png"
import duas from "../Assets/2-estrelas.png"

function Habilidades() {
      return (
            <div>
                  <div id="topicos">
                        <div id="habilidades">
                              <h1 className="tituloRosa" id="tituloHab">Habilidades</h1>
                              <ul>
                                    <li className="listaHab textos">Organização</li>
                                    <li className="listaHab textos">Bom relacionamento interpessoal</li>
                                    <li className="listaHab textos">Proatividade</li>
                                    <li className="listaHab textos">Curioso para aprender</li>
                                    <li className="listaHab textos">Bons conhecimentos no pacote Office</li>
                                    <li className="listaHab textos">Excel Avançado</li>
                              </ul>
                        </div>
                        <div id="idiomas">
                              <h2 id="subtitulo">Idiomas</h2>
                              <div id="blocoIdiomas">
                                    <h3 className="nomeIdioma textos">Inglês</h3>
                                    <div className="nivel">
                                          <img alt="cinco estrelas representando o meu nível naquele idioma, está preenchido as cinco estrelas" className="estrelas" src={cinco}/>
                                          <p className="nivelIdioma">Avançado</p>
                                    </div>
                                    <h3 className="nomeIdioma textos">Espanhol</h3>
                                    <div className="nivel">
                                          <img alt="cinco estrelas representando o meu nível naquele idioma, está preenchido duas estrelas"  className="estrelas" src={duas}/>
                                          <p className="nivelIdioma">Básico</p>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div id="imagemHabilidades">
                        <img alt="Lampada com contorno branco" id="lampada"/>
                  </div>
            </div>
      )
}

export default Habilidades