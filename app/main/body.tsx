import Tabs from "@/app/main/components/tabs/Tabs";
import React from "react";
import Editor from "@/app/main/editor";
import NoFileOpened from "@/app/main/noFileOpened";

export default function Body() {
    return (
        <div className={'flex flex-col'}>
            <Tabs/>
            <Editor/>
            <NoFileOpened/>
        </div>
    )
}