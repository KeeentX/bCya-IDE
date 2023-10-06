"use client";
import dynamic from "next/dynamic";
import React, {useState} from "react";
import 'xterm/css/xterm.css';
import CodeEditor from "@/app/CodeEditor";
import FileViewer from "@/app/FileViewer";
import ToolBar from "@/app/ToolBar";
import Tabs from "@/app/Tabs";
import { Coda } from "next/font/google";

const coda = Coda({
    style: 'normal',
    subsets: ['latin'],
    weight: "400",
});

const DynamicTerminal = dynamic(() => import('@/app/Terminal'), { ssr: false })
export default function Page() {
    const [showTerminal, setShowTerminal] = useState(false);
    const [editorContent, setEditorContent] = useState("");
    return (
        <React.Fragment>
            <span className={'flex flex-rows'}>
            <FileViewer setEditorContent={setEditorContent}/>
            <div className={'flex flex-col justify-end'}>
                <Tabs/>
                <ToolBar/>
                <CodeEditor height={showTerminal ? "60dvh" : "80dvh"} content={editorContent}/>
                <button className={'bg-black p-2 flex justify-between'} onClick={() => setShowTerminal(prevState => !prevState)}>
                    <span
                        className={`text-almost-white px-2 ${coda.className}`}>
                        Command Prompt
                    </span>
                    <span>
                        <img src={'/console.png'} alt={'terminal'} width={'30px'}/>
                    </span>
                </button>
                {showTerminal ? <DynamicTerminal/> : null}
            </div>
            </span>
        </React.Fragment>
    )
}