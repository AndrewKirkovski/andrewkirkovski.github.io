import boykisser from './boykisser.gif';
import boykisser2 from './boykisser2.jpg';
import './App.css';
import {useEffect, useRef, useState} from "react";
import {useConversation} from "@11labs/react";
import * as Tone from "tone";

const AGENT_ID = 'pvzY8rKHqL2Aror6te57';

const vol = new Tone.Volume(-12).toDestination();
const synth = new Tone.Synth().connect(vol).toDestination();
synth.volume.value = -12;

function App() {
  const [inCall, setInCall] = useState(false);
  const [playTone, setPlayTone] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const conversation = useConversation({
    onConnect: (p) => {
      console.log('connected', p)
      setPlayTone(false);
      setInCall(true)
    },
    onMessage: (p) => console.log('message', p),
    onTyping: (p) => console.log('typing', p),
    onAgentTyping: (p) => console.log('agent typing', p),
    onError: (p) => console.log('error', p),
  });
  const conversationId = useRef('');

  useEffect(()=>{
    if(playTone) {
      setTimeout(() => {
        const now = Tone.now();
        synth.triggerAttack('C4', now)
      });
    } else {
      setTimeout(() => {
        const now = Tone.now();
        synth.triggerRelease(now)
      });
    }
  }, [playTone]);

  useEffect(()=>{
    if(buttonActive) {
      const startCall = async ()=>{
        // request user michrophone
        await navigator.permissions.query({ name: 'microphone' })
        await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        conversationId.current = await conversation.startSession({ agentId: AGENT_ID });
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
  }

  const throttleKeyReleased = () => {
    if (throttleTimer.current) {
        clearTimeout(throttleTimer.current);
    }
    throttleTimer.current = setTimeout(() => {
        setButtonActive(false);
    }, 500);
  }

  useEffect(()=>{
    window.addEventListener("keydown", (event) => {
      console.log('keydown', event.key);
        if (event.key === 'a' || event.key==='b') {
            throttleKeyPressed();
        }
    });
    window.addEventListener("keyup", (event) => {
      console.log('keyup', event.key);
        if (event.key === 'a' || event.key==='b') {
            throttleKeyReleased();
        }
    });
  });

  return (
    <div className="App"

    >
      <header className="App-header">
        <img src={inCall?boykisser:boykisser2} className="App-logo" alt="logo" />
        <p>Press and hold 'a' or 'b' button to talk</p>
        <button onPointerDown={throttleKeyPressed}
                onPointerUp={throttleKeyReleased}>This one works too</button>
        <p>{buttonActive?'Phone is ON':'Phone is OFF'}</p>
        <p>build 004</p>
      </header>
    </div>
  );
}

export default App;
