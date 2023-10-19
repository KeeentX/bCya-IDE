"use client";
import React, {useEffect} from 'react';
import Tilt from 'react-parallax-tilt';
import './globals.css'
import Page2 from "@/app/page2";

export default function Page() {
    const [next, setNext] = React.useState(false);
    useEffect(() => {
        setTimeout(() => {
            setNext(true)
        }, 10000)
    }, []);
    return (
        <React.Fragment>
            {next ? <Page2/> :
            <div className={'bg-accent-pink animated-gradient'}>
                <Tilt
                    className={"parallax-effect-glare-scale rounded-full z-0"}
                    perspective={300}
                    scale={0.75}>
                    <div className={'rounded-md flex justify-center'}
                         title={'Click to Proceed'}
                         onClick={() => {setNext(true)}}>
                        <img src={'/splash.png'} alt={'icon'} width={'70%'} height={'70%'} className={''}/>
                    </div>
                </Tilt>
            </div>
            }
        </React.Fragment>
    )
}