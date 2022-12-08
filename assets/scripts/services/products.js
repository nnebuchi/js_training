// const getProducts = ()=>{
// 	return fetch(`${base_url}/api/products`)
// 	.then((response)=>{
// 		return response.json();
// 	})
// }
const getProducts = async () => {
  let response = await fetch(`${base_url}/api/products`);
  let data = await response.json();
  return data;
};
