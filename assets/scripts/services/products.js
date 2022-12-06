const getProducts = ()=>{
	return fetch(`${base_url}/api/products`)
	.then((response)=>{
		return response.json();
	})
}

