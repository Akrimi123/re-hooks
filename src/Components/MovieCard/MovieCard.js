import React from 'react'
import ReactStars from 'react-rating-stars-component'




const Moviecard = ({ newCard }) => {
    return (
        <div className="newcard">
            <div className="cover">
                <div className="header">
                    <div className="moviecard">
                    <img src={newCard.posterurl} alt={newCard.title} style={{margin:'25px',borderRadius:"30px"}} />
                        <h4>{newCard.title}</h4>
                        <div className="rate">
                        <span className="newcardrating">
                            {newCard.rating}
                        </span>
                        <div className="raectstars">
                            <ReactStars count={5} onChange={newCard.rating} size={24}  activeColor="#ffd700" value={newCard.rating} edit={false} />
                        </div>
                        

                        </div>
                    
                        
                        <button>TRAILER</button>
                    </div>
                
                
                </div>
            </div>
        </div>
    );
};

export default Moviecard;
