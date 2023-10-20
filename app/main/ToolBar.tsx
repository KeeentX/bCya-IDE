import React from "react";
import {write} from "@/app/main/filesystem/write";
import {OpenedFile} from "@/app/context/FileContext";
import {message} from "@tauri-apps/api/dialog";
import {saveas} from "@/app/main/filesystem/saveas";
import {Icon} from "@iconify/react";
import {redo, undo} from "@codemirror/commands";
function SaveButton(props: any) {
    return (
        <button
            onClick={async () => {
                const file = props.openedFiles[props.index];
                if(file.saved && props.type === 'save') return;
                if (!file.saved && props.type === 'save') {
                    if (file.location !== null && props.type !== 'saveas') {
                        const result = await write(file.location as string, file.newContent as string);
                        props.setOpenedFiles((prevState: OpenedFile[]) => {
                            if (result) {
                                prevState[props.index].saved = true;
                                prevState[props.index].content = prevState[props.index].newContent;
                                return [...prevState];
                            }
                            message('Failed to save file!', {type: 'error'});
                            return [...prevState];
                        })
                        return;
                    }

                    const saved = await saveas(file.newContent);
                    if(saved)
                        props.setOpenedFiles((prevState: OpenedFile[]) => {
                            prevState[props.index].saved = true;
                            prevState[props.index].content = prevState[props.index].newContent;
                            prevState[props.index].location = saved.filepath;
                            prevState[props.index].filename = saved.base;
                            return [...prevState];
                        });
                } else {
                    await saveas(file.newContent);
                }
            }}
            className={`text-white flex py-1 px-2 mx-1 rounded-md hover:bg-gray-900 group
            ${props.openedFiles[props.index].saved && props.type === 'save' ? 'border-gray-900 opacity-80' : 'bg-gray-800'}`}>
            <div className={'px-1 mt-[1px]'}
            title={props.title}>
                <img src={props.icon} alt={props.text} width={'20px'} className={'opacity-80 group-hover:opacity-100'}/>
            </div>
        </button>
    )
}

export default function ToolBar(props: any) {
    return (
        <React.Fragment>
            <div className={'flex flex-row bg-editor-dark px-2 justify-between py-5'}>
                <div className={'flex ml-2'}>
                    <SaveButton
                        icon={'/save.png'}
                        index={props.index}
                        setOpenedFiles={props.setOpenedFiles}
                        openedFiles={props.openedFiles}
                        type={'save'}
                        title={'Save'}
                    />
                    <SaveButton
                        index={props.index}
                        setOpenedFiles={props.setOpenedFiles}
                        openedFiles={props.openedFiles}
                        icon={'/save_as.png'}
                        type={'saveas'}
                        title={'Save as'}
                    />
                    <div className={'bg-gray-800 py-1 px-2 rounded-md mx-1 hover:bg-gray-900 cursor-pointer'}
                         title={'Cut'}>
                        <Icon
                            icon={'zondicons:edit-cut'}
                            width={'20'}
                            height={'20'}
                            className={'text-gray-400'}/>
                    </div>
                    <div className={'bg-gray-800 py-1 px-2 rounded-md mx-1 hover:bg-gray-900 cursor-pointer'}
                         title={'Paste'}>
                        <Icon icon={'fluent:clipboard-paste-32-filled'} width={'20'} height={'20'} className={'text-gray-400'}/>
                    </div>
                    <div className={'bg-gray-800 py-1 px-2 rounded-md mx-1 hover:bg-gray-900 cursor-pointer'}
                         title={'Undo'}>
                        <Icon icon={'fa-solid:undo'} width={'20'} height={'20'} className={'text-gray-400'}/>
                    </div>
                    <div
                        className={'bg-gray-800 py-1 px-2 rounded-md mx-1 hover:bg-gray-900 cursor-pointer'}
                        title={'Redo'}>
                        <Icon icon={'ic:baseline-redo'} width={'20'} height={'20'} className={'text-gray-400'}/>
                    </div>
                </div>
                <div className={'flex space-x-6 mr-5 items-center'}>
                    <div title={'Build'}>
                        <Icon
                            icon={'ion:hammer'}
                            width={'20'} height={'20'}
                            className={'text-gray-400 hover:text-gray-500 cursor-pointer'}/>
                    </div>
                    <div title={'Run'}>
                        <Icon
                            icon={'clarity:play-solid'}
                            width={'20'} height={'20'}
                            className={'text-gray-400 hover:text-accent-pink cursor-pointer'}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}