
import { createContext } from 'react'
import './App.css'
import Dad from './Components/Dad';
import Son from './Components/Son';

function App() {
   
  const AssetProvider = createContext('gg'); 

  return (
    <>
      
      <h1>Vite + React</h1>
      <AssetProvider.Provider value='gg'>
        <Dad></Dad>
        <Son></Son>
      </AssetProvider.Provider>
    </>
  )
}

export default App
