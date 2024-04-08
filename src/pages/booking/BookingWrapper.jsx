import React, { useEffect, useState } from 'react'
import { getFunction } from '../../services/events/events';
import { getShowFunction } from '../../services/shows/shows';

export default function BookingWrapper() {
    const [list, setList] = useState(null);
    // const [eventList, setEventList] = useState(null);

    useEffect(()=>{
        Promise.all([getFunction, 
        getShowFunction])
        .then((data)=>{
           setList({data})
        })
    },[])
    console.log(list)

  return (
    <div>BookingWrapper</div>
  )
}
