import Navbar from './components/Navbar/Navbar'
import Aboutpage from './pages/about/Aboutpage'
import Homepage from './pages/home/Homepage'
import Servicespage from './pages/services/Servicespage'


function App() {

  return (
    <>
    <Navbar/>
      <Homepage/>
      {/* <Servicespage/> */}
      <Aboutpage/>
    </>
  )
}

export default App
