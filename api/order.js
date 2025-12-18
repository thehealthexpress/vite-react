// File: /api/order.js

let orders = global.orders || [];
global.orders = orders;

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      status: "error",
      message: "Method not allowed"
    });
  }

  try {
    const order = req.body;

    if (!order || !order.items || !order.phone) {
      return res.status(400).json({
        status: "error",
        message: "Invalid order"
      });
    }

    const newOrder = {
      id: Date.now(),
      ...order,
      status: "NEW",
      time: new Date().toISOString()
    };

    orders.unshift(newOrder);

    return res.status(200).json({
      status: "success",
      message: "Order received",
      order: newOrder
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: "error",
      message: "Server error"
    });
  }
}

