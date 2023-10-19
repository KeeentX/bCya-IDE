import {OpenedFile} from "@/app/context/FileContext";

export function newFile(setOpenedFiles: any) {
    setOpenedFiles((prevState: OpenedFile[]) => {
        prevState.map((file: OpenedFile) => {
            file.active = false;
        });
        const newFile : OpenedFile = {
            filename: 'untitled.bcya',
            location: null,
            content: '',
            newContent: '',
            active: true,
            saved: false
        };
        return [...prevState, newFile];
    });
}