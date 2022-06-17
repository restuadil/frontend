import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies";
import ENDPOINTS from "../../utils/constant/endpoints";

function Detail() {

    const [movies, setMovies] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getRecomendationMovies ();
    },[id]);

    async function getRecomendationMovies() {
        const response = await axios(ENDPOINTS.RECOMENDATIONS(id)) ;
        setMovies (response.data.results);
    }

    return (
        <>
         <DetailMovie />
         <Movies movies={movies}/>
        </>
    );
}

export default Detail;