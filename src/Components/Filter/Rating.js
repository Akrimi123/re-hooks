import React from 'react'

const Rating = ({changeRating}) => {
    const handleChange=(e)=>{
        changeRating(e.target.value)
    }
 
    return (
        <div>
            <input className="inputtt"
            type="text"
            placeholder="Filter By Number"
            onChange={handleChange}/> 
        </div>
    )
}

export default Rating
