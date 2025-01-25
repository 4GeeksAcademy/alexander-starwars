const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			URL_BASE: "https://www.swapi.tech/api",
			carrito:[],
			personas: [],
			
		
		},

		actions: {

			getPeople: async () => {
				const store = getStore()
				let response = await fetch(`${store.URL_BASE}/people`);
				if(response.ok){
					let body = await response.json()
					setStore({personas:body.results})
				}
			},

			addToCart: newItem => {
				const store = getStore();
				if(!store.carrito.find(item => item.uid == newItem.uid)){
					setStore({carrito:[newItem, ...store.carrito]})
				}
			},

			removeFromCart: targetItem => {
				const store = getStore();
				setStore({carrito: store.carrito.filter(item => item.uid != targetItem.uid)})
			}

			
			


		}
	};
};

export default getState;
