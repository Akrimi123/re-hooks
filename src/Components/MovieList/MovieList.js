import React from 'react'
import Moviecard from '../MovieCard/MovieCard'
import {Link}from 'react-router-dom'

const MovieList = ({movies,search,newRating}) => {
    return (
        <div className="movie">
            {movies
            .filter(el=>el.title.toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())&& el.rating>=newRating)
            .map((newCard, i) => (
                <div key={i}>
                    <Link to={`/${newCard.title}`} className="see-trailer"><Moviecard newCard={newCard} /></Link> 
                </div>
        
        
    
            ))}
            </div>
        )}
    


export default MovieList
