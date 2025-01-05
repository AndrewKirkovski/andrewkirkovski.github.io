import boykisser from './boykisser.gif';
import boykisser2 from './boykisser2.jpg';
import './App.css';
import {useEffect, useRef, useState} from "react";
import {useConversation} from "@11labs/react";

import connectingMp3 from './connecting.mp3';
import musicMp3 from './music.mp3';
import errorMp3 from './error.mp3';
import laterMp3 from './later.mp3';

const connectingAudio = new Audio(connectingMp3);
connectingAudio.load();

const musicAudio = new Audio(musicMp3);
musicAudio.loop = true;
musicAudio.load();

const errorAudio = new Audio(errorMp3);
errorAudio.load();

const laterAudio = new Audio(laterMp3);
laterAudio.load();

connectingAudio.volume = 0;
musicAudio.volume = 0;
errorAudio.volume = 1;
laterAudio.volume = 1;

const AGENT_ID = 'pvzY8rKHqL2Aror6te57';

function App() {
    const audioStarted = useRef(false);
    const [hasError, setHasError] = useState(false);
    const [inCall, setInCall] = useState(false);
    const [playTone, setPlayTone] = useState(false);
    const [buttonActive, setButtonActive] = useState(false);
    const conversation = useConversation({
        onConnect: (p) => {
            console.log('connected', p)
            setPlayTone(false);
            setInCall(true)
            setHasError(false);
        },
        onDisconnect: (p) => {
            setInCall(false);
            setPlayTone(true);
            setHasError(true);
            setTimeout(()=>{
                laterAudio.play();
            }, 500)
        },
        onMessage: (p) => console.log('message', p),
        onTyping: (p) => console.log('typing', p),
        onAgentTyping: (p) => console.log('agent typing', p),
        onError: (p) => {
            console.log('error', p)
            setInCall(false);
            setPlayTone(true);
            setHasError(true);

            setTimeout(()=>{
                errorAudio.play();
            }, 500)
        },
    });
    const conversationId = useRef('');

    useEffect(() => {
        if (playTone) {
            musicAudio.volume = 0.6;
        } else {
            musicAudio.volume = 0;
        }
        if (playTone && !hasError) {
            connectingAudio.volume = 1;
        } else {
            connectingAudio.volume = 0;
        }
    }, [playTone, hasError]);

    useEffect(() => {
        if (buttonActive) {
            const startCall = async () => {
                try {
                    // request user michrophone
                    await navigator.permissions.query({name: 'microphone'})
                    await navigator.mediaDevices.getUserMedia({audio: true, video: false});
                    conversationId.current = await conversation.startSession({agentId: AGENT_ID});
                } catch (e) {
                    console.error(e);
                    setHasError(true);
                    setTimeout(()=>{
                        errorAudio.play();
                    }, 500);
                }
            }
            startCall();
        } else {
            conversation.endSession();
            setPlayTone(true);
            setInCall(false);
        }
    }, [buttonActive]);

    const throttleTimer = useRef(null);

    const throttleKeyPressed = () => {
        if (throttleTimer.current) {
            clearTimeout(throttleTimer.current);
        }
        setButtonActive(true);
        if (!audioStarted.current) {
            audioStarted.current = true;
            musicAudio.play();
            connectingAudio.addEventListener('ended', function () {
                setTimeout(() => {
                    connectingAudio.play();
                }, 7000);
            })
            connectingAudio.play();
        }
    }

    const throttleKeyReleased = () => {
        if (throttleTimer.current) {
            clearTimeout(throttleTimer.current);
        }
        throttleTimer.current = setTimeout(() => {
            setButtonActive(false);
            setHasError(false);
        }, 500);
    }

    useEffect(() => {
        window.addEventListener("keydown", (event) => {
            console.log('keydown', event.key);
            if (event.key === 'a' || event.key === 'b') {
                throttleKeyPressed();
            }
        });
        window.addEventListener("keyup", (event) => {
            console.log('keyup', event.key);
            if (event.key === 'a' || event.key === 'b') {
                throttleKeyReleased();
            }
        });
    });

    return (
        <div className="App"

        >
            <header className="App-header">
                <img src={inCall ? boykisser : boykisser2} className="App-logo" alt="logo"/>
                <p>Press and hold 'a' or 'b' button to talk</p>
                <button onPointerDown={throttleKeyPressed}
                        onPointerUp={throttleKeyReleased}>This one works too
                </button>
                <p>{buttonActive ? 'Phone is ON' : 'Phone is OFF'}</p>
                <p>{hasError ? 'Error' : 'Ready'}</p>
                <p>build 009</p>
            </header>
        </div>
    );
}

export default App;
