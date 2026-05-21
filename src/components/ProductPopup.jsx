import SizeTable from "./SizeTable";

function ProductPopup({ product, setSelectedProduct }) {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>{product.name}</h2>

        <img src={product.image} alt={product.name} />

        <p>
          <strong>Manufacturer:</strong>{" "}
          {product.manufacturer}
        </p>

        {product.weight && (
          <p>
            <strong>Weight:</strong>{" "}
            {product.weight}
          </p>
        )}

        <p>
          <strong>Price:</strong> ₹{product.price}
        </p>

        <p>
          <strong>Discount:</strong>{" "}
          {product.discount}%
        </p>

        <p>
          <strong>Availability:</strong>{" "}
          {product.availability
            ? "In Stock"
            : "Out of Stock"}
        </p>

        <h3>Available Variants</h3>

        <SizeTable sizes={product.sizes} />

        <button
          onClick={() => setSelectedProduct(null)}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ProductPopup;