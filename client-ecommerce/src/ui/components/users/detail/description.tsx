import { TProduct } from "@/helpers/definitions"

export const Description = ({
    product
}:{
    product:TProduct
}) => {
    return (
        <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
            <h3 className="text-lg font-bold text-[#333]">Product information</h3>
            <p className="leading-relaxed">{product["description"]}</p>
        </div>
    )
}