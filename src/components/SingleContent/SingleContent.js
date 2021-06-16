import React from 'react'
import "./SingleContent.css"
import { img_300, img_500, unavailable } from '../config/config'


export const SingleContent = ({c}) => {
    const {id,poster_path:poster,title,name,first_air_date,release_date:date,media_type,vote_average}=c
    return (
        <div className="media">
            <img className="poster" src={ poster ? `${img_300}/${poster}` : unavailable}  alt={title} />
            <b className="title">{title||name}</b>
            <span className="subTitle">{media_type==="tv" ? "Tv Series":"Movie" }
            <span className="subTitle">{date}</span>
            </span>
        </div>
    )
}
