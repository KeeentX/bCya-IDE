"use client"

import React, {useEffect} from "react";
import {Terminal} from "xterm";

export default function TerminalWindow(props: any) {
    useEffect(() => {
        const element = document.getElementById('terminal');
        if (element)
            element.innerHTML = "";
        let command: string = "";
        const term = new Terminal({
            cursorBlink: true,
            cols: 100,
            rows: 12,
        });
        term.open(element as HTMLElement);
        term.write(__dirname + ' $ ')
        term.onKey((e) => {
            if (e.key === '\r') {
                // When the user presses enter, we invoke the command
                term.write('\r\n');
            } else if (e.key === '\x7f') {
                // When the user presses backspace, we remove the last character
                term.write('\b \b');
                command = command.slice(0, -1);
            } else {
                // Otherwise, we add the character to our command
                term.write(e.key);
                command += e.key;
            }
        })
    }, []);
    return (
        <div id={"terminal"} className={`w-[100dvw] ${props.showTerminal ? null : 'hidden'}`}></div>
    )
}