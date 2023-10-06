function Tab(props: any) {
    return (
        <button className={`w-fit p-3 border-b-0 border-[1px] text-white flex ${props.active ? 'border-accent-pink bg-secondary-dark' : 'bg-primary-dark border-0'}`}>
            <span className={'mt-1 px-1'}><img src={'/bcyalogo.png'} alt={'close'} width={'20px'}/></span>
            {props.title}
        </button>
    )
}
export default function Tabs() {
    return (
        <div className={'w-full bg-primary-dark flex justify-start'}>
            <Tab active={false} title={'terminal.tsx'}/>
            <Tab active={true} title={'terminal.tsx'}/>
        </div>
    )
}