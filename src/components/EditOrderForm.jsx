import React, { useState } from "react";

function EditOrderForm({ order, onUpdate, onCancel }) {
  const [formData, setFormData] = useState({
    customerName: order.customerName,
    company: order.company,
    orderValue: order.orderValue,
    orderDate: order.orderDate,
    status: order.status,
    avatar: order.avatar,
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
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <h2>Edit Order</h2>
      
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
          type="text"
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
        <button type="submit">Save Changes</button>
      </div>
    </form>
  );
}

export default EditOrderForm;