import {OpenedFile} from "@/app/context/FileContext";
import React from "react";

export default function ListItem(props: any) {
    return (
        <li
            onDoubleClick={() => {
                props.setOpenedFiles((prevState: OpenedFile[]) => {
                    prevState.map((file: OpenedFile, index: number) => {
                        file.active = index === props.index;
                    });
                    return [...prevState];
                });
            }}
            className={`w-full px-2 py-1 rounded-sm hover:bg-gray-900 cursor-pointer group
            ${props.file.active ? 'bg-gray-800 border-l-[1px] border-accent-pink' : null}`}>
            <button className={`text-gray-200 flex flex-row space-x-1 items-center`} title={props.file.location}>
                <span className={'min-w-fit'}>
                    <img src={'bcyalogo.png'} width={15} height={15}/>
                </span>
                <span className={'w-fit'}>
                    {props.file.filename.length > 15 ?
                        props.file.filename.substring(0, 11).concat('...bcya').replace(/\s/g, "+") :
                        props.file.filename
                    }
                </span>
                <span className={'text-[10px] flex text-gray-500 ml-2 mt-1 w-10 group-hover:text-accent-pink'}>
                    {props.file.location?.substring(0, 10).concat('...')}
                </span>
            </button>
        </li>
    )
}