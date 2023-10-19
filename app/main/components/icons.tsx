export function CloseIcon(props: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width} height={props.height}
            className={`stroke-white ${[props.className]}`}
            viewBox="0 0 32 32">
            <path
                d="M2 30L30 2m0 28L2 2"
            />
            <title>
                {props.title}
            </title>
        </svg>
    )
}

export function MinimizeIcon(props: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width} height={props.height}
            className={`fill-white ${props.className}`}
            viewBox="0 0 48 48">
            <path
                d="M6 23.25c0-.69.56-1.25 1.25-1.25h33.5a1.25 1.25 0 1 1 0 2.5H7.25c-.69 0-1.25-.56-1.25-1.25Z"
            />
            <title>
                {props.title}
            </title>
        </svg>
    )
}

export function MaximizeIcon(props: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width} height={props.height}
            className={`fill-white ${props.className}`}
            viewBox="0 0 48 48">
            <path
                d="M6 11.25C6 8.35 8.35 6 11.25 6h25.5C39.65 6 42 8.35 42 11.25v25.5c0 2.9-2.35 5.25-5.25 5.25h-25.5A5.25 5.25 0 0 1 6 36.75v-25.5Zm5.25-2.75a2.75 2.75 0 0 0-2.75 2.75v25.5a2.75 2.75 0 0 0 2.75 2.75h25.5a2.75 2.75 0 0 0 2.75-2.75v-25.5a2.75 2.75 0 0 0-2.75-2.75h-25.5Z"
            />
            <title>
                {props.title}
            </title>
        </svg>
    )
}