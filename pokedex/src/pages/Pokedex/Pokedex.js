import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Card from "../../components/Cartao/Cartao";
import Header from "../../components/Cabecalho/Cabecalho";
import { MainContainer } from "../stylePages";
import { Cards } from "../stylePages";

function Pokedex() {

const context = useContext(GlobalContext)
const {pokedex}=context

return (
<> 
<Header/>
<MainContainer>
  <div><h1>Meus Pokemons</h1>
    </div>
<Cards>
{pokedex.map((pokemon)=>( 
<Card
key={pokemon.id}
pokemon={pokemon}/>
)
)
}
</Cards>  
  </MainContainer>
  </>
);
}

export default Pokedex