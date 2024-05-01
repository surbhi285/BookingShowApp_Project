import crudOperation from "../../utils/crud";
import Events from './events.json';

let eventsDetail = Events;

export function getFunction(){
    return new Promise((resolve)=>{
        eventsDetail = crudOperation.get(eventsDetail);
        resolve(eventsDetail);
    })
}

export function addFunction(newEvent){   
    return new Promise((resolve) =>{
        eventsDetail = crudOperation.add([...eventsDetail], newEvent);
        resolve(eventsDetail);
    });
}

export function removeFunction(eventId, pk){
    return new Promise((resolve)=>{
        eventsDetail = crudOperation.remove([...eventsDetail], eventId, pk);
        resolve(eventsDetail);
    });
}

export function updateFunction(updatedEvent, pk){
    return new Promise((resolve)=>{
        console.log("updatedEv",updatedEvent)
        eventsDetail = crudOperation.update([...eventsDetail], updatedEvent, pk);
        console.log("event",eventsDetail)
        resolve(eventsDetail);
    });
}

// export default function Main(){
//     // addFunction({"eventId":11, "eventName":"Surbhi Concert"})
//     // .then((updatedEventsDetail)=>{
//     //     console.log(updatedEventsDetail);
//     //     removeFunction( 1, "eventId").then((remove)=>{
//     //         console.log(remove);
//     //     })
//     //     updateFunction({"eventId":2, "eventName":"Riddhi"}, "eventId").then((update)=>{
//     //         console.log(update)
//     //     })
//         getDetailFunction(4, "eventId").then((detail)=>{console.log(detail)})
//     // })   
// }





