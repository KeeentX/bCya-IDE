import dynamic from "next/dynamic";
import React from "react";
import 'xterm/css/xterm.css';
import FileViewer from "@/app/main/FileViewer";
import { Coda } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import Body from "@/app/main/body";

const coda : NextFont = Coda({
    style: 'normal',
    subsets: ['latin'],
    weight: "400",
});

const DynamicTerminal = dynamic(() => import('@/app/main/Terminal'), { ssr: false })
export default function Main() {
    return (
        <React.Fragment>
            <div className={'flex flex-rows'}>
                <FileViewer coda={coda}/>
                <Body/>
            </div>
            {/*<div>*/}
            {/*    <DynamicTerminal coda={coda}/>*/}
            {/*</div>*/}
        </React.Fragment>
    )
}