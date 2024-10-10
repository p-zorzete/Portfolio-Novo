import retrato from "../Assets/Retrato.png"

function Sobre() {
      return(
            <div>
                  <h1 className="tituloRosa" id="textoSobre">Sobre Mim</h1>
                  <div id="sobreInfo">
                        <img alt="Foto minha usando uma camisa cinza" src={retrato} id="retrato"/>
                        <div>
                              <p className="sobreTexto textos">Me chamo Pedro Zorzete e estudo programação há 2 anos, faço faculdade de Ciência da Computação e busco minha primeira experiência profissional na área de desenvolvimento.</p>
                              <p className="sobreTexto textos">Entrei nessa área depois de sair da faculdade de fisioterapia pois percebi que não era o que queria, então comecei os estudos na área durante 6 meses até começar a cursar a faculdade. Durante esse tempo estudando fiz muitos cursos em plataformas renomadas como a Alura e a Udemy, permitindo que eu entrasse na faculdade já com um bom conhecimento de linguagem de programação, focando no front-end.</p>
                              <p className="sobreTexto textos">Durante minha faculdade realizei projetos para nota usando diferentes tipos de linguagens e aprendendo a programar o back-end.</p>
                              <p className="sobreTexto textos">Sou uma pessoa determinada e que busca um emprego onde posso me estabelecer e criar uma carreira na empresa enquanto contribuo também com a evolução da mesma. Os meus objetivos para os próximos anos são começar a trabalhar na área de Ti , concluir a faculdade e dar sequência em meus estudos fazendo uma pós graduação ou alguma especialização.</p>
                        </div>
                  </div>
            </div>
      )
}

export default Sobre