"use client"
import { appWindow } from '@tauri-apps/api/window'
import React from "react";
import TitleBarMenu from "@/app/Titlebar/TitlebarMenu";
import {NextFont} from "next/dist/compiled/@next/font";
import {Coda} from "next/font/google";
import {CloseIcon, MaximizeIcon, MinimizeIcon} from "@/app/components/icons";
import {Icon} from "@iconify/react";

const coda : NextFont = Coda({
    style: 'normal',
    subsets: ['latin'],
    weight: "400",
});
export default async function TitleBar() {
    const [isMaximized, setIsMaximized] = React.useState(false);
    await appWindow.onResized(async () => {
        const maximized = await appWindow.isMaximized();
        setIsMaximized(maximized);
    });
    return (
        <div data-tauri-drag-region="" className={"bg-primary-dark flex flex-row items-center justify-between m-2"}>
            <TitleBarMenu coda={coda}/>
            <span className={`text-white text-xs select-none hover:text-accent-pink cursor-pointer ${coda.className}`}
                  data-tauri-drag-region="">
                BCYA IDE V0.2.0
            </span>
            <div className={'flex flex-row'}>
                <div
                    className={"p-2 hover:bg-gray-500 cursor-pointer rounded-full"}
                    onClick={() => appWindow.minimize()}>
                    <MinimizeIcon width={'12'} height={'12'} title={'Minimize IDE'}/>
                </div>
                <div
                    className={"p-2 hover:bg-gray-500 cursor-pointer rounded-full"}
                    onClick={() => {
                        isMaximized ? appWindow.unmaximize() : appWindow.maximize()
                        setIsMaximized(prevState => !prevState)
                    }}>
                    {isMaximized ?
                        <Icon
                            icon={'fluent:full-screen-minimize-20-regular'}
                            width={'12'}
                            height={'12'}
                            className={'stroke-white'}/> :
                        <MaximizeIcon width={'12'} height={'12'} title={'Maximize IDE'}/>}
                </div>
                <div
                    className="p-2 hover:bg-red-400 cursor-pointer rounded-full"
                    onClick={() => appWindow.close()}>
                    <CloseIcon width={'12'} height={'12'} title={'Close IDE'}/>
                </div>
            </div>
        </div>
    )
}