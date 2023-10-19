"use client"
import {Terminal} from "xterm";
import {useEffect} from "react";
import {Command} from "@tauri-apps/api/shell";

interface Response {
    current_dir: string,
    stdout: string,
    stderr: string,
}
export default async function TerminalComponent(props: { showTerminal: boolean }) {
    // const command = new Command('cmd.exe')
    // const child = await command.spawn()
    // console.log(child)
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