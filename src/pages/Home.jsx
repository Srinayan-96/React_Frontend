import { useState } from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import ProductPopup from "../components/ProductPopup";
import { useProducts } from "../hooks/useProducts";

function Home() {
  const { products } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <Navbar />
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="products-container">
        {filteredProducts.length === 0 ? (
          <p style={{ gridColumn: "1/-1", textAlign: "center", color: "#888", padding: "40px" }}>
            No products found.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              setSelectedProduct={setSelectedProduct}
            />
          ))
        )}
      </div>
      {selectedProduct && (
        <ProductPopup product={selectedProduct} setSelectedProduct={setSelectedProduct} />
      )}
    </div>
  );
}

export default Home;
