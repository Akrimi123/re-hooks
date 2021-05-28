import React from 'react'
import Moviecard from '../MovieCard/MovieCard'

const MovieList = ({movies,search,newRating}) => {
    return (
        <div className="movie">
            {movies
            .filter(el=>el.title.toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())&& el.rating>=newRating)
            .map((el,i)=><Moviecard title={el.title} description={el.description} posterurl={el.posterurl} rating={el.rating}  key={i}/>)}
        </div>
    )
}

export default MovieList
