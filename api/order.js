
// File: /api/order.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({status:'error', message:'Method not allowed'});
  try{
    const order = req.body;
    // very basic validation
    if(!order || !order.items || !order.address) return res.status(400).json({status:'error', message:'Invalid order'});

    // Save to orders.json in repo root (for demo). On some serverless providers file writes may be ephemeral.
    const filePath = path.join(process.cwd(), 'orders.json');
    let orders = [];
    if(fs.existsSync(filePath)){
      const raw = fs.readFileSync(filePath, 'utf8');
      orders = JSON.parse(raw || '[]');
    }
    const id = Date.now().toString(36);
    orders.push({...order, id});
    fs.writeFileSync(filePath, JSON.stringify(orders, null, 2));
    return res.status(200).json({status:'success', message:'Order saved', id});
  } catch(e){
    console.error(e);
    return res.status(500).json({status:'error', message:'Server error'});
  }
  }
                                              
