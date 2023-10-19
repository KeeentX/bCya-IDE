import { open } from "@tauri-apps/api/dialog";
import { readTextFile, BaseDirectory } from '@tauri-apps/api/fs';
import {OpenedFile} from "@/app/context/FileContext";
import { basename, resolveResource } from '@tauri-apps/api/path';

export default function OpenFile(props: any) {
    return (
        <>
            <button onClick={async () => {
                const filepath = await open({
                    multiple: true,
                    filters: [{
                        name: 'BCYA Files',
                        extensions: ['tsx', 'ts', 'bcya']
                    }]
                }) as string;
                const resourcePath = await resolveResource(filepath[0]);
                const base = await basename(resourcePath);
                const contents = await readTextFile(filepath[0], { dir: BaseDirectory.Home });
                props.setOpenedFiles((prevState: OpenedFile[]) => {
                    prevState.map((file: OpenedFile) => {
                        file.active = false;
                    });
                    const newFile : OpenedFile = {
                        filename: base,
                        location: filepath[0],
                        content: contents,
                        newContent: '',
                        active: true,
                        saved: true
                    };
                    return [...prevState, newFile];
                });
                props.setMenuShown({
                    file: false,
                    edit: false,
                })
            }}
            >Open File
            </button>
            <br/>
        </>

    )
}