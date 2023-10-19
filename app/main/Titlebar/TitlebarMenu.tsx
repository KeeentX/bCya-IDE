import {useContext, useState} from "react";
import {OpenedFilesContext} from "@/app/context/FileContext";
import OpenFile from "@/app/main/Titlebar/components/open_file";
import NewFile from "@/app/main/Titlebar/components/new_file";
import {appWindow} from "@tauri-apps/api/window";

export default function TitleBarMenu(props: any) {
    const [menuShown, setMenuShown] = useState({
        file: false,
        edit: false,
    });
    const {openedFiles, setOpenedFiles} = useContext(OpenedFilesContext);
    return (
        <div
            className={`flex flex-row space-x-2 px-2 text-almost-white text-sm items-center
            ${props.coda.className}`}
             onMouseLeave={() => {
            setMenuShown({
                file: false,
                edit: false,
            })
        }}>
            <img
                src={'icon-white.png'}
                alt={'bcya logo'}
                width={'25px'}
                height={'30px'}
                className={'object-contain fill-accent-pink'}
            />
            <span className={'cursor-pointer'}>
                <button
                    className={'hover:text-white'}
                    onMouseEnter={() => setMenuShown({
                        file: !menuShown.file,
                        edit: false,
                    })}>File</button>
                <ul className={
                    `absolute bg-gray-800 rounded-sm text-almost-white
                    ${menuShown.file ? null: `hidden`}`}>
                    <li className={'hover:bg-editor-dark p-2 w-full'}>
                        <NewFile setOpenedFiles={setOpenedFiles} setMenuShown={setMenuShown}/>
                    </li>
                    <li className={'hover:bg-editor-dark p-2 w-full'}>
                        <OpenFile setOpenedFiles={setOpenedFiles} setMenuShown={setMenuShown}/>
                    </li>
                    <li className={'hover:bg-editor-dark p-2 w-full'}
                        onClick={async () => await appWindow.close()}>
                        <button>Exit</button>
                    </li>
                </ul>
            </span>
        </div>
    )
}