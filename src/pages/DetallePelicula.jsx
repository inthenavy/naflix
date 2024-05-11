import { get } from "../utils/httpCliente";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";

import "./DetallePelicula.css"

export const DetallePelicula=()=>{
    const [pelicula,setPelicula] = useState(null);
    const [cargando,setCargando] = useState(true);

    const {peliculaId} = useParams();

    useEffect(()=>{
        setCargando(true);
        get(`/movie/${peliculaId}`).then((data)=>{
            setPelicula(data);
            setCargando(false);
        });
        },[peliculaId]);

        if(cargando){
            return <Spinner/>
        }

        if(!pelicula){
            return null;
        }
        const imgURL= `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`
        return(
            <div className="contenedorDetalle">
            <img className="col" src={imgURL} alt={pelicula.title} />
            <div className="peliculaDetalle col">
                <p className="item">
                    <strong>Título: </strong>
                    {pelicula.title}
                </p>
                <p>
                    <strong>Descripción: </strong>
                    {pelicula.overview}
                </p>
                <p>
                    <strong>Géneros: </strong>
                    {pelicula.genres.map((genre)=>genre.name).join(", ")}
                </p>
            </div>
            </div>
        )

}
