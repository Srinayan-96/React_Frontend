import { useState, useEffect } from "react";

const PLACEHOLDER = "https://via.placeholder.com/200";

const CATEGORIES = ["Books", "Stationery", "Snacks", "Devices"];

const emptyForm = {
  name: "",
  category: "",
  manufacturer: "",
  weight: "",
  price: "",
  discount: "",
  availability: true,
  image: PLACEHOLDER,
  sizes: [],
};

function AdminForm({ initialData, onSubmit, onCancel, mode }) {

  const [formData, setFormData] = useState(emptyForm);

  const [sizeInput, setSizeInput] = useState({
    size: "",
    price: "",
  });

  useEffect(() => {

    if (initialData) {
      setFormData({
        ...initialData,
        sizes: initialData.sizes || [],
      });

    } else {
      setFormData(emptyForm);
    }

  }, [initialData]);

  function handleChange(e) {

    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function addSize() {

    if (!sizeInput.size || !sizeInput.price) return;

    setFormData((prev) => ({
      ...prev,
      sizes: [
        ...prev.sizes,
        {
          size: sizeInput.size,
          price: Number(sizeInput.price),
        },
      ],
    }));

    setSizeInput({
      size: "",
      price: "",
    });
  }

  function removeSize(index) {

    setFormData((prev) => ({
      ...prev,
      sizes: prev.sizes.filter((_, i) => i !== index),
    }));
  }

  function handleSubmit(e) {

    e.preventDefault();

    onSubmit({
      ...formData,
      price: Number(formData.price),
      discount: Number(formData.discount),
    });

    if (mode === "add") {
      setFormData(emptyForm);
    }
  }

  return (

    <form className="admin-form" onSubmit={handleSubmit}>

      <h2>
        {mode === "edit"
          ? "✏️ Edit Product"
          : "➕ Add New Product"}
      </h2>

      <div className="form-grid">

        <div className="form-group">
          <label>Product Name *</label>

          <input
            type="text"
            name="name"
            placeholder="e.g. Classmate Notebook"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Category *</label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">
              -- Select Category --
            </option>

            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Manufacturer *</label>

          <input
            type="text"
            name="manufacturer"
            placeholder="e.g. Pearson"
            value={formData.manufacturer}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Weight / Volume</label>

          <input
            type="text"
            name="weight"
            placeholder="e.g. 500g, 200ml"
            value={formData.weight}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Price (₹) *</label>

          <input
            type="number"
            name="price"
            placeholder="e.g. 450"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
          />
        </div>

        <div className="form-group">
          <label>Discount (%)</label>

          <input
            type="number"
            name="discount"
            placeholder="e.g. 10"
            value={formData.discount}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </div>

        <div className="form-group">
          <label>Image URL</label>

          <input
            type="text"
            name="image"
            placeholder="Paste image URL"
            value={formData.image}
            onChange={handleChange}
          />

          {formData.image && (
            <img
              src={formData.image}
              alt="Preview"
              className="image-preview"
              style={{
                width: "120px",
                marginTop: "10px",
                borderRadius: "8px",
              }}
            />
          )}
        </div>

        <div className="form-group availability-group">

          <label>
            <input
              type="checkbox"
              name="availability"
              checked={formData.availability}
              onChange={handleChange}
            />

            &nbsp; Available / In Stock
          </label>

        </div>

      </div>

      <div className="sizes-section">

        <h3>
          Size / Variant Options (Optional)
        </h3>

        <div className="size-add-row">

          <input
            type="text"
            placeholder="Variant (e.g. A4, 32GB, 1m)"
            value={sizeInput.size}
            onChange={(e) =>
              setSizeInput((prev) => ({
                ...prev,
                size: e.target.value,
              }))
            }
          />

          <input
            type="number"
            placeholder="Price for this variant"
            value={sizeInput.price}
            onChange={(e) =>
              setSizeInput((prev) => ({
                ...prev,
                price: e.target.value,
              }))
            }
            min="0"
          />

          <button
            type="button"
            className="btn-add-size"
            onClick={addSize}
          >
            Add Variant
          </button>

        </div>

        {formData.sizes.length > 0 && (

          <table className="sizes-table">

            <thead>
              <tr>
                <th>Variant</th>
                <th>Price (₹)</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody>

              {formData.sizes.map((s, i) => (

                <tr key={i}>

                  <td>{s.size}</td>

                  <td>₹{s.price}</td>

                  <td>

                    <button
                      type="button"
                      className="btn-remove-size"
                      onClick={() => removeSize(i)}
                    >
                      ✕
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

      <div className="form-actions">

        <button
          type="submit"
          className="btn-submit"
        >
          {mode === "edit"
            ? "💾 Save Changes"
            : "➕ Add Product"}
        </button>

        <button
          type="button"
          className="btn-cancel"
          onClick={onCancel}
        >
          Cancel
        </button>

      </div>

    </form>
  );
}

export default AdminForm;