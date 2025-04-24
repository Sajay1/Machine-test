import { useState } from 'react';
import axios from 'axios';

export default function MenuItemForm({ menuId, onItemCreated }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`http://localhost:5000/api/menus/${menuId}/items`, {
      name,
      description,
      price: parseFloat(price)
    });
    onItemCreated(res.data);
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 border-t pt-4">
      <h3 className="text-lg font-semibold">Add Item to Menu</h3>
      <input className="border p-2 w-full" value={name} onChange={e => setName(e.target.value)} placeholder="Item name" required />
      <input className="border p-2 w-full" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
      <input type="number" className="border p-2 w-full" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" required />
      <button className="bg-green-500 text-white px-4 py-2">Add Item</button>
    </form>
  );
}