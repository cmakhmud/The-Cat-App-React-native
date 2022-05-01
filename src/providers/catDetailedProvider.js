import { createContext, useState } from "react";

export const detailedContext = createContext();

export default function CatDetailedContext(props){
    const [catDetailed , setCatDetailed] = useState([]);

    return(
        <detailedContext.Provider value={[catDetailed , setCatDetailed]}>
            {props.children}
        </detailedContext.Provider>
    )
}