"use client"
import {OpenedFile} from "@/app/context/FileContext";
export default function FileViewer(props: any) {

    return (
        <div className={'w-[15dvw] flex flex-col justify-center bg-gray-950'}>
            <button
                className={'text-white'}
                onClick={() => {
                    props.setOpenedFiles((prevState: OpenedFile[]) => [])
                }}>
                Empty
            </button>
        </div>
    );
}
