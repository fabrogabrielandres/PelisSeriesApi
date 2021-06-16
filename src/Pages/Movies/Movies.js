import axios from "axios"
import { useState, useEffect } from 'react';
import { CustomPagination } from '../../components/Pagination/CustomPagination'
import { GenRes } from "../../components/SingleContent/GenRes";
import { SingleContent } from '../../components/SingleContent/SingleContent';


export const Movies = () => {
    
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState(1)
    const fetchMovie = async () => {
        const { data } = await axios.get(
            // &with_genres=${genreforURL}
            `https://api.themoviedb.org/3/discover/movie?api_key=e5ba07287829fe84526c037d50b2a2b9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`

        );
        setNumOfPages(data.total_pages)
        setContent(data.results);

    };

    useEffect(() => {
        fetchMovie()
    }, [page])

    return (
        <div>
            <span className="pageTitle" >Movie</span>
            <GenRes
                type="movie"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <div className="trending">
                {content && content.map((c) =>
                    <SingleContent key={c.id}
                        id={c.id}
                        poster={c.poster_path}
                        title={c.title || c.name}
                        date={c.first_air_date || c.release_date}
                        media_type="movie"
                        vote_average={c.vote_average} />
                )}
            </div>
            {(numOfPages > 1) && <CustomPagination setPage={setPage} numOfPages={numOfPages} />}
        </div>
    )
}
