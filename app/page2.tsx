"use client";
import React, {useEffect, useState} from "react";
import { readTextFile, BaseDirectory } from '@tauri-apps/api/fs';
import Welcome from "@/app/welcome";
import Welcome2 from "@/app/welcome2";
import Main from "@/app/main/page";

type SavedData = {
    username: string | null,
    files: {
        location: string,
    }[]
}
export default function Page2() {
    const [firstTime, setFirstTime] = useState<boolean | null>(null);
    const [inMain, setInMain] = useState<boolean>(false);
    const [savedData, setSavedData] = useState<SavedData | null>({
        username: null,
        files: []
    });
    useEffect(() => {
        readTextFile('data.json', { dir: BaseDirectory.Document }).then((contents) => {
            setSavedData(JSON.parse(contents));
            setFirstTime(false)
        }).catch((error) => {
            console.log("ERROR", error)
            setFirstTime(true)
        });
    }, []);

    return (
        <React.Fragment>
            {firstTime === null ? null :
            firstTime ?
                <Welcome content={savedData} setFirstTime={setFirstTime}/> :
                (!inMain ?
                    <Welcome2 savedData={savedData} setInMain={setInMain}/> : <Main/>)
            }
        </React.Fragment>
    )
}