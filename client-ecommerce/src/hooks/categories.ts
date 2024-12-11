import { CategoriesContext } from "@/stores/categories/categories.store"
import { useContext } from "react"

export const useGetCategories = () => {
    return useContext(CategoriesContext);
}