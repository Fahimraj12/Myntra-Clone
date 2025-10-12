import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BagSummary = () => {
  const bagItemsIds = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);

  const finalItems = items.filter((item) => bagItemsIds.includes(item.id));

  let CONVENIENCE_FEES = 99;
  let totalItem = bagItemsIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  // ✅ Function to handle order placement
  const handlePlaceOrder = () => {
    if (totalItem === 0) {
      toast.warn("🛒 Your bag is empty! Add items before placing an order.");
    } else {
      toast.success("🎉 Order placed successfully!");
    }
  };

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items)</div>

        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>

        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>

        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{CONVENIENCE_FEES}</span>
        </div>

        <hr />

        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>

      <button className="btn-place-order" onClick={handlePlaceOrder}>
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>

      {/* ✅ Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </div>
  );
};

export default BagSummary;
