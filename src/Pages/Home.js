import Capa from "../Componentes/Capa";
import Contato from "../Componentes/Contato";
import Habilidades from "../Componentes/Habilidades";
import Linguagens from "../Componentes/Linguagens";
import Projetos from "../Componentes/Projetos";
import Sobre from "../Componentes/Sobre";

function Home() {
      return (
            <div>
                <Capa/>
                <Sobre/>
                <Linguagens/>
                <Habilidades/>
                <Projetos/>
                <Contato/>
            </div>
      );
}

export default Home