import React from 'react'
import './Category.css'

const Category = () => {
  return (
     
     
     
     <div class="form-wrapper">
    <h2>Create Category</h2>
    <form class="category-form">
      <div class="form-group">
        <label for="categoryCode">Category Code</label>
        <input
          type="text"
          id="categoryCode"
          name="categoryCode"
          
          required
        />
      </div>

      <div class="form-group">
        <label for="categoryName">Category Name</label>
        <input
          type="text"
          id="categoryName"
          name="categoryName"
          
          required
        />
      </div>

      <div class="form-group">
        <label for="status">Status</label>
        <select id="status" name="status" required>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div class="button-group">
        <button type="reset" class="btn reset">Reset</button>
        <button type="submit" class="btn submit">Save Category</button>
      </div>
    </form>
  </div>
  )
}
export default Category