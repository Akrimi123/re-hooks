import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import {Link} from 'react-router-dom'

const Details = ({movies}) => {
    const{title}=useParams();
    const [Title, setTitle] = useState("default title");
    useEffect(() => {
        const newMovie = movies.find((movie) => movie.title===title);
        setTitle(newMovie.title);
        },[]);

    const [description, setDescription] = useState("default description");
    useEffect(() => {
        const newMovie = movies.find((movie) => movie.title === title);
        setDescription(newMovie.description);
    }, []);

const [trailer, settrailer] = useState("default trailer");
useEffect(() => {
const newMovie = movies.find((movie) => movie.title === title);
    settrailer(newMovie.trailer);
}, []);

    return (
        <div>
            <br />
                <Link to="/" className="back-btn">
                    
                    <button type="text" style={{background:'blue',color:'white',float:'right',marginRight:'30px'}}>Go Back</button>    
                </Link>
                <br />
                <br />
                <br />
                    <div className="cardflex">
                        <div className="carddescription">
                        <h1 style={{ color: "white",textAlign:"center" }}>{Title}</h1>
                        <br />
                        <h5 style={{ color: "white" ,textAlign:"center"}}>{description}</h5>
                        <br />
                        
                    </div>
                        <div className="video">
                            <iframe
                            width="500"
                            height="400"
                            src={trailer}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            ></iframe>
                        </div>
        </div>
    </div>
    )
}
export default Details;
