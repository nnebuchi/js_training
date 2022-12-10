const addToCart = async (product_id)=>{
	const guest_token = getCookie("guest");
	let sendData = await fetch(`${base_url}/api/cart/add`, {
		method:"POST",
		body:{
			product_id:product_id
			guest_token: guest_token
		}
	})

	let response = await sendData.json();
	
	return response;
}

const setCartCookies = async (cart)=>{
	document.cookie = "cart="+JSON.stringify(cart)+";path=/";
}

const  getCart = ()=>{
	if(getCookie("cart") ===""){
		return null;
	}else{
		return JSON.parse(getCookie("cart"));
	}
	
}
