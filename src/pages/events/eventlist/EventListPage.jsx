import {useState} from 'react';
import FilterEventList from "./FilterEventList";
import EventList from './EventList';

export default function EventListPage() {
  const [searchObj, setSearchObj] = useState({}); 
  console.log(searchObj);

  return (
    <div>
      <div>
        <FilterEventList searchObj={searchObj} setSearchObj={setSearchObj}/>        
        <EventList searchObj={searchObj} />
      </div>
   
    </div>
  )
}
