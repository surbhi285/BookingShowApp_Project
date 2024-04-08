import React, { useEffect, useState } from 'react'
import { getFunction } from '../../../services/events/events';
import { getShowFunction } from '../../../services/shows/shows';


export default function Show() {
  const [list, setList] = useState(null);
  // const [eventList, setEventList] = useState(null);

  useEffect(()=>{
      Promise.all([getFunction(), 
      getShowFunction()])
      .then((data)=>{
         setList({eventDetail:data[0], ShowDetail:data[1]})
      })
  },[])
  console.log(list)

  return (
    <>
    <div>Shows</div>
    </>
  )
}
