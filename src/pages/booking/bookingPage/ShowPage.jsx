import React, { useEffect, useState } from 'react'
import FilterShowList from './FilterShowList';
import ShowList from './ShowList';
import { getFunction } from '../../../services/events/events';
import { getShowFunction } from '../../../services/shows/shows';

export default function ShowPage() {

    const[showSearch, setShowSearch] = useState({});
    const [shows, setShows] = useState(null);
    const [event, setEvent] = useState(null);

    useEffect(()=>{
        Promise.all([getFunction(),getShowFunction()]).then((data)=>{
            setEvent(data[0]);
            setShows(data[1]);         
        })
    },[])
    //  console.log(shows);
    //  console.log(event);
  return (
    <>
    <FilterShowList showSearch={showSearch} setShowSearch={setShowSearch}/>
    <ShowList showSearch={showSearch} event={event} shows={shows}/>
    </>
  )
}
