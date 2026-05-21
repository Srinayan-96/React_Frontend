import { useState } from "react";
import defaultProducts from "../data/products";

const STORAGE_KEY = "lpu_store_products";

function getStoredProducts() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // corrupted storage — fall through to defaults
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProducts));
  return defaultProducts;
}

export function useProducts() {
  const [products, setProducts] = useState(getStoredProducts);

  function save(updated) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setProducts(updated);
  }

  function addProduct(product) {
    const maxId = products.reduce((max, p) => (p.id > max ? p.id : max), 0);
    save([...products, { ...product, id: maxId + 1 }]);
  }

  function updateProduct(updated) {
    save(products.map((p) => (p.id === updated.id ? updated : p)));
  }

  function deleteProduct(id) {
    save(products.filter((p) => p.id !== id));
  }

  return { products, addProduct, updateProduct, deleteProduct };
}
