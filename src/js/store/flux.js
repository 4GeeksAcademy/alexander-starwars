const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			URL_BASE: "https://www.swapi.tech/api",
			personas: [],
			info: [],
		
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

			getInfo: async (url) => {
				const store = getStore()
				let response = await fetch(`${url}/`);
				if(response.ok){
					let body = await response.json()
					setStore({
						...store,
						info:body.result})
				}
			},

			


		}
	};
};

export default getState;
