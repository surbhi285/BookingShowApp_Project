import crudOperation from "../../utils/crud";
import Shows from './shows.json';

let showsDetail = Shows;

export function getFunction(){
    return new Promise((resolve)=>{
        showsDetail = crudOperation.get(showsDetail);
        resolve(showsDetail);
    })
}