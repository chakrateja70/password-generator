import {useCallback, useEffect, useRef, useState} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)
  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    for(let i = 1; i< length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed]
)

const copyPasswordToClipboard = () => {
  window.navigator.clipboard.writeText(password)
  passwordRef.current?.select()
  alert('Password Copied Successfully!')
}

  useEffect(() => {generatePassword()}, [length, numberAllowed, charAllowed])
  return (
    <div className='main-container'>
      <div className='password-generator-container'>
        <h1 className='main-heading'>Password Generator</h1>
        <div>
          <input 
            type='text'
            value={password}
            placeholder='password'
            className='input-pswd'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='copy-btn'>Copy</button>
        </div>

        <div className='conditions-container'>
          <div className='sub-container'>
            <input 
              type='range'
              min={9}
              max={40}
              value={length}
              className='range-input'
              onChange={(e) => setLength(e.target.value)}
            />
            <label className='label-txt' htmlFor='length'>Length: {length}</label>
          </div>
          
          <div className='sub-container'>
            <input 
              type='checkbox'             
              defaultValue={numberAllowed}
              className='checkbox'
              onClick={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label className='label-txt' htmlFor='number'>Numbers</label>
          </div>

          <div className='sub-container'>
            <input 
              type='checkbox'             
              defaultValue={charAllowed}
              className='checkbox'
              onClick={() => {
                setCharAllowed((prev) => !prev)        
              }}
            />
            <label className='label-txt' htmlFor='charInput'>Character</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App