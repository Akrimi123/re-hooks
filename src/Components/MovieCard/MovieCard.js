import React from 'react'
import ReactStars from 'react-rating-stars-component'
import {Card} from 'react-bootstrap'


const Moviecard = ({title,description,posterurl,rating}) => {
    return (
        <div className="cardmovies">
            <Card style={{ width: '25rem', height :'50rem' ,backgroundColor:'green', marginTop:'90px', borderRadius:'30px' }}>
                <Card.Img  variant="top" src={posterurl}  style={{width:'18 rem',height:'50 rem' ,borderRadius:'30px'}}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <ReactStars count={5} onChange={rating} size={24} activeColor="#ffd700" value={rating} edit={false}/>
            </Card.Body>
</Card>
        </div>
    )
}

export default Moviecard;
