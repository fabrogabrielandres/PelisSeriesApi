import React from 'react'
import axios from "axios"
import Chip from '@material-ui/core/Chip';
import { useEffect } from 'react';




export const GenRes = ({ type, selectedGenres, setSelectedGenres, genres, setGenres, setPage }) => {

    const fetchGenres = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=e5ba07287829fe84526c037d50b2a2b9&language=en-US`
        );
        setGenres(data.genres);
    };

    useEffect(() => {
        fetchGenres();
    
        return () => {
          setGenres({}); // unmounting
        };
        // eslint-disable-next-line
      }, []);

    const handleRemove = (genre) => {
        setSelectedGenres(
          selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
      };

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    };

    return (
        <div style={{ padding: "6px 0" }}>
            {selectedGenres.map((genre) => (
                <Chip
                    style={{ margin: 2 }}
                    label={genre.name}
                    key={genre.id}
                    color="primary"
                    clickable
                    size="small"
                    onDelete={() => handleRemove(genre)}
                />
            ))}
            {genres.map((genre) => (
                <Chip
                    style={{ margin: 2 }}
                    label={genre.name}
                    key={genre.id}
                    clickable
                    size="small"
                    onClick={() => handleAdd(genre)}
                />
            ))}
        </div>
    )
}
