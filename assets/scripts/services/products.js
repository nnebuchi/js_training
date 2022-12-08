
const getProducts = async () => {
  let response = await fetch(`${base_url}/api/products`);
  let data = await response.json();
  return data;
};
