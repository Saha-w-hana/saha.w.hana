import { useMemo, useState } from 'react';
import menuCategories from '../data/menuItems';

const emptyCustomer = {
  fullName: '',
  phone: '',
  address: '',
  notes: '',
  payment: 'Pay on Pickup'
};

function Order() {
  const [quantities, setQuantities] = useState({});
  const [customer, setCustomer] = useState(emptyCustomer);
  const [error, setError] = useState('');
  const [confirmation, setConfirmation] = useState(null);

  const allItems = useMemo(() => menuCategories.flatMap((category) => category.items), []);

  const selectedItems = allItems
    .map((item) => ({ ...item, quantity: Number(quantities[item.id] || 0) }))
    .filter((item) => item.quantity > 0);

  const subtotal = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryFee;

  function handleQuantityChange(itemId, value) {
    setQuantities((previous) => ({ ...previous, [itemId]: value }));
    setConfirmation(null);
    setError('');
  }

  function handleCustomerChange(event) {
    const { name, value } = event.target;
    setCustomer((previous) => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (selectedItems.length === 0) {
      setError('Please select at least one item before placing the order.');
      return;
    }

    setError('');
    setConfirmation({
      name: customer.fullName,
      total: total.toFixed(2),
      items: selectedItems.length
    });
  }

  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <p className="section-label mb-2">Order Online</p>
        <h2 className="fw-bold">Place Your Order</h2>
        <p className="text-muted mx-auto page-intro">
          Select the quantity for each item, fill in your information, and confirm your order.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          <div className="col-lg-8">
            {menuCategories.map((category) => (
              <div className="order-card rounded-4 shadow-sm p-4 mb-4" key={category.name}>
                <h3 className="h4 fw-bold mb-3">{category.name}</h3>
                {category.items.map((item) => (
                  <div className="order-row" key={item.id}>
                    <div>
                      <label htmlFor={`qty-${item.id}`} className="fw-semibold mb-0">
                        {item.name}
                      </label>
                      <div className="text-muted small">${item.price.toFixed(2)}</div>
                    </div>
                    <select
                      id={`qty-${item.id}`}
                      className="form-select quantity-select"
                      value={quantities[item.id] || 0}
                      onChange={(event) => handleQuantityChange(item.id, event.target.value)}
                    >
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                        <option value={number} key={number}>{number}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <div className="customer-card rounded-4 shadow p-4 sticky-lg-top">
              <h3 className="h4 fw-bold mb-3">Your Details</h3>

              {error && <div className="alert alert-danger py-2">{error}</div>}
              {confirmation && (
                <div className="alert alert-success py-2">
                  Thank you, {confirmation.name}. Your order with {confirmation.items} item type(s) was received.
                  Total: ${confirmation.total}
                </div>
              )}

              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-control"
                  placeholder="Enter your name"
                  value={customer.fullName}
                  onChange={handleCustomerChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="Enter your phone number"
                  pattern="[0-9]+"
                  inputMode="numeric"
                  title="Please enter numbers only"
                  value={customer.phone}
                  onChange={handleCustomerChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="address" className="form-label">Delivery Address</label>
                <textarea
                  id="address"
                  name="address"
                  className="form-control"
                  placeholder="Enter your delivery address"
                  rows="3"
                  value={customer.address}
                  onChange={handleCustomerChange}
                  required
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="notes" className="form-label">Special Notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  className="form-control"
                  placeholder="Any special requests?"
                  rows="2"
                  value={customer.notes}
                  onChange={handleCustomerChange}
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="payment" className="form-label">Payment Method</label>
                <select
                  id="payment"
                  name="payment"
                  className="form-select"
                  value={customer.payment}
                  onChange={handleCustomerChange}
                >
                  <option>Pay on Pickup</option>
                  <option>Cash on Delivery</option>
                  <option>Debit / Credit Card</option>
                </select>
              </div>

              <div className="summary-box rounded-3 p-3 mb-3">
                <h4 className="h5 fw-bold">Order Summary</h4>
                {selectedItems.length === 0 ? (
                  <p className="text-muted mb-2">No items selected yet.</p>
                ) : (
                  <ul className="list-unstyled mb-2">
                    {selectedItems.map((item) => (
                      <li className="d-flex justify-content-between small" key={item.id}>
                        <span>{item.quantity} x {item.name}</span>
                        <span>${(item.quantity * item.price).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="d-flex justify-content-between small">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between small">
                  <span>Delivery</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button type="submit" className="btn btn-brand w-100">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Order;
