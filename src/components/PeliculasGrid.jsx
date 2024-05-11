import {get} from "../utils/httpCliente.js"
import {useState,useEffect} from "react"
import { PeliculasCard } from "./PeliculasCard"
import "./PeliculasGrid.css"
import {Spinner} from "../components/Spinner.jsx";
import {useLocation} from "react-router-dom";

export const PeliculasGrid=()=>{

    const useQuery = () =>{
        return new URLSearchParams(useLocation().search)
    }

    const query = useQuery()
    const search = query.get("search")

const [peliculas,setPeliculas]= useState([])
const [cargando,setCargando] = useState(true);

useEffect(()=>{
    const searchURL = search ? "/search/movie?query="+search :  "/discover/movie"
    setCargando(true)
get(searchURL).then((data)=>{
    setPeliculas(data.results);
    setCargando(false)
})
},[search])

if(cargando){
    return <Spinner/>
}

return(
    <ul className="moviesGrid">
        {peliculas.map((pelicula)=>(
               <PeliculasCard key={pelicula.id} pelicula={pelicula}/>
        ))}
    </ul>
)
}