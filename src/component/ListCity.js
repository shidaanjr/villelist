import React ,{useState} from 'react'
import City from './City';

const ListCity = () => {
    const [listCity, setlistCity] = useState( [
        { id:1,
          name: "Rome",
          img :"https://pbs.twimg.com/media/EQBwHAmUYAEYYAQ?format=png&name=900x900"
        },
        { id:2,
          name:"sicily",
          img : "https://pbs.twimg.com/media/EQBwHAaU0AAWabz?format=png&name=900x900"
    
        }
        ]);
    return (
        <div>
        {listCity.map((c)=>(<City name={c.name} img={c.img} key={c.id}/>))}
        </div>
    )
}
 export default ListCity