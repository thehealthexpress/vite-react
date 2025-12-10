// File: /api/order.js
import fs from 'fs';
export default function handler(req, res){
  if(req.method==='POST'){
    const order = req.body;
    // Save orders to file (simple demo)
    const filePath = './orders.json';
    let orders=[];
    if(fs.existsSync(filePath)){
      const data = fs.readFileSync(filePath);
      orders = JSON.parse(data);
    }
    orders.push({...order, id:Date.now()});
    fs.writeFileSync(filePath, JSON.stringify(orders,null,2));
    res.status(200).json({status:'success', message:'Order saved'});
  } else {
    res.status(405).json({status:'error', message:'Method not allowed'});
  }
  }

