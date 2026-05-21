function ProductCard({ product, setSelectedProduct }) {
  return (
    <div
      className="product-card"
      onClick={() => setSelectedProduct(product)}
    >
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <p>
        {product.availability
          ? "In Stock"
          : "Out of Stock"}
      </p>
    </div>
  );
}

export default ProductCard;