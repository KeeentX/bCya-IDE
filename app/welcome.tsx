import {NextFont} from "next/dist/compiled/@next/font";
import {Coda} from "next/font/google";
import {useState} from "react";
import {write} from "@/app/main/filesystem/appdata";

const coda : NextFont = Coda({
    style: 'normal',
    subsets: ['latin'],
    weight: "400",
});
export default function Welcome(props: any) {
    const [username, setUsername] = useState<string | null>(null);
    const [error, setError] = useState<boolean>(false);
    return (
        <div className={`flex flex-col items-center justify-center h-[95dvh] text-white ${coda.className}`}>
            <div className={'flex flex-col justify-center items-center space-y-0 p-4'}>
                <img src="/icon-white.png" className="w-36"/>
                <h1 className="text-4xl font-bold">Welcome Nerd!</h1>
                <p className="mt-3 text-lg">Personalize your IDE with your username</p>
            </div>
            <input
                className={'bg-primary-dark border rounded-full outline-0 p-2 w-80 text-center'}
                placeholder={'Username'}
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
            />
            <p className={'p-2 text-red-700'}>{error ? 'Error: Username empty' : null}</p>
            <div className={'absolute bottom-10 flex flex-row space-x-80'}>
                <button
                    className={'text-sm text-gray-500 hover:text-almost-white'}
                    onClick={() => {
                        write('data.json', JSON.stringify(props.content)).then(() => {
                            props.setFirstTime(false);
                        });
                    }}>
                    Continue without username
                </button>
                <button
                    className={'bg-gray-800 px-5 py-1 rounded-md hover:bg-accent-pink'}
                    onClick={async () => {
                        if(!username || username?.length === 0) {
                            setError(true);
                            setUsername('');
                            return;
                        }
                        props.content.username = username;
                        write('data.json', JSON.stringify(props.content)).then(() => {
                            props.setFirstTime(false);
                        });
                    }}>
                    Confirm
                </button>
            </div>
        </div>
    )
}