export default function TitleBarMenu(props: any) {
    return (
        <div
            className={`flex flex-row space-x-2 px-2 text-almost-white text-sm items-center
            ${props.coda.className}`}>
            <img
                src={'icon-white.png'}
                alt={'bcya logo'}
                width={'25px'}
                height={'30px'}
                className={'object-contain fill-accent-pink'}
            />
        </div>
    )
}