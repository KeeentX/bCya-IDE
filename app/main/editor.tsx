'use client'

import ToolBar from "@/app/main/ToolBar";
import CodeEditor from "@/app/main/CodeEditor";
import React, {useContext} from "react";
import {OpenedFilesContext} from "@/app/context/FileContext";

export default function Editor() {
    const {openedFiles, setOpenedFiles} = useContext(OpenedFilesContext);
    return (
        openedFiles.map((file, index) => {
            return (
                <div className={`${file.active ? 'block': 'hidden'}`} key={index}>
                    <ToolBar
                        index={index}
                        setOpenedFiles={setOpenedFiles}
                        openedFiles={openedFiles}
                    />
                    <CodeEditor
                        height={"85dvh"}
                        content={file.content}
                        openedFiles={openedFiles}
                        setOpenedFiles={setOpenedFiles}
                        index={index}
                    />
                </div>
            )
        })
    )
}