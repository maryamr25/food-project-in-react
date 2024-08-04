import './App.css'
import ExploreFood from './components/Explore-Food'
import Foodmenu from './components/Foodmenu'
import Navbar from './components/Navbar'
import Search from './components/Search'

function App() {
 
  return (
    <>
      <Navbar/>
      <Search/>
      <ExploreFood/>
      <Foodmenu/>
    </>
  )
}

export default App
