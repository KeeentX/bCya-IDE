import { writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';

export async function write(location: string, content: string) {
    try {
        await writeTextFile(location, content, { dir: BaseDirectory.Document });
    } catch (error) {
        console.error(error);
        return false;
    }
    return true;
}