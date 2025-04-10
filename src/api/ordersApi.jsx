const API_URL = "http://localhost:3001"; // JSON server thường chạy trên port 3000 hoặc 3001

// Helper function để xử lý response
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Request failed');
  }
  return response.json();
};

// Lấy tất cả đơn hàng
export const getOrders = async () => {
  try {
    const response = await fetch(`${API_URL}/orders`);
    return await handleResponse(response);
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

// Lấy chi tiết 1 đơn hàng
export const getOrder = async (orderId) => {
  try {
    const response = await fetch(`${API_URL}/orders/${orderId}`);
    return await handleResponse(response);
  } catch (error) {
    console.error(`Error fetching order ${orderId}:`, error);
    throw error;
  }
};

// Tạo mới đơn hàng
export const createOrder = async (orderData) => {
  try {
    const response = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...orderData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

// Cập nhật đơn hàng
export const updateOrder = async (orderId, updatedData) => {
  try {
    const response = await fetch(`${API_URL}/orders/${orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...updatedData,
        updatedAt: new Date().toISOString()
      }),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error(`Error updating order ${orderId}:`, error);
    throw error;
  }
};

// Xóa đơn hàng
export const deleteOrder = async (orderId) => {
  try {
    const response = await fetch(`${API_URL}/orders/${orderId}`, {
      method: "DELETE",
    });
    return await handleResponse(response);
  } catch (error) {
    console.error(`Error deleting order ${orderId}:`, error);
    throw error;
  }
};

// Tìm kiếm đơn hàng
export const searchOrders = async (query) => {
  try {
    const response = await fetch(`${API_URL}/orders?q=${encodeURIComponent(query)}`);
    return await handleResponse(response);
  } catch (error) {
    console.error('Error searching orders:', error);
    throw error;
  }
};