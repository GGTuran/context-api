
import { createContext } from 'react'
import './App.css'

function App() {
   
  const AssetProvider = createContext('gg'); 

  return (
    <>
      
      <h1>Vite + React</h1>
      <AssetProvider.Provider value='gg'>
        
      </AssetProvider.Provider>
    </>
  )
}

export default App
