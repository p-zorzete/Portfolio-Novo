function Habilidades() {
      return (
            <div>
                  <div id="topicos">
                        <div id="habilidades">
                              <h1 className="titulo">Habilidades</h1>
                              <ul>
                                    <li>
                                          <p className="textos">Organização</p>         
                                    </li>
                                    <li>
                                          <p className="textos">Bom relacionamento interpessoal</p>         
                                    </li>
                                    <li>
                                          <p className="textos">Proatividade</p>         
                                    </li>
                                    <li>
                                          <p className="textos">Curioso para aprender</p>         
                                    </li>
                                    <li>
                                          <p className="textos">Bons conhecimentos no pacote Office</p>         
                                    </li>
                                    <li>
                                          <p className="textos">Excel Avançado</p>         
                                    </li>
                              </ul>
                        </div>
                        <div id="idiomas">
                              <h2 id="subtitulo">Idiomas</h2>
                              <div id="ingles">
                                    <h3 className="nomeIdioma">Inglês</h3>
                                    <div>
                                          <img className="estrelas"/>
                                          <p className="nivelIdioma">Avançado</p>
                                    </div>
                              </div>
                              <div id="Espanhol">
                                    <h3 className="nomeIdioma">Espanhol</h3>
                                    <div>
                                          <img className="estrelas"/>
                                          <p className="nivelIdioma">Básico</p>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div id="imagemHabilidades">
                        <img id="lampada"/>
                  </div>
            </div>
      )
}

export default Habilidades