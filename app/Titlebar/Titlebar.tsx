"use client"

import React from "react";
import TitleBarMenu from "@/app/main/Titlebar/TitlebarMenu";
import {NextFont} from "next/dist/compiled/@next/font";
import {Coda} from "next/font/google";
import TitleBarActions from "@/app/Titlebar/TitleBarActions";

const coda : NextFont = Coda({
    style: 'normal',
    subsets: ['latin'],
    weight: "400",
});
export default async function TitleBar() {
    return (
        <div data-tauri-drag-region="" className={"bg-primary-dark flex flex-row items-center justify-between m-2"}>
            <TitleBarMenu coda={coda}/>
            <span className={`text-white text-xs select-none hover:text-accent-pink cursor-pointer ${coda.className}`}
                  data-tauri-drag-region="">
                BCYA IDE V0.2.0
            </span>
            <TitleBarActions/>
        </div>
    )
}