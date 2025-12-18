let orders = global.orders || [];
global.orders = orders;

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.json(orders);
  }

  res.status(405).json({ error: "Method not allowed" });
}
