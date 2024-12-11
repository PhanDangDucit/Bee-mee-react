import { useGetCategories } from "@/hooks/categories";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";

export function Test () {
    const {categories, dispatch} = useGetCategories();
    const [name, setName] = useState<string>("");
    
    const createId = () => {
        return (Math.random() * 100).toString();
    }

    const handleDelete = (id: string, name: string) => {
        dispatch({type: "DELETE_CATEGORY", payload:{id, name}});
    }
    
    const handleAdd = (name: string) => {
        dispatch({type: "ADD_CATEGORY", payload: {id: createId(), name}})
        setName("");
    }

    return (
          <>
                <div>
                    {categories.map((category) => (
                        <div key={nanoid()}>
                            <ul>
                                <li className="">{category.name}</li>
                            </ul>
                            <button 
                                type="button" 
                                className=""
                                onClick={() => handleDelete(category.id, category.name)}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
                <form>
                    <input id="name" 
                        name="name" 
                        type="text" 
                        value={name} 
                        placeholder="hello..."
                        onChange={(e) => setName(e.target.value)}
                        className="bg-gray-300"
                    />
                    <button 
                        type="button"
                        onClick={() => handleAdd(name)}
                    >
                        Add product
                    </button>
                </form>
          </>
    )
}