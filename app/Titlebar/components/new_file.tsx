import {newFile} from "@/app/filesystem/newfile";

export default function NewFile(props: any) {
    return (
        <button
            onClick={() => {
                newFile(props);
                props.setMenuShown({
                    file: false,
                    edit: false,
                })
            }}>
            New File
        </button>
    )
}