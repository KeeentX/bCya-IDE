import {appWindow} from "@tauri-apps/api/window";
import {CloseIcon, MaximizeIcon, MinimizeIcon} from "@/app/main/components/icons";
import {Icon} from "@iconify/react";
import React from "react";

export default async function TitleBarActions() {
    const [isMaximized, setIsMaximized] = React.useState(false);

    await appWindow.onResized(async () => {
        const maximized = await appWindow.isMaximized();
        setIsMaximized(maximized);
    });
    return (
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
    )
}