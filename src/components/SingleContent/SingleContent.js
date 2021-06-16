import React from 'react'
import "./SingleContent.css"
import { img_300, img_500, unavailable } from '../config/config'
import { Badge } from '@material-ui/core'


export const SingleContent = ({c}) => {
    const {id,poster_path:poster,title,name,first_air_date,release_date,media_type,vote_average}=c
    return (
        <div className="media">
            <Badge badgeContent={vote_average} color= {vote_average<7 ?"primary" :"secondary"}></Badge>
            <img className="poster" src={ poster ? `${img_300}/${poster}` : unavailable}  alt={title} />
            <b className="title">{title||name}</b>
            <span className="subTitle">{media_type==="tv" ? "Tv Series":"Movie" }
            <span className="subTitle">{first_air_date||release_date}</span>
            </span>
        </div>
    )
}
