document.addEventListener('DOMContentLoaded', () => {
  const cartContainer = document.querySelector('.cart-container');
  if (cartContainer) {
    const updateCartTotals = () => {
      let subtotal = 0;
      const items = document.querySelectorAll('.cart-item');

      items.forEach(item => {
        const priceText = item.querySelector('.price').textContent;
        const price = parseFloat(priceText.replace(' zł', '').trim());
        const qty = parseInt(item.querySelector('.qty-input').value);

        const itemTotal = price * qty;
        item.querySelector('.item-total').textContent = itemTotal + ' zł';
        subtotal += itemTotal;
      });

      const summaryProducts = document.querySelector('.cart-summary p:nth-of-type(1) strong');
      const summaryTotal = document.querySelector('.summary-total strong');
      const deliveryPriceText = document.querySelector('.cart-summary p:nth-of-type(2) strong').textContent;
      const deliveryPrice = parseFloat(deliveryPriceText.replace(' zł', '').trim());

      if (summaryProducts && summaryTotal) {
        summaryProducts.textContent = subtotal + ' zł';
        summaryTotal.textContent = (subtotal + deliveryPrice) + ' zł';
      }
    };
    document.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const input = this.parentElement.querySelector('.qty-input');
        let value = parseInt(input.value);
        if (this.textContent === '+') {
          input.value = value + 1;
        } else if (this.textContent === '-' && value > 1) {
          input.value = value - 1;
        }
        updateCartTotals();
      });
    });

    document.querySelectorAll('.qty-input').forEach(input => {
      input.addEventListener('change', function() {
        if (this.value < 1 || isNaN(this.value)) this.value = 1;
        updateCartTotals();
      });
    });
    document.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        if (confirm('Czy na pewno chcesz usunąć ten produkt z koszyka?')) {
          this.closest('.cart-item').remove();
          updateCartTotals();
        }
      });
    });
  }

  const deliveryRadios = document.querySelectorAll('input[name="delivery"]');
  if (deliveryRadios.length > 0) {
    deliveryRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        const labelText = radio.parentElement.textContent;
        let deliveryCost = 0;
        if (labelText.includes('15 zł')) deliveryCost = 15;
        if (labelText.includes('12 zł')) deliveryCost = 12;

        const productsCost = 518;
        const deliveryElement = document.querySelector('.checkout-summary p:nth-of-type(2) strong');
        const totalElement = document.querySelector('.summary-total strong');

        if (deliveryElement && totalElement) {
          deliveryElement.textContent = deliveryCost + ' zł';
          totalElement.textContent = (productsCost + deliveryCost) + ' zł';
        }
      });
    });

    const payBtn = document.querySelector('.checkout-btn');
    if (payBtn) {
      payBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Dziękujemy za zamówienie! Trwa przekierowanie do płatności...');
      });
    }
  }
});