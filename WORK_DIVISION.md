# Work Division — LPU College Departmental Store (CA2)

## Project Overview
A React-based college departmental store with 4 categories:
**Books**, **Stationery**, **Snacks**, **Devices** (6 products each = 24 products total).

---

## Member Assignments

### Member 1
**Files owned:** `src/data/products.js` · `src/components/AdminForm.jsx` (state/image section) · `src/pages/Admin.jsx` (login section)

| Task | File | Details |
|------|------|---------|
| Product data – Books & Stationery | `src/data/products.js` | Products 1–12 (Books ids 1–6, Stationery ids 7–12) |
| AdminForm – State management | `src/components/AdminForm.jsx` | `useState`, `useEffect`, image upload handlers (`handleImageChange`, `clearImage`) |
| Admin page – Login form & auth | `src/pages/Admin.jsx` | `handleLogin`, login state, login form JSX |

**Quick answers for demo:**
- "What products are in Books/Stationery?" → You own products 1–12
- "How does image upload work?" → You own that logic in AdminForm
- "How does admin login work?" → You own the login form

---

### Member 2
**Files owned:** `src/data/products.js` (Snacks & Devices) · `src/components/AdminForm.jsx` (product fields UI) · `src/pages/Admin.jsx` (products table)

| Task | File | Details |
|------|------|---------|
| Product data – Snacks & Devices | `src/data/products.js` | Products 13–24 (Snacks ids 13–18, Devices ids 19–24) |
| AdminForm – Product fields UI | `src/components/AdminForm.jsx` | Name, Category dropdown, Manufacturer, Weight, Price, Discount, Availability checkbox JSX |
| Admin page – Products table | `src/pages/Admin.jsx` | Table render, `handleEdit`, `handleDelete` |

**Quick answers for demo:**
- "What products are in Snacks/Devices?" → You own products 13–24
- "How is the category dropdown populated?" → You own the `CATEGORIES` constant and `<select>` in AdminForm
- "How does edit/delete work in the table?" → You own those handlers

---

### Member 3
**Files owned:** `src/components/AdminForm.jsx` (sizes section + submit) · `src/pages/Admin.jsx` (header, tabs, view routing) · `src/pages/Home.jsx` · `src/components/Categories.jsx` · `src/components/ProductCard.jsx` · `src/components/ProductPopup.jsx`

| Task | File | Details |
|------|------|---------|
| AdminForm – Sizes & submit | `src/components/AdminForm.jsx` | `addSize`, `removeSize`, `handleSubmit`, sizes table, form-action buttons |
| Admin page – Header & routing | `src/pages/Admin.jsx` | Dashboard header, tab buttons, `handleFormSubmit`, `handleCancel`, form vs list view toggle |
| Home page | `src/pages/Home.jsx` | Category filter state, filtered product list render |
| Category buttons | `src/components/Categories.jsx` | All / Books / Stationery / Snacks / Devices buttons |
| Product card | `src/components/ProductCard.jsx` | Card display on home grid |
| Product popup | `src/components/ProductPopup.jsx` | Popup with full product details + sizes table |

**Quick answers for demo:**
- "How does category filtering work?" → You own Home.jsx + Categories.jsx
- "How are variants/sizes added in the form?" → You own that section of AdminForm
- "How does the product popup show details?" → You own ProductPopup.jsx

---

## Summary Table

| Member | Products (data) | AdminForm section | Admin.jsx section | Other files |
|--------|----------------|-------------------|-------------------|-------------|
| **1** | Books (1–6) + Stationery (7–12) | State, image upload | Login form & auth | — |
| **2** | Snacks (13–18) + Devices (19–24) | Product fields UI | Products table + edit/delete | — |
| **3** | — | Sizes + submit/cancel | Header, tabs, view routing | Home, Categories, ProductCard, ProductPopup |

Each member owns **exactly 1/3 of AdminForm** and **1/3 of Admin.jsx**, with the remaining shared files given to Member 3 who has no product-data section to manage.
