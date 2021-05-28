import React from 'react';

    const search = ({handleSearch}) => {
    return (
        <div>
            
            <input className="form-control" 
            type="text"
            placeholder="Filter By Title"
            onChange={e=>handleSearch(e.target.value)}/>
            
        </div>
    )
}
export default search;