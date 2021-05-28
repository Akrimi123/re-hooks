import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
            function Add({handlemovie}) {
    const [show, setShow] = useState(false);
    const [newmovie, setNewmovie] = useState({title:"",description:"",posterUrl:"",rating:0})
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className="buttonra"><Button  variant="primary" onClick={handleShow}>
            Add Movie
        </Button></div>
        
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add  Movies</Modal.Title>
            </Modal.Header>
    
                <input type='text'placeholder='Enter title'onChange={e=>setNewmovie({...newmovie,title:e.target.value})} ></input>
                <input type='text'placeholder='Enter description'onChange={e=>setNewmovie({...newmovie,description:e.target.value})}></input>
                <input type='text'placeholder='Enter posterUrl'onChange={e=>setNewmovie({...newmovie,posterUrl:e.target.value})}></input>
                <input type='text'placeholder='Enter rating'onChange={e=>setNewmovie({...newmovie,rating:e.target.value})}></input>
            
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={()=>{handleClose();handlemovie(newmovie)}}>
            Save Changes
            </Button>
        </Modal.Footer>
        </Modal>
    </>
);
}


        

export default Add
