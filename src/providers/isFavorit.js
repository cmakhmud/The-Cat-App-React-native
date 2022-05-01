import { createContext, useState } from "react";

export const isFavoriteContext = createContext();

export default function IsFavorite(props){
    const[isFavorite,setIsFavorite] = useState();

    return(
        <isFavoriteContext.Provider value={[isFavorite,setIsFavorite]}>
            {props.children}
        </isFavoriteContext.Provider>
    )
}