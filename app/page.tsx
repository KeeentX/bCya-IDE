"use client";
import dynamic from "next/dynamic";
import React, {useContext, useState} from "react";
import 'xterm/css/xterm.css';
import CodeEditor from "@/app/CodeEditor";
import FileViewer from "@/app/FileViewer";
import ToolBar from "@/app/ToolBar";
import Tabs from "@/app/components/tabs/Tabs";
import { Coda } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import { OpenedFilesContext } from "@/app/context/FileContext";

const coda : NextFont = Coda({
    style: 'normal',
    subsets: ['latin'],
    weight: "400",
});

const DynamicTerminal = dynamic(() => import('@/app/Terminal'), { ssr: false })
export default function Page() {
    const [showTerminal, setShowTerminal] = useState(false);
    const [editorContent, setEditorContent] = useState("");
    const {openedFiles, setOpenedFiles} = useContext(OpenedFilesContext);
    return (
        <React.Fragment>
            <span className={'flex flex-rows'}>
                <FileViewer setEditorContent={setEditorContent} setOpenedFiles={setOpenedFiles}/>
                <div className={'flex flex-col justify-end'}>
                    {openedFiles.length === 0 ?
                        <div className={'flex justify-center items-center h-[50dvh] w-full'}>
                            <div className={'text-almost-white'}>
                                <h1 className={'text-3xl'}>Welcome to BCYA IDE!</h1>
                                <p className={'text-xl'}>To get started, open or create a new file.</p>
                            </div>
                        </div> :
                        <>
                            <Tabs openedFiles={openedFiles} setOpenedFiles={setOpenedFiles}/>
                            <ToolBar/>
                            {openedFiles.map((file, index) => {
                                return (
                                    <div className={`${file.active ? 'block': 'hidden'}`} key={index}>
                                        <CodeEditor
                                            height={showTerminal ? "50dvh" : "78dvh"}
                                            content={file.content}
                                            openedFiles={openedFiles}
                                            setOpenedFiles={setOpenedFiles}
                                            index={index}
                                        />
                                    </div>
                                )
                            })}
                        </>
                    }
                </div>
            </span>
            <div className={`${showTerminal ? 'absolute' : null} bottom-0`}>
                <button
                    className={`bg-black p-2 flex text-almost-white justify-between items-center
                    ${showTerminal ? 
                        'w-full border-b-[1px] border-accent-pink' : 
                        'absolute right-0 bottom-0 rounded-tl-md'}`}
                    onClick={() => setShowTerminal(prevState => !prevState)}>
                    <div className={`${showTerminal ? null : 'hidden'}`}>
                        <span>Terminal 1</span>
                        <span className={'text-lg'}>+</span>
                    </div>
                    <div className={'flex'}>
                        <span className={`text-almost-white px-2 ${coda.className}`}>
                            {showTerminal ? null : '3 '} Terminals
                        </span>
                        <img src={'/console.png'} alt={'terminal'} width={'30px'}/>
                    </div>
                </button>
                <DynamicTerminal showTerminal={showTerminal}/>
            </div>
        </React.Fragment>
    )
}