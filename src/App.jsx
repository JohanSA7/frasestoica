import { useState } from 'react'
import FraseCard from "./components/FraseCard";
import Navbar from './components/Navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <FraseCard />
    </div>
  )
}

export default App
