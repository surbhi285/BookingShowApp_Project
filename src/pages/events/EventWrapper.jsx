import {useState} from 'react';
import EventListPage from './eventlist/EventListPage';
import EventDetailPage from './eventdetail/EventDetailPage';
import CreateUpdate from './eventlist/CreateUpdate';

export default function EventWrapper() {
    const Ui = {
        EventListPage: "EventListPage",
        EventDetailPage: "EventDetailPage"
    }

    const [currentUi, setCurrentUi] = useState(Ui.EventListPage);
    const[event, setEvent] = useState(null);

  return (
    <>
    {/* <CreateUpdate /> */}
   {currentUi===Ui.EventListPage && <EventListPage next={()=>setCurrentUi(Ui.EventDetailPage)} setEvent={setEvent} />}
   {currentUi===Ui.EventDetailPage && <EventDetailPage back={()=>setCurrentUi(Ui.EventListPage)} event={event}/>}
  
   </>
  )
}
