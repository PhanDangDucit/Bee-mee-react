import { useState } from "react";

export function ButtonSize() {
    const [isActiveSizeS, setActiveSizeS] = useState<boolean>(false);
    const [isActiveSizeM, setActiveSizeM] = useState<boolean>(false);
    const [isActiveSizeL, setActiveSizeL] = useState<boolean>(false);

    console.log("L", isActiveSizeL);
    console.log("S", isActiveSizeS);
    console.log("M", isActiveSizeM);

    const changeActiveSize = (size: string) => {
        switch(size) {
            case 'S':
                setActiveSizeS(true);
                setActiveSizeL(false);
                setActiveSizeM(false);
                break;
            case 'M':
                setActiveSizeS(false);
                setActiveSizeM(true);
                setActiveSizeL(false);
                break;
            case 'L':
                setActiveSizeS(false);
                setActiveSizeM(false);
                setActiveSizeL(true);
                break;
            default:
                throw Error("Error");
        }
    }

    return (
        <div className="flex items-center">
            <span className="mr-3 text-lg font-medium">Size</span>
            <button
                type="button"
                className={ isActiveSizeS ? "bg-orange-400 border-2 border-orange-300 p-2 w-12 h-12 mx-2" : "border-2 border-orange-300 p-2 w-12 h-12 mx-2"}
                onClick={() => changeActiveSize("S")}
            >
                S
            </button>
            <button
                type="button"
                className={ isActiveSizeM ? "bg-orange-400 border-2 border-orange-300 p-2 w-12 h-12 mx-2" : "border-2 border-orange-300 p-2 w-12 h-12 mx-2"}
                onClick={() => changeActiveSize("M")}
            >
                M
            </button>
            <button
                type="button"
                className={ isActiveSizeL ? "bg-orange-400 border-2 border-orange-300 p-2 w-12 h-12 mx-2" : "border-2 border-orange-300 p-2 w-12 h-12 mx-2"}
                onClick={() => changeActiveSize("L")}
            >
                L
            </button>
        </div>
    )
}