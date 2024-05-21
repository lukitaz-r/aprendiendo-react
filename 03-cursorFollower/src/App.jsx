import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [cords, setCords] = useState({x: 0, y: 0})

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e
      setCords({x: clientX, y: clientY})
    }

    if (enabled) window.addEventListener('pointermove', handleMove)

    return () => window.removeEventListener('pointermove', handleMove)
  }, [enabled])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)
    return () => document.body.classList.remove('no-cursor')
  }, [enabled])

  return (
    <>
      <div style={{
        display: `${enabled ? 'block' : 'none'}`,
        position: 'absolute',
        background: '#00000080',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -15,
        top: 0,
        width: 40,
        height: 40,
        transform: `translate(${cords.x}px, ${cords.y}px)`
      }}/>
      <h1>Cursor Follower w/ React.js</h1>
      <button
        onClick={() => setEnabled(!enabled)}
      > 
        {
          enabled 
            ? 'Disable cursor following' 
            : 'Enable cursor following'
        }
      </button>
    </>
  )
}

export default App
