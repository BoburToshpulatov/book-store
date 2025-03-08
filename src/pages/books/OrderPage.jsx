import React from "react";
import { useGetOrdersByEmailQuery } from "../../redux/features/orders/ordersApi";
import { useAuth } from "../../context/AuthContext";

const OrderPage = () => {
  const { currentUser } = useAuth();
  const {
    data: orders = [],
    isLoading,
    isError,
  } = useGetOrdersByEmailQuery(currentUser.email);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  if (isError) return <div>Error getting orders data</div>;
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold mb4">Your Orders</h2>
        {orders.length === 0 ? (
          <div>No orders found</div>
        ) : (
          <div>
            {orders.map((order, index) => (
              <div key={order._id} className="border-b mb-4 pb-4">
                <p className="p-1 bg-secondary text-white w-10 rounded mb-1">
                  # {index + 1}
                </p>
                <h2 className="font-bold">Order ID: {order._id}</h2>
                <p className="text-gray-600">Name: {order.name}</p>
                <p className="text-gray-600">Email: {order.email}</p>
                <p className="text-gray-600">Phone: {order.phone}</p>
                <p className="text-gray-600">Total Price: {order.TotalPrice}</p>
                <h3 className="font-semibold mt-2">Address:</h3>
                <p>
                  {" "}
                  {order.address.city}, {order.address.state},
                  {order.address.country},{order.address.zipcode}
                </p>
                <h3 className="font-semibold mt-2">Products ID:</h3>
                <ul>
                  {order.productIds.map((productId) => (
                    <li key={productId}>{productId}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
