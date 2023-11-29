import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hello from "./components/Hello"
import ShoeButton from './components/ShoeButton'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Hello />
      <ShoeButton />  {/*this is how I thibk you call a functionn from another area after you import it . */}
      </div>
    </>
  )
}

export default App
