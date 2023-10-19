'use client'

import {OpenedFile, OpenedFilesContext} from "@/app/context/FileContext";
import {useContext} from "react";
import Tab from "@/app/main/components/tabs/components/tab";
import {Icon} from "@iconify/react";
import {newFile} from "@/app/main/filesystem/newfile";
export default function Tabs() {
    const {openedFiles, setOpenedFiles} = useContext(OpenedFilesContext);
    return (
        <div className={'w-full bg-gray-950 flex justify-start overflow-y-auto max-w-[85dvw] rounded-t-md'}>
            {openedFiles.map((file: OpenedFile, index: number) => (
                <Tab
                    active={file.active}
                    title={file.filename}
                    saved={file.saved}
                    index={index}
                    openedFiles={openedFiles}
                    setOpenedFiles={setOpenedFiles}
                    key={index}
                />
                )
            )}
            {openedFiles.length > 0 ?
            <div
                onClick={() => {
                    newFile(setOpenedFiles)
                }}
                className={'cursor-pointer flex items-center w-fit h-fit mt-3 ml-3 rounded-full hover:bg-gray-800 group'}>
                <Icon
                    icon={'heroicons:plus'}
                    width={'25'}
                    height={'25'}
                    className={'p-1 text-gray-500 group-hover:text-white'}
                />
            </div> : null}
        </div>
    )
}