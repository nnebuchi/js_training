const getProducts = async () => {
  let response = await fetch(`${base_url}/api/products`);
  let data = await response.json();
  return data;
};

const getSingleProducts = async (product_id) => {
  let response = await fetch(`${base_url}/api/products/${product_id}`);
  let data = await response.json();
  return data;
};
