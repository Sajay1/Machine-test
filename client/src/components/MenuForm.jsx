import { useState } from 'react';
import axios from 'axios';

export default function MenuForm({ onMenuCreated }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/menus', { name, description });
    onMenuCreated(res.data);
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input className="border p-2 w-full" value={name} onChange={e => setName(e.target.value)} placeholder="Menu name" />
      <input className="border p-2 w-full" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <button className="bg-blue-500 text-white px-4 py-2">Add Menu</button>
    </form>
  );
}
