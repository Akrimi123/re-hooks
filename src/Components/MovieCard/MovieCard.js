import React from 'react'
import {Card,Button} from 'react-bootstrap'

const MovieCard = ({el}) => {
    return (
        <div className="cardcard">
            <Card >
                <Card.Img className="imaggee" variant="top" src={el.poster}   />
                    <Card.Body>
                        <Card.Title>{el.Title}</Card.Title>
                        <Card.Text>{el.Description}</Card.Text>
                            
                        
                    </Card.Body>
                        <Card.Footer>
                            <Button variant="primary">{el.Rating}</Button>
                        </Card.Footer>
            </Card>
        </div>
    )
}

export default MovieCard






