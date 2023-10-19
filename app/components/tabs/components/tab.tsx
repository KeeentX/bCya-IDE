import {Coda} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";
import {OpenedFile} from "@/app/context/FileContext";
import {CloseIcon} from "@/app/components/icons";
import {ask, message, save} from "@tauri-apps/api/dialog";
import {write} from "@/app/filesystem/write";

const coda : NextFont = Coda({
    style: 'normal',
    subsets: ['latin'],
    weight: "400",
});

export default function Tab(props: any) {
    return (
        <button
            onClick={() => {
                props.setOpenedFiles((prevState: OpenedFile[]) => {
                    prevState.map((file: OpenedFile, index: number) => {
                        file.active = index === props.index;
                    });
                    return [...prevState];
                });
            }}
            className={`w-fit max-w-[170px] p-3 flex flex-row items-center justify-center rounded-t-sm group select-none
            ${props.active ?
                'bg-editor-dark border-t-[1px] border-accent-pink text-almost-white' :
                'text-gray-400 bg-gray-950 border-0 hover:text-gray-50'}`}>
            <span className={'mt-1 px-1 min-w-fit'}>
                <img src={'/icon-white.png'} width={'16px'} className={'opacity-80'}/>
            </span>
            <span className={`text-sm ${coda.className}`}>
                {props.saved ? props.title : `${props.title} *`}
            </span>
            <div onClick={async (event) => {
                if(!props.saved) {
                    const yes = await ask('You have unsaved changes. Save before closing?', {
                        title: 'Warning!',
                        type: 'warning',
                        cancelLabel: 'Discard Changes',
                        okLabel: 'Confirm',
                    });

                    if(yes) {
                        const file = props.openedFiles[props.index];
                        const location = file.location;
                        const newContent = file.newContent;
                        if(location === null) {
                            let filepath = null;
                            while(filepath === null) {
                                filepath = await save({
                                    filters: [{
                                        name: 'BCYA File',
                                        extensions: ['bcya']
                                    }]
                                })
                                if(filepath === null) {
                                    const yes = await ask('Please select location to save.', {
                                        title: 'Error!',
                                        type: 'error',
                                        cancelLabel: 'Discard Changes',
                                        okLabel: 'Okay',
                                    });
                                    if(!yes) break;
                                }
                            }
                            if(filepath !== null) {
                                if(await write(filepath as string, newContent))
                                    await message('File saved successfully!');
                                else
                                    await message('Failed to save file!', {type: 'error'});
                            }
                        } else {
                            if(await write(location, newContent))
                                await message('File saved successfully!');
                            else
                                await message('Failed to save file!', {type: 'error'});
                        }
                    }
                }
                props.setOpenedFiles((prevState: OpenedFile[]) => {
                    const newState: OpenedFile[] = [];
                    if (prevState.length === 1)
                        return [];
                    if (props.index > 0) {
                        if (props.active)
                            prevState[props.index - 1].active = true;
                    } else
                        prevState[1].active = true;
                    prevState.map((file: OpenedFile, index: number) => {
                        console.log(index !== props.index)
                        if (index !== props.index) {
                            newState.push(file);
                        }
                    });
                    return [...newState];
                });
                event.stopPropagation();
            }}>
                <CloseIcon
                    height={'12px'}
                    width={'12px'}
                    title={'Close File'}
                    className={`ml-2 group hover:stroke-red-500 ${!props.active && 'invisible group-hover:visible'}`}/>
            </div>
        </button>
    )
}