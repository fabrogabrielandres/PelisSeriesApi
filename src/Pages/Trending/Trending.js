import React from 'react'
import axios from "axios";
import "./Trending.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { SingleContent } from '../../components/SingleContent/SingleContent';
import { CustomPagination } from '../../components/Pagination/CustomPagination';


export const Trending = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=e5ba07287829fe84526c037d50b2a2b9&page=${page}`
        );
        setContent(data.results);
    };

    useEffect(() => {
        fetchTrending()
        // eslint-disable-next-line
    }, [page])


    return (
        <div>
      <span className="pageTitle">Trending Today</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
    )
}
