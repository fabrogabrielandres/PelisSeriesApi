import React from 'react'
import axios from "axios"
export const GenRes = ({ type,selectedGenres,setSelectedGenres,genres,setGenres,setPage }) => {


    const fetchGenres = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/genre/${type}/list?api_key=e5ba07287829fe84526c037d50b2a2b9&language=en-US`
        );
        setGenres(data.genres);
      };


    return (
        <div>
            genres
        </div>
    )
}
