import {openFile} from "@/app/main/filesystem/openfile";

export default function OpenFile(props: any) {
    return (
        <>
            <button onClick={async () => {
                await openFile(props.setOpenedFiles);
                props.setMenuShown({
                    file: false,
                    edit: false,
                })
            }}>
                Open File
            </button>
            <br/>
        </>
    )
}