"use client"
import React, {createContext} from "react";

export type OpenedFile = {
    filename: string | null,
    location: string | null,
    content: string | null,
    newContent: string | null,
    active: boolean,
    saved: boolean,
}

type OpenedFilesState = {
    openedFiles: OpenedFile[],
    setOpenedFiles: React.Dispatch<React.SetStateAction<OpenedFile[]>>
}

export const OpenedFilesContext = createContext<OpenedFilesState>({
    openedFiles: [],
    setOpenedFiles: () => {},
})
export default function FileContext({children}: {children: React.ReactNode}) {
    const [openedFiles, setOpenedFiles] = React.useState<OpenedFile[]>([]);

    return <OpenedFilesContext.Provider value={{openedFiles, setOpenedFiles}}>{children}</OpenedFilesContext.Provider>
}