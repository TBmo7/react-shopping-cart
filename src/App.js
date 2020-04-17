import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		console.log("LOGGING ITEM ENTERING ARRAY APP.JS",item)
		
		setCart(
				[...cart,
				{
					id:item.id,
					title:item.title,
					price:item.price,
					image:item.image
				}
			]
			
		)
		console.log("LOGGING cart FROM ADD ITEM: APP.JS",cart)
	
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products products={products} addItem={addItem} />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
		</div>
	);
}

export default App;
