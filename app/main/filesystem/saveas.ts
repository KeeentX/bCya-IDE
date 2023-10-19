import {ask, message, save} from "@tauri-apps/api/dialog";
import {write} from "@/app/main/filesystem/write";

export async function saveas(content: string) {
    const {basename, resolveResource} = await import('@tauri-apps/api/path');
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
        const resourcePath = await resolveResource(filepath);
        const base = await basename(resourcePath);
        if(await write(filepath as string, content)) {
            await message('File saved successfully!');
            return {filepath, base};
        }
        else {
            await message('Failed to save file!', {type: 'error'});
            return false;
        }
    }
    return false;
}