import CurrencyCoverter from './components/CurrencyCoverter.jsx'
import PasswordGenerator from './components/PasswordGenerator.jsx'
import image from './assets/currencyImage.jpg'

function App() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <img className="absolute left-0 top-0 w-screen h-screen z-0 brightness-75" src={image} alt="" />
        <CurrencyCoverter/>
    </div>


  )
}

export default App
