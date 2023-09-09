import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { githubDark } from "@uiw/codemirror-theme-github";

export default function CodeBox() {
    return (
        <CodeMirror
            value="console.log('hello world!');"
            height={"100dvh"}
            className={'w-full'}
            extensions={[langs.cpp()]}
            theme={githubDark}
            // onChange={onChange}
        />
    );
}