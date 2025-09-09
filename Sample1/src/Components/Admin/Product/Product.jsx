import React, { useState } from 'react';
import './Product.css';

function ProductForm() {
  const [formData, setFormData] = useState({
    pname: '',
    pcategory: '',
    pdescription: '',
    price: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'image' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can send formData to your backend or API here
  };

  return (
    <div className="form-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="pname"
            value={formData.pname}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Category:
          <input
            type="text"
            name="pcategory"
            value={formData.pcategory}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Description:
          <textarea
            name="pdescription"
            value={formData.pdescription}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Image:
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit Product</button>
      </form>
    </div>
  );
}


export default ProductForm;