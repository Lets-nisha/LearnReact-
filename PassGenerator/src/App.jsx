import React, { useCallback, useEffect, useState, useRef } from 'react'

const App = () => {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "@$^&_-"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPassToClip = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, length)
  }, [password])
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  return (
    <>
      <div className='max-Container'>
        <div className='min-container'>

          <div className='topHeading'>
            <h2>Password Generator</h2>

          </div>
          <div className='inputBox' >
            <input type="text" placeholder='Password'
              value={password}
              ref={passwordRef}
              readOnly />
            <button
              onClick={copyPassToClip}>Copy</button>
          </div>


          <div className='lengthBox'>

            <div className='seekbar'>
              <input type="range"
                className='seek'
                value={length}
                onChange={(e) => { setLength(Number(e.target.value)) }}
              />
              <label>Length({length})</label>
            </div>

            <div className='boxs'>
              <input type="checkBox"
                value={numberAllowed}
                onChange={() => { setNumberAllowed((prev) => !prev) }} />
              <label>Number</label>
            </div>

            <div className='boxs'>
              <input type="checkBox"
                value={charAllowed}
                onChange={() => { setCharAllowed((prev) => !prev) }}
              />
              <label>Charecter</label>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App