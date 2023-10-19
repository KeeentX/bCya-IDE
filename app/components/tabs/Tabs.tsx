import {OpenedFile, OpenedFilesContext} from "@/app/context/FileContext";
import {useContext} from "react";
import Tab from "@/app/components/tabs/components/tab";
import {Icon} from "@iconify/react";
import {newFile} from "@/app/filesystem/newfile";
export default function Tabs(props: any) {
    const {openedFiles, setOpenedFiles} = useContext(OpenedFilesContext);
    return (
        <div className={'w-full bg-gray-950 flex justify-start overflow-y-auto max-w-[85dvw] rounded-t-md'}>
            {openedFiles.map((file: OpenedFile, index: number) => (
                <Tab
                    active={file.active}
                    title={file.filename}
                    saved={file.saved}
                    index={index}
                    openedFiles={openedFiles}
                    setOpenedFiles={setOpenedFiles}
                    key={index}
                />
                )
            )}
            <div
                onClick={() => {
                    newFile(props)
                }}
                className={'cursor-pointer'}>
                <Icon
                    icon={'heroicons:plus'}
                    width={'20'}
                    height={'20'}
                    fill={'white'}
                    stroke={'white'}
                    color={'white'}
                />
            </div>
        </div>
    )
}