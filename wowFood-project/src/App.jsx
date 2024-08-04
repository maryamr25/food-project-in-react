import './App.css'
import Contact from './components/Contact'
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
      <Contact/>
    </>
  )
}

export default App
