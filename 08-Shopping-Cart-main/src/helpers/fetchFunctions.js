export const fetchProduct = async (ID) => {
  if (!ID) throw new Error('ID não informado');
  const result = await fetch(`https://api.mercadolibre.com/items/${ID}`);
  const data = await result.json();
  return data;
};

export const fetchProductsList = async (search) => {
  if (!search) throw new Error('Termo de busca não informado');
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${search}`);
  const data = await result.json();
  return data.results;
};
