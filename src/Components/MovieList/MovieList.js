import {useState} from 'react'
import MovieCard from '../MovieCard/MovieCard'
const MovieList = ({search}) => {
    const movies=[
        {
            Title:"Heaven (2002)",
            Description:"A woman takes the law into her own hands after police ignore her pleas to arrest the man responsible for her husband's death, and finds herself not only under arrest for murder but falling in love with an officer.",
            poster:"https://i.egycdn.com/pic/WmFwZndlY21UTE5ZVHVjbWJtb2Ntb3ROamw.jpg",
            Rating: " 3 ",
        },
        {
            Title:"Tribal Get Out Alive (2020)",
            Description:"A former elite military operative and her crew are hired by a troublesome millionaire to clear and secure a recently inherited parcel of land.",
            poster:"https://i.egycdn.com/pic/WmFwZndlY21ZcHZtSE5IY0VjbWpsbVRtbVl2dmNtSQ.jpg",
            Rating:" 4 ",
        },
        {
            Title:"نادي الرجال السري (2019)",
            Description:"In a comic context, the events revolve around a place where some men decide to gather in it, and they call it (The Secret Men's Club)",
            poster:"https://i.egycdn.com/pic/WmFwZndlY21MTkhjbWJ2TkVFY3Z3eHdmdGNtb3dh.jpg",
            Rating:" 5 ",
        },
        {
            Title:"Hitman: Agent 47 (2015)",
            Description:"Known only as Agent 47 (Rupert Friend), his latest target is a corporation that plans to unlock the secret of his past to create an army of killers even more powerful than him. With help from a young woman, the elite assassin confronts revelations about his own origins in an epic battle with his deadliest foe.",
            poster:"https://i.egycdn.com/pic/WmFwZndlY21UcEVtcGJtRW1lY3Z0Y3dUVHZtam1MYw.jpg",
            Rating:" 5 ",
        },
    ];
    return (
        <div>
            <div className="movli" style={{ display:'flex', flexWrap:'wrap', textAlign:'center' , justifyContent:'center' }}>
                {movies.filter(el=>el.Title.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((el,i)=><MovieCard key={i} el={el}></MovieCard>)}
            </div>
        </div>
    )
    
}

export default MovieList 

