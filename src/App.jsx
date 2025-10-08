import { useState } from 'react'

import Navbar from './comoponents/Navbar'
import Box from './comoponents/Box';

function App() {
  const [dm,setdm] = useState(false)
  const toggleMode = ()=>{
    setdm(!dm);
  };

  return (
    <>
      <Navbar dm={dm} toggleMode={toggleMode} />
      <Box dm={dm} toggleMode={toggleMode} />
    </>
  )
}

export default App
