const cepInput = document.querySelector('.cep-input');
const cepBtn = document.querySelector('.cep-button');
const cartAddress = document.querySelector('.cart__address');

export const getAddress = async () => {
  const cep = cepInput.value;
  const result01 = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
  const result02 = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);
  const textError = 'CEP não encontrado';
  try {
    const responses = await Promise.any([result01, result02]);
    const data = await responses.json();
    const { address, district, city, state, street, neighborhood } = data;
    if (data && address && district && city && state) {
      const textRtn = `${address} - ${district} - ${city} - ${state}`;
      cartAddress.innerHTML = textRtn;
    } else if (street) {
      cartAddress.innerHTML = `${street} - ${neighborhood} - ${city} - ${state}`;
    } else {
      throw new Error(textError);
    }
    return data;
  } catch (error) {
    cartAddress.innerHTML = textError;
  }
};

export const searchCep = async () => {
  cepBtn.addEventListener('click', getAddress());
};
