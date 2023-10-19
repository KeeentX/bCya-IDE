"use client"
import {OpenedFile, OpenedFilesContext} from "@/app/context/FileContext";
import {Icon} from "@iconify/react";
import React, {useContext} from "react";
import ListItem from "@/app/main/components/fileviewer/listitem";
import {newFile} from "@/app/main/filesystem/newfile";
import {openFile} from "@/app/main/filesystem/openfile";
export default function FileViewer(props: any) {
    const {openedFiles, setOpenedFiles} = useContext(OpenedFilesContext);
    return (
        <div className={`w-[15dvw] h-[95dvh] flex flex-col bg-gray-950 text-white p-2 ${props.coda.className}`}>
            <section className={'flex flex-col'}>
                <header className={'flex flex-row items-center'}>
                    <Icon icon={'iconamoon:file-fill'} width={'25'} height={'25'} className={'p-1 text-gray-500'}/>
                    <label>Files</label>
                    <Icon
                        onClick={async() => {
                            await openFile(setOpenedFiles);
                        }}
                        icon={'ic:baseline-plus'}
                        width={'20'} height={'20'}
                        className={'ml-1 cursor-pointer text-gray-500 hover:text-gray-200'}/>
                </header>
                <ul className={'ml-3 text-sm'}>
                    {openedFiles.map((file: OpenedFile, index: number) => {
                        if(file.location !== null && file.saved)
                            return (
                                <ListItem file={file} setOpenedFiles={setOpenedFiles} index={index}/>
                            )
                    })}
                </ul>
            </section>
            <section className={'flex flex-row items-center'}>
                <Icon icon={'material-symbols:folder'} width={'25'} height={'25'} className={'p-1 text-gray-500'}/>
                <label>Directories</label>
            </section>
            <section className={'flex flex-col'}>
                <header className={'flex flex-row items-center'}>
                    <Icon icon={'material-symbols:fiber-new'} width={'25'} height={'25'} className={'p-1 text-gray-500'}/>
                    <label>New Files</label>
                    <Icon
                        onClick={() => {
                            newFile(setOpenedFiles);
                        }}
                        icon={'ic:baseline-plus'}
                        width={'20'} height={'20'}
                        className={'ml-1 cursor-pointer text-gray-500 hover:text-gray-200'}/>
                </header>
                <ul className={'ml-3 text-sm'}>
                    {openedFiles.map((file: OpenedFile, index: number) => {
                        if(file.location === null)
                        return (
                            <ListItem file={file} setOpenedFiles={setOpenedFiles} index={index}/>
                        )
                    })}
                </ul>
            </section>
            <section className={'flex flex-col'}>
                <header className={'flex flex-row'}>
                    <Icon icon={'fa6-solid:file'} width={'25'} height={'25'} className={'p-1 text-gray-500'}/>
                    <label>Unsaved Files</label>
                </header>
                <ul className={'ml-3 text-sm'}>
                    {openedFiles.map((file: OpenedFile, index: number) => {
                        if(file.location !== null && !file.saved)
                            return (
                                <ListItem file={file} setOpenedFiles={setOpenedFiles} index={index}/>
                            )
                    })}
                </ul>
            </section>
        </div>
    );
}
