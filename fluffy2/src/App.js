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
  const conversation = useConversation({
    onConnect: (p) => {
      console.log('connected', p)
      const now = Tone.now();
      synth.triggerRelease(now)
      setInCall(true)
    },
    onMessage: (p) => console.log('message', p),
    onTyping: (p) => console.log('typing', p),
    onAgentTyping: (p) => console.log('agent typing', p),
    onError: (p) => console.log('error', p),
  });
  const conversationId = useRef('');
  const startCall = async ()=>{
    // request user michrophone
    await navigator.permissions.query({ name: 'microphone' })
    await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    conversationId.current = await conversation.startSession({ agentId: AGENT_ID });
  }

  const stopCall = async () => {
    await conversation.endSession();
    const now = Tone.now();
    synth.triggerAttack(400, now)
    setInCall(false)
  }

  return (
    <div className="App"
         onPointerDown={startCall}
         onPointerUp={stopCall}
    >
      <header className="App-header">
        <img src={inCall?boykisser:boykisser2} className="App-logo" alt="logo" />
        <p>Tap and hold to Talk</p>
      </header>
    </div>
  );
}

export default App;
