import { createContext , useState} from "react";

export const contextCats = createContext()

export default function CatsContext(props){
    const[favoritCats , setFavoritCats] = useState([]);
    return(

        <contextCats.Provider value={[favoritCats , setFavoritCats]}>
            {props.children}
        </contextCats.Provider>
    )

}