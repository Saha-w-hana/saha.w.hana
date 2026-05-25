import { useState } from 'react';
import menuCategories from '../data/menuItems';

function Order() {
  const [quantities, setQuantities] = useState({});
  const [message, setMessage] = useState('');
  let counter = 0;

  const totalItems = menuCategories.reduce((sum, category) => {
    return sum + category.items.reduce((itemSum, item) => itemSum + Number(quantities[item.fieldName] || 0), 0);
  }, 0);

  const totalPrice = menuCategories.reduce((sum, category) => {
    return sum + category.items.reduce((itemSum, item) => {
      return itemSum + Number(quantities[item.fieldName] || 0) * item.priceValue;
    }, 0);
  }, 0);

  function handleQuantityChange(fieldName, value) {
    setQuantities({
      ...quantities,
      [fieldName]: Number(value)
    });
    setMessage('');
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (totalItems === 0) {
      setMessage('Please select at least one item before placing your order.');
      return;
    }

    setMessage(`Thank you. Your order was received. Estimated total: $${totalPrice.toFixed(2)}.`);
  }

  return (
    <div className="container">
      <div className="order-section">
        <h2>Place Your Order</h2>
        <p className="order-instructions">Select the quantity for each item you want, then fill in your details.</p>

        <form className="order-form" action="#" method="post" onSubmit={handleSubmit}>
          <div className="order-layout">
            <div className="order-menu">
              {menuCategories.map((category) => (
                <div key={category.title}>
                  <h3>{category.title}</h3>
                  {category.items.map((item) => {
                    counter += 1;
                    const id = `qty${counter}`;

                    return (
                      <div className="order-item" key={item.name}>
                        <label htmlFor={id} className="item-name">{item.name}</label>
                        <span className="price">{item.price}</span>
                        <select
                          id={id}
                          name={item.fieldName}
                          value={quantities[item.fieldName] || 0}
                          onChange={(event) => handleQuantityChange(item.fieldName, event.target.value)}
                        >
                          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                            <option value={number} key={number}>{number}</option>
                          ))}
                        </select>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="cart">
              <h3>Your Details</h3>

              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />

              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                pattern="[0-9]+"
                inputMode="numeric"
                title="Please enter numbers only"
                required
              />

              <label htmlFor="address">Delivery Address:</label>
              <textarea id="address" name="address" placeholder="Enter your delivery address" required></textarea>

              <label htmlFor="notes">Special Notes (optional):</label>
              <textarea id="notes" name="notes" placeholder="Any special requests?"></textarea>

              <div className="order-summary">
                <p><strong>Selected Items:</strong> {totalItems}</p>
                <p><strong>Estimated Total:</strong> ${totalPrice.toFixed(2)}</p>
              </div>

              <label>Payment Method:</label>
              <div className="payment-options">
                <div className="payment-option">
                  <input type="radio" id="pay-pickup" name="payment" value="pickup" defaultChecked />
                  <label htmlFor="pay-pickup">Pay on Pickup</label>
                </div>
                <div className="payment-option">
                  <input type="radio" id="pay-card" name="payment" value="card" />
                  <label htmlFor="pay-card">Debit / Credit Card</label>
                </div>
              </div>

              <button type="submit" className="checkout-btn">Place Order</button>
              {message && <p className={totalItems === 0 ? 'alert-message' : 'success-message'}>{message}</p>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Order;
