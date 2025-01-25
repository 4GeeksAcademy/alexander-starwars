import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

export const Navbar = () => {
const {store, actions} = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star wars</span>
			</Link>
			<div class="btn-group m-5" role="group">
    			<button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      				Favoritos
    			</button>
				<ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
					{
						!store.carrito && <li><span>vacio...</span></li>
					}
					{
						store.carrito && store.carrito.map((item, index) =>(
							<li key={index}>
								<span>{item.name}</span>
								<span onClick={() => actions.removeFromCart(item)}><i class="fa-solid fa-trash"></i></span>
							</li>

						)
						)
					}
					{/* <li><a class="dropdown-item" href="#">Dropdown link</a></li>
					<li><a class="dropdown-item" href="#">Dropdown link</a></li> */}
				</ul>
  			</div>
		</nav>
	);
};
