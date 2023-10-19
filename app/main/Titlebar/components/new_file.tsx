import {newFile} from "@/app/main/filesystem/newfile";

export default function NewFile(props: any) {
    return (
        <button
            onClick={() => {
                newFile(props.setOpenedFiles);
                props.setMenuShown({
                    file: false,
                    edit: false,
                })
            }}>
            New File
        </button>
    )
}