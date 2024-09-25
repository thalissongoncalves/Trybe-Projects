import { searchCep } from './src/helpers/cepFunctions.js';
import { fetchProductsList, fetchProduct } from './src/helpers/fetchFunctions.js';
import { saveCartID, getSavedCartIDs } from './src/helpers/cartFunctions.js';
import { createProductElement, createCartProductElement } from './src/helpers/shopFunctions.js';
// import './style.css';

try {
  const totalPrice = document.querySelector('.total-price');
  let price = Number(localStorage.getItem('totalPrice')) || 0;
  const cartProducts = document.querySelector('.cart__products');
  const getSavedProducts = await getSavedCartIDs();
  const arrayPromise = getSavedProducts.map((element) => fetchProduct(element));
  if (cartProducts.length === 0) {
    totalPrice.innerHTML = 0;
    localStorage.setItem('totalPrice', totalPrice.innerHTML.toString());
  };
  Promise.all(arrayPromise)
    .then((results) => {
      for (let index = 0; index < results.length; index += 1) {
        cartProducts.appendChild(createCartProductElement(results[index]));
      }
      const getProductsCart = document.querySelectorAll('.cart__product');
      getProductsCart.forEach((li) => {
        li.addEventListener('click', async () => {
          const getElementLi = li.lastChild;
          const getProductInfo = getElementLi.previousSibling;
          const getProductPrice = getProductInfo.lastChild;
          const getProductPriceValue = getProductPrice.lastChild;
          const getPrice = getProductPriceValue.textContent;
          const transformNumber = Number(getPrice);
          price -= transformNumber;
          totalPrice.innerHTML = price;
          localStorage.setItem('totalPrice', totalPrice.innerHTML.toString());
        });
      });
      if (cartProducts.length === 0) {
        totalPrice.innerHTML = 0;
        localStorage.setItem('totalPrice', totalPrice.innerHTML.toString());
      };
    })
    .catch((error) => {
      console.log(error);
    });
  const loadingElement = document.querySelector('.loading');
  const getError = document.querySelector('.error');
  const arrayForProducts = await fetchProductsList('computador');
  const getClassProducts = document.querySelector('.products');
  loadingElement.remove();
  for (let index = 0; index < arrayForProducts.length; index += 1) {
    getClassProducts.appendChild(createProductElement(arrayForProducts[index]));
  }
  getError.remove();
  totalPrice.innerHTML = localStorage.getItem('totalPrice');
  if(totalPrice.innerHTML < 0) {
    totalPrice.innerHTML = 0;
    localStorage.setItem('totalPrice', totalPrice.innerHTML.toString());
  };
  const getButton = document.querySelectorAll('.product__add');
  
  getButton.forEach((button) => {
    button.addEventListener('click', async () => {
      const saveElements = button.parentNode;
      const getLastElement = saveElements.lastChild;
      const getProductPrice = getLastElement.previousSibling;
      const productPrice = getProductPrice.lastChild.textContent;
      const transformNumber = Number(productPrice);
      price += transformNumber;
      totalPrice.innerHTML = price;
      localStorage.setItem('totalPrice', totalPrice.innerHTML.toString());
      const productElementId = saveElements.firstChild;
      const productId = productElementId.textContent;
      saveCartID(productId);
      const getDetailsProduct = await fetchProduct(productId);
      const elementCreated = createCartProductElement(getDetailsProduct);
      cartProducts.appendChild(elementCreated);
      const getButtonRemove = elementCreated;
      getButtonRemove.addEventListener('click', () => {
        price -= transformNumber;
        totalPrice.innerHTML = price;
        if(totalPrice.innerHTML < 0) {
          totalPrice.innerHTML = 0;
          localStorage.setItem('totalPrice', totalPrice.innerHTML.toString());
        };
        localStorage.setItem('totalPrice', totalPrice.innerHTML.toString());
      });
    });
  });
} catch (error) {
  const getError = document.querySelector('.error');
  getError.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
}

document.querySelector('.cep-button').addEventListener('click', searchCep);
