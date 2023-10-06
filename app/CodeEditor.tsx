"use client"
import CodeMirror from '@uiw/react-codemirror';
import {vscodeDark} from "@uiw/codemirror-theme-vscode";
import {cpp} from "@codemirror/lang-cpp";

export default function CodeEditor(props: any) {
    return (
        <CodeMirror
            value={props.content}
            theme={vscodeDark}
            extensions={[cpp()]}
            height={props.height}
            width="80dvw"
        />
    )
}