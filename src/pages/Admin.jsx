import { useState } from "react";
import Navbar from "../components/Navbar";
import AdminForm from "../components/AdminForm";
import { useProducts } from "../hooks/useProducts";

function Admin() {

  const {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
  } = useProducts();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [view, setView] = useState("list");

  const [editProduct, setEditProduct] = useState(null);

  function handleLogin(e) {

    e.preventDefault();

    if (username === "admin" && password === "1234") {

      setIsLoggedIn(true);

    } else {

      alert("Invalid username or password");
    }
  }

  function handleEdit(product) {

    setEditProduct(product);

    setView("edit");
  }

  function handleDelete(id) {

    const confirmDelete = window.confirm(
      "Delete this product?"
    );

    if (confirmDelete) {
      deleteProduct(id);
    }
  }

  function handleFormSubmit(product) {

    if (view === "edit") {

      updateProduct(product);

    } else {

      addProduct(product);
    }

    setView("list");

    setEditProduct(null);
  }

  function handleCancel() {

    setView("list");

    setEditProduct(null);
  }

  if (!isLoggedIn) {

    return (

      <div>

        <Navbar />

        <div className="login-container">

          <form
            className="login-form"
            onSubmit={handleLogin}
          >

            <h2>Admin Login</h2>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

            <button type="submit">
              Login
            </button>

          </form>

        </div>

      </div>
    );
  }

  return (

    <div>

      <Navbar />

      <div className="admin-container">

        <div className="admin-header">

          <h2>
            LPU Campus Store Admin Panel
          </h2>

          <div className="admin-buttons">

            <button
              className={
                view === "list"
                  ? "active-btn"
                  : ""
              }
              onClick={handleCancel}
            >
              All Products
            </button>

            <button
              className={
                view === "add"
                  ? "active-btn"
                  : ""
              }
              onClick={() => {
                setView("add");
                setEditProduct(null);
              }}
            >
              Add Product
            </button>

          </div>

        </div>

        {view === "list" && (

          <div className="table-container">

            <table className="admin-table">

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Image</th>

                  <th>Name</th>

                  <th>Category</th>

                  <th>Price</th>

                  <th>Status</th>

                  <th>Actions</th>

                </tr>

              </thead>

              <tbody>

                {products.map((product) => (

                  <tr key={product.id}>

                    <td>{product.id}</td>

                    <td>

                      <img
                        src={product.image}
                        alt={product.name}
                        width="60"
                        height="60"
                        style={{
                          objectFit: "cover",
                          borderRadius: "6px",
                        }}
                      />

                    </td>

                    <td>{product.name}</td>

                    <td>{product.category}</td>

                    <td>₹{product.price}</td>

                    <td>
                      {product.availability
                        ? "In Stock"
                        : "Out of Stock"}
                    </td>

                    <td>

                      <button
                        onClick={() =>
                          handleEdit(product)
                        }
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(product.id)
                        }
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

        {(view === "add" || view === "edit") && (

          <AdminForm
            initialData={editProduct}
            onSubmit={handleFormSubmit}
            onCancel={handleCancel}
            mode={view}
          />

        )}

      </div>

    </div>
  );
}

export default Admin;