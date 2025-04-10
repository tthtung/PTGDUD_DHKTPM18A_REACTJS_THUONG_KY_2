import React, { useState } from "react";

function AddOrderForm({ onAdd, onCancel }) {
  const [formData, setFormData] = useState({
    customerName: '',
    company: '',
    orderValue: 0,
    orderDate: new Date().toISOString().split('T')[0], // Default to today
    status: 'New',
    avatar: 'https://randomuser.me/api/portraits/men/71.jpg' // Default avatar
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <h2>Add New Order</h2>
      
      <div className="form-group">
        <label>Customer Name</label>
        <input
          type="text"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Company</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Order Value</label>
        <input
          type="number"
          name="orderValue"
          value={formData.orderValue}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Order Date</label>
        <input
          type="date"
          name="orderDate"
          value={formData.orderDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="New">New</option>
          <option value="In-progress">In-progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="form-actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Order</button>
      </div>
    </form>
  );
}

export default AddOrderForm;