import { useState } from 'react'
import FraseCard from "./components/FraseCard";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <FraseCard />
    </div>
  )
}

export default App
