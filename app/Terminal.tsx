"use client"
import {Terminal} from "xterm";
import {useEffect} from "react";
import {invoke} from "@tauri-apps/api/tauri";

interface Response {
    current_dir: string,
    stdout: string,
    stderr: string,
}
export default function TerminalComponent() {
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
            if(e.key === '\r') {
                // When the user presses enter, we invoke the command
                term.write('\r\n')
                invoke<Response>('spawn_terminal', {command: command})
                    .then((response) => {
                        term.write(response["stdout"] as string)
                        term.write(response["stderr"] as string)
                        term.write('\r\n')
                        term.write(response["current_dir"] as string + " $ ")
                    })
                    .catch(error => {
                        term.write(error as string)
                        term.write('\r\n')
                    });
                command = "";
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
        <div id={"terminal"} className={'w-[80dvw]'}></div>
    )
}