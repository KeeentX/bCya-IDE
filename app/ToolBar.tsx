import React from "react";
function SaveButton(props: any) {
    return (
        <button className={'border-[1px] border-almost-white text-white flex py-1 px-2 mx-1 rounded-md hover:border-accent-pink'}>
            <span className={'px-1 mt-[1px] '}>
                <img src={props.icon} alt={props.text} width={'20px'}/>
            </span>
            {props.text}
        </button>
    )
}

export default function ToolBar() {
    return (
        <React.Fragment>
            <div className={'flex flex-row bg-secondary-dark py-2 px-2 justify-between py-5'}>
                <div className={'flex ml-2'}>
                    <SaveButton icon={'/save.png'} text={'SAVE'}/>
                    <SaveButton icon={'/save_as.png'} text={'SAVE AS'}/>
                    <SaveButton icon={'/save_all.png'} text={'SAVE ALL'}/>
                </div>
                <div className={'flex space-x-6 mr-2'}>
                    <img src={'/build.png'} alt={'status bar'} width={'30px'}/>
                    <img src={'/run.png'} alt={'status bar'} width={'30px'}/>
                </div>
            </div>
        </React.Fragment>
    )
}