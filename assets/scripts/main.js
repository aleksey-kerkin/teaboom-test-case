document.addEventListener('DOMContentLoaded', () => {
  const packs = document.querySelector('.product__packs');
  const sku = document.getElementById('product-sku');
  const oldPrice = document.getElementById('product-old-price');
  const price = document.getElementById('product-price');
  const cartContext = document.getElementById('cart-context');

  packs.addEventListener('change', (event) => {
    const input = event.target;

    if (!(input instanceof HTMLInputElement) || input.type !== 'radio') {
      return;
    }

    const { sku: nextSku, price: nextPrice, oldPrice: nextOldPrice } = input.dataset;

    if (!nextSku || !nextPrice || !nextOldPrice) {
      return;
    }

    const weight = input.labels?.[0]?.textContent?.trim() ?? '';

    sku.textContent = nextSku;
    oldPrice.textContent = nextOldPrice;
    price.textContent = nextPrice;
    cartContext.textContent = `, Ананасовый улун, ${weight}`;
  });
});
