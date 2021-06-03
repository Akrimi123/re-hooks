import React,{useState} from 'react'
import MovieList from './Components/MovieList/MovieList'
import Search from './Components/Filter/Search'
import Add from './Components/Add/Add'
import 'bootstrap/dist/css/bootstrap.min.css'
import StarRatings from 'react-star-ratings'
import './App.css'
import Rating from './Components/Filter/Rating'
import Details from './Components/Details/Details'
import {Switch , Route} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    const movies=[
		{
            id:uuidv4(),
			title:"The Mad Hatter",
			description:"The Mad Hatter is portrayed as a middle-school age boy in oversized clothes and a large hat that covers his whole head. Unlike most Wonderland residents, he acts rather bratty and rude to Ariko .",
			posterurl:"https://i.egycdn.com/pic/WmFwZndlY21IY21Ub2NtWWVjbWJQbGFtSGt0dw.jpg",
			rating:	3,
            trailer: "https://www.youtube.com/embed/_jY_mlxw5wU",
		},
		{
            id:uuidv4(),
			title:"3 Tickets to Paradise",
			description:"J Parker, her ex-husband and a federal agent head for a ghost town in Mexico called Paradise in search for a hidden cache of 5000 stolen double eagle $20 gold coins.",
			posterurl:"https://i.egycdn.com/pic/WmFwZndlY21IY21UVFltbXZFY21FYXZjbUdOSXhtag.jpg",
			rating:	2,
            trailer: "https://www.youtube.com/embed/jygGXUmhs6o",
		},
		{
            id:uuidv4(),
			title:"the Djinn",
			description:"في إطار من الرعب والتشويق، يجد صبي أبكم نفسه محاصرا في شقته مع وحش شرير لا يرحم، عندما يتمنى تحقيق أمنيته الكبرى التي تؤدي بها إلى طريق من الظلام والخوف.",
			posterurl:"https://i.egycdn.com/pic/WmFwZndlY21IY21wanZOcGFjbWJtcFR4am1Zc2o.jpg",
			rating:	1,
            trailer: "https://www.youtube.com/embed/DRvhMt478Tw",
		},
		{
            id:uuidv4(),
            title:"Heaven (2002)",
            description:"A woman takes the law into her own hands after police ignore her pleas to arrest the man responsible for her husband's death, and finds herself not only under arrest for murder but falling in love with an officer.",
            posterurl:"https://i.egycdn.com/pic/WmFwZndlY21UTE5ZVHVjbWJtb2Ntb3ROamw.jpg",
            rating:  3 ,
            trailer:"https://www.youtube.com/embed/iwx-RkHjHbU" ,
        },
        {
            id:uuidv4(),
            title:"Tribal Get Out Alive (2020)",
            description:"A former elite military operative and her crew are hired by a troublesome millionaire to clear and secure a recently inherited parcel of land.",
            posterurl:"https://i.egycdn.com/pic/WmFwZndlY21ZcHZtSE5IY0VjbWpsbVRtbVl2dmNtSQ.jpg",
            rating: 4 ,
            trailer:"https://www.youtube.com/embed/OfcUB39xWko" ,
        },
        {
            id:uuidv4(),
            title:"نادي الرجال السري (2019)",
            description:"In a comic context, the events revolve around a place where some men decide to gather in it, and they call it (The Secret Men's Club)",
            posterurl:"https://i.egycdn.com/pic/WmFwZndlY21MTkhjbWJ2TkVFY3Z3eHdmdGNtb3dh.jpg",
            rating: 5 ,
            trailer: "https://www.youtube.com/embed/Ze5YA4mkzhI",
        },
        {
            id:uuidv4(),
            title:"Hitman: Agent 47 (2015)",
            description:"Known only as Agent 47 (Rupert Friend), his latest target is a corporation that plans to unlock the secret of his past to create an army of killers even more powerful than him. ",
            posterurl:"https://i.egycdn.com/pic/WmFwZndlY21UcEVtcGJtRW1lY3Z0Y3dUVHZtam1MYw.jpg" ,
            rating: 5 ,
            trailer: "https://www.youtube.com/embed/alQlJDRnQkE",
        },
        {
            id:uuidv4(),
			title:"Ferry", 
			description:"A ruthless Ferry Bouman is sent to his native region of Brabant by his boss Brink to avenge an attack on their gang. When he meets the lovely Danielle and old family feuds resurface, Brabant starts to pierce his steel armour.",
			posterurl:"https://i.egycdn.com/pic/WmFwZndlY21ZanZOam1wam1lY1BtYmxtdm1qbVl2bW0.jpg",
			rating:4,
            trailer:"https://www.youtube.com/embed/MG6U7gduIwA" ,
		},
        {
            id:uuidv4(),
			title:"Wrath of Man ",
			description:"يتناول العمل قصة رجل يعمل في مجال قيادة شاحنات نقل المال، ليحمل مليارات الأموال يوميًا في ضواحي ولاية لوس أنجلوس، ويواجه العديد من المخاطر والصعاب في طريقه",
			posterurl:"https://i.egycdn.com/pic/WmFwZndlY21Zam1wbW1ZYnZSY21FbW1hbWJ2TmptbWE.jpg",
			rating:	2,
            trailer:"https://www.youtube.com/embed/oyAugVfcyfs" ,
		},
		
	];
    
    const [search,setSearch] = useState("")
    const handleSearch=(x)=>{setSearch(x)}
    const [newlist, setNewlist] = useState(movies)
	const handlemovie=(y)=>{setNewlist([...movies,y])}
    const [newRating,setNewRating]=useState(0)
    const changeRating=( x ) =>{
        setNewRating(x)
    };
    return (
        <section className="App">
            <div className="free"><h1>FREE MOVIE APP </h1></div>
            
            <div className="moviiees">
                <Switch>
            <Route path="/:title" exact render={() => (
                <>
                    <Details movies={movies} />
                </>
            )}
            />
            <Route path="/" exact render={() => (
                <>
            <nav>
                <div className="star">
                    <StarRatings rating={5}  starRatedColor="gold"  changeRating={changeRating} numberOfStars={5} name='rating' />
                    <Rating changeRating={changeRating} />
                </div>
            <Search handleSearch={handleSearch}  />
            <Add handlemovie={handlemovie}  />
            </nav>
            <MovieList  newRating={newRating} newlist={newlist} search={search}  movies={movies}   />
            </>
            )}
            />
            </Switch>
            </div>
            
        
        </section>
    )
}

export default App 



