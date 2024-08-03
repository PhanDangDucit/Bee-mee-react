import { uploadOneImage } from "@/utils/axios-method";
import { useCallback } from "react";

export function FormUploadImage({onSet}: {onSet: (url: string) => void}) {
    const uploadFile = useCallback(async(e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList: FileList|null = e.target.files;
        if(fileList) {
            const file = fileList[0];
            const {data} = await uploadOneImage(file, "thumbnail");
            onSet(data.imageUrl);
        }
    }, []);
    return (
        <div className="mx-auto w-full max-w-[550px]">
            <form className="">
                <input type="file" id="file" className="sr-only" onChange={(e) => uploadFile(e)}/>
                <label htmlFor="file" className="rounded-md text-center">
                    <span 
                        className="rounded border border-[#e0e0e0] py-3 px-7 text-base font-medium text-white"
                    >
                        Upload thumbnail
                    </span>
                </label>
            </form>
        </div>
    )
}