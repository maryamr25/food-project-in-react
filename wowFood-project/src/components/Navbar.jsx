

function Navbar() {
  return (
   <nav className='container'>
    <div className="logo">
        <img src='/logo.jpg' alt='logo' />
        <h1>wowFood</h1>
        </div>
       

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Foods</li>
        <li>Contact</li>
      </ul>

   </nav>
  )
}

export default Navbar
