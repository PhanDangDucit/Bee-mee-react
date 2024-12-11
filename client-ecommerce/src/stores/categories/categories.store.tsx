import { TCategories } from "@/helpers/definitions";
import { createContext, useReducer } from "react";


type TCategoriesContext = {
    categories: Array<TCategories>;
    dispatch: React.Dispatch<Action>
}

const initState: Array<TCategories> = [];

export const CategoriesContext = createContext<TCategoriesContext>({
    categories: [],
    dispatch: () => {}
});

type Action = {
    type: "ADD_CATEGORY" | "DELETE_CATEGORY" | "UPDATE_CATEGORY",
    payload: TCategories
}

const reducer = (state: Array<TCategories>, action: Action) => {
    switch(action.type) {
        case "ADD_CATEGORY":
            return [...state, action.payload];

        case "DELETE_CATEGORY":
            {
                const newCategories: Array<TCategories> = [];
                state.map((category) => {
                    if(category.id != action.payload.id) {
                        newCategories.push(category);
                    }
                });
                return newCategories;
            }
            
        case "UPDATE_CATEGORY":
            {
                const newCategories: Array<TCategories> = [];
                state.map((category) => {
                    if(category.id != action.payload.id) {
                        newCategories.push(category);
                    }
                });
                return newCategories;
            }
        default:
            throw new Error("Invalid action!")
    }
}

export const CategoriesProvider = ({children}: {children: React.ReactNode}) => {
    const [categories, dispatch] = useReducer(reducer, initState);
    
    return (
        <CategoriesContext.Provider value={{categories, dispatch}}>
            {children}
        </CategoriesContext.Provider>
    )
}
