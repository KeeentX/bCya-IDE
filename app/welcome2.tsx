import {NextFont} from "next/dist/compiled/@next/font";
import {Coda} from "next/font/google";
import {Router} from "next/router";
import {Icon} from "@iconify/react";
import {openFile} from "@/app/main/filesystem/openfile";
import {OpenedFilesContext} from "@/app/context/FileContext";
import {useContext} from "react";
import {newFile} from "@/app/main/filesystem/newfile";
const coda : NextFont = Coda({
    style: 'normal',
    subsets: ['latin'],
    weight: "400",
});
export default function Welcome2(props: any) {
    const {openedFiles, setOpenedFiles} = useContext(OpenedFilesContext);
    return (
        <div className={`flex flex-col items-center justify-center h-[95dvh] text-white ${coda.className}`}>
            <div className={'flex flex-col justify-center items-center space-y-0 p-4'}>
                <img src="/icon-white.png" className="w-36"/>
                <h1 className="text-4xl font-bold">Maayung Pagbalik! {props.savedData.username}</h1>
            </div>
            <div className={'flex flex-row space-x-10'}>
                <button
                    className={`border-accent-pink border w-[250px] hover:bg-gray-800 cursor-pointer
                    h-[50px] justify-center flex items-center space-x-2`}
                    onClick={async () => {
                        await openFile(setOpenedFiles);
                        props.setInMain(true)
                    }}>
                    <Icon icon={'ic:round-file-open'} width={'25'} height={'25'} className={'text-accent-pink'}/>
                    <label className={'cursor-pointer'}>Open BCYA File</label>
                </button>
                <button
                    className={
                    `border-accent-pink border w-[250px] hover:bg-gray-800 cursor-pointer
                    h-[50px] justify-center flex items-center space-x-2`}
                    onClick={() => {
                        newFile(setOpenedFiles);
                        props.setInMain(true)
                    }}>
                    <Icon icon={'ic:round-file-open'} width={'25'} height={'25'} className={'text-accent-pink'}/>
                    <label className={'cursor-pointer'}>Create New BCYA File</label>
                </button>
            </div>
            <div className={'p-10 h-fit'}>
                {props.savedData.length > 0 ? <h1>Recent Files</h1> : null}
                {props.savedData.length > 0 ? props.savedData.map((file: any, index: number) => {
                    return (
                        <div key={index}>
                            <h1>{file.filename}</h1>
                        </div>
                    )
                }) : <div>No recent files</div>}
            </div>
        </div>
    )
}