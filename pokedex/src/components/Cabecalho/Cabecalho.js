import pokedex from "../../assets/pokedex.svg"
import { useContext } from "react";
import { MainHeader } from "./Style"
import { AdicionarPokedex } from "./Style"
import { BotaoDeletar} from "./Style"
import { AdicionarPokemon } from "./Style"
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { goToPokedex, goToHome } from "../../rotas/coordinator";
import { GlobalContext } from "../../context/GlobalContext";

function Header() {

const navigate = useNavigate()
const location = useLocation()
const context = useContext(GlobalContext)
const params = useParams()
const pokeName = params.PokemonName
const thisPokemon = context.detailPokemon.find(pokemon => pokemon.name === pokeName)
const isInPokedex = context.pokedex.find(pokemon => pokemon.name === pokeName)

const searchPokedex = ()=>{
switch (location.pathname) {
case "/":
  return <></> 
case `/${pokeName}`:
  return(
<>
{isInPokedex?
<BotaoDeletar onClick={()=>{context.removePokemonPokedex(thisPokemon)}}>Remover da Pokedex</BotaoDeletar>:<AdicionarPokemon onClick={()=>{context.addPokemonPokedex(thisPokemon)}}>Capturar</AdicionarPokemon>}
</>
)  
default:
  return <></>;
}
}
return (
<>
<MainHeader>
  <div>
{location.pathname === "/"?'':<a onClick={(()=>goToHome(navigate))}>Todos os Pokemons</a>}
  </div>
<div><img src={pokedex} alt="pokedex"/></div>
{location.pathname === `/${pokeName}` ?
<div>
{searchPokedex()}
  </div>
:
<div>
{location.pathname === "/" ?
<AdicionarPokedex onClick={()=>goToPokedex(navigate)}>Pokedex</AdicionarPokedex>:''}
  </div>}
</MainHeader>
</>
)
}
  
  export default Header