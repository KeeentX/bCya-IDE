"use client"
import {useFilePicker} from "use-file-picker";

export default function FileViewer(props: any) {
    const { openFilePicker, filesContent, loading } = useFilePicker({
        accept: '.tsx',
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={'w-64 flex flex-row justify-center'}>
            <button
                onClick={() => openFilePicker()}
                className={'text-white bg-secondary-dark border-[1px] border-accent-pink mt-2 w-fit h-fit p-2 px-4'}>
                Open File
            </button>
            <br />
            {filesContent.map((file, index) => (
                props.setEditorContent(file.content)
            ))}
        </div>
    );
}
