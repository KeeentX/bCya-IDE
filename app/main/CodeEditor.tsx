"use client"
import CodeMirror from '@uiw/react-codemirror';
import {tokyoNight} from "@uiw/codemirror-themes-all";
import {cpp} from "@codemirror/lang-cpp";
import {OpenedFile, OpenedFilesContext} from "@/app/context/FileContext";
import {useContext} from "react";

export default function CodeEditor(props: any) {
    const {openedFiles, setOpenedFiles} = useContext(OpenedFilesContext)
    return (
        <CodeMirror
            value={props.content}
            theme={tokyoNight}
            extensions={[
                cpp()
            ]}
            height={props.height}
            width="85dvw"
            onChange={(editor) => {
                openedFiles[props.index].saved ?
                    setOpenedFiles((prevState: OpenedFile[]) => {
                        prevState[props.index].saved = false;
                        return [...prevState];
                    }) : null;
                setOpenedFiles((prevState: OpenedFile[]) => {
                    prevState[props.index].newContent = editor;
                    return [...prevState];
                });
            }}
        />
    )
}