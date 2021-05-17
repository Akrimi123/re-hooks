import React,{useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Filter from './Components/Filter/Search'
import MovieList from './Components/MovieList/MovieList'


function App  (){
    const [search, setSearch] = useState("")
    const props=(x)=>{
        setSearch(x)
    }
    return (
        <div>
            <div className="header">Movies</div>
            <Filter props={props} />
            <MovieList search={search} />
        </div>
    )
}

export default App


