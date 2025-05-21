import { useState } from 'react';
import axios from 'axios';

function CreateMenuForm({ onMenuCreated }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/menus', { name, description });
    setName('');
    setDescription('');
    onMenuCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Menu Name" />
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Create Menu</button>
    </form>
  );
}

export default CreateMenuForm;
