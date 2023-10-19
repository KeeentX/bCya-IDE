"use client"

import React, {useState} from "react";
// import {Command} from "@tauri-apps/api/shell";
import TerminalWindow from "@/app/main/TerminalWindow";
// const command = new Command('powershell');
export default async function TerminalComponent(props: any) {
    const [showTerminal, setShowTerminal] = useState(false);
    // const output = await command.execute();
    // console.log(output);

    return (
        <div>
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
                        <span className={`text-almost-white px-2 ${props.coda.className}`}>
                            {showTerminal ? null : '3 '} Terminals
                        </span>
                    <img src={'/console.png'} alt={'terminal'} width={'30px'}/>
                </div>
            </button>
            <TerminalWindow showTerminal={showTerminal}/>
        </div>
    )
}