import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

function Home() {
  const [text, setText] = useState('');

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Character Count: {text.length}</p>
    </div>
  );
}


export default Home;