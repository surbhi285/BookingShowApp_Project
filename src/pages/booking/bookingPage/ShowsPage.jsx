import React, { useEffect, useState } from "react";
import FilterShowsList from "./FilterShowsList";
import ShowsList from "./ShowsList";
import { getFunction } from "../../../services/events/events";
import { getShowFunction } from "../../../services/shows/shows";
// import ShowDetail from "./ShowDetail";
import { useParams } from "react-router-dom";

export default function ShowsPage() {
  const { id } = useParams();
  console.log(id);

  const [showSearch, setShowSearch] = useState({});
  const [shows, setShows] = useState(null);
  const [events, setEvents] = useState(null);

  useEffect(() => {
    Promise.all([getFunction(), getShowFunction()]).then((data) => {
      setEvents(data[0]);
      if (id) {
        let show = data[1]?.filter((show) => {
          return show.showId === parseInt(id);
        });
        setShows(show);
      } else setShows(data[1]);
    });
  }, []);

  return (
    <>
      {id ? (
        <ShowsList showSearch={showSearch} events={events} shows={shows} />
      ) : (
        <>
          <FilterShowsList
            showSearch={showSearch}
            setShowSearch={setShowSearch}
          />
          <ShowsList showSearch={showSearch} events={events} shows={shows} />
        </>
      )}
    </>
  );
}
