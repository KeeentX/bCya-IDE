import {useContext, useState} from "react";
import {OpenedFilesContext} from "@/app/context/FileContext";
import OpenFile from "@/app/Titlebar/components/open_file";
import NewFile from "@/app/Titlebar/components/new_file";

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
                    `absolute bg-amber-100 rounded-sm p-2 text-primary-dark 
                    ${menuShown.file ? null: `hidden`}`
                }>
                    <li><NewFile setOpenedFiles={setOpenedFiles} setMenuShown={setMenuShown}/></li>
                    <li><OpenFile setOpenedFiles={setOpenedFiles} setMenuShown={setMenuShown}/></li>
                </ul>
            </span>
            <span className={'cursor-pointer'}>
                <button
                    className={'hover:text-white'}
                    onMouseEnter={() => setMenuShown({
                        edit: !menuShown.edit,
                        file: false,
                    })}>Edit</button>
                {menuShown.edit ?
                    <ul className={'absolute bg-amber-100 rounded-sm p-2'}>
                        <li>Open</li>
                        <li>Save</li>
                    </ul> : null
                }
            </span>
        </div>
    )
}