import React from 'react'

function Foodmenu() {
  return (
    <section className="food-menu">
        <h1>Food Menu</h1>
        <div className="menu-items">

          <div className="menu-item">
            <img src="momo.jpg" alt="Food Title" />
            <div><h3>Food Title</h3>
            <p>Made with Italian Sauce, Chicken, and organice vegetables.</p>
            <span>$2.3</span>
            <button>Order Now</button>
            </div>
          </div>

          <div className="menu-item">
            <img src="burgerblack.jpg" alt="Smoky Burger" />
           <div> <h3>Smoky Burger</h3>
            <p>Made with Italian Sauce, Chicken, and organice vegetables.</p>
            <span>$2.3</span>
            <button>Order Now</button>
            </div>
          </div>

          <div className="menu-item">
            <img src="burgerblack.jpg" alt="Nice Burger" />
            <div><h3>Nice Burger</h3>
            <p>Made with Italian Sauce, Chicken, and organice vegetables.</p>
            <span>$2.3</span>
            <button>Order Now</button>
            </div>
          </div>

          <div className="menu-item">
            <img src="piza.jpg" alt="Food Title" />
           <div> <h3>Food Title</h3>
            <p>Made with Italian Sauce, Chicken, and organice vegetables.</p>
            <span>$2.3</span>
            <button>Order Now</button>
            </div>
          </div>

          <div className="menu-item">
            <img src="momo.jpg" alt="Food Title" />
           <div> <h3>Food Title</h3>
            <p>Made with Italian Sauce, Chicken, and organice vegetables.</p>
            <span>$2.3</span>
            <button>Order Now</button>
            </div>
          </div>

          <div className="menu-item">
            <img src="piza.jpg" alt="Chicken Steam Momo" />
           <div> <h3>Chicken Steam Momo</h3>
            <p>Made with Italian Sauce, Chicken, and organice vegetables.</p>
            <span>$2.3</span>
            <button>Order Now</button>
            </div>
          </div>
        </div>
        <button className="see-all">See All Foods</button>
      </section>
  )
}

export default Foodmenu