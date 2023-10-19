import {open} from "@tauri-apps/api/dialog";
import {BaseDirectory, readTextFile} from "@tauri-apps/api/fs";
import {OpenedFile} from "@/app/context/FileContext";

export async function openFile(setOpenedFiles: any) {
    const {basename, resolveResource} = await import('@tauri-apps/api/path');
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
    setOpenedFiles((prevState: OpenedFile[]) => {
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
}