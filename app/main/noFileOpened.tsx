"use client"

import React, {useContext} from "react";
import {OpenedFilesContext} from "@/app/context/FileContext";

export default function NoFileOpened() {
    const {openedFiles, setOpenedFiles} = useContext(OpenedFilesContext);
    return (
        <div>
            {openedFiles.length}
            {
        openedFiles.length === 0 ?
            <div className={'h-[50dvh] w-[70dvw] mt-[30%]'}>
                <div className={'text-almost-white flex flex-col items-center'}>
                    <h1 className={'text-3xl'}>Your Editor is Empty!</h1>
                    <p className={'text-xl'}>To get started, open or create a new file.</p>
                </div>
            </div> : null
            }
        </div>
    )
}