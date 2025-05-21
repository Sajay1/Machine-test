// pages/MenuPage.jsx
import React, { useEffect, useState } from 'react';
import { fetchMenus, fetchMenuById, createMenu, addItemToMenu } from '../services/api';

function MenuPage() {
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
    fetchMenus().then(res => setMenus(res.data));
  }, []);

  const handleMenuClick = (id) => {
    fetchMenuById(id).then(res => setSelectedMenu(res.data));
  };
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        await createMenu({ name, description });
        setName('');
        setDescription('');
        fetchMenus().then(res => setMenus(res.data));
    };

  return (
    <div>
      <h1>Menus</h1>
      {menus.map(menu => (
        <div key={menu._id} onClick={() => handleMenuClick(menu._id)}>
          <h3>{menu.name}</h3>
          <p>{menu.description}</p>
        </div>
      ))}
      {selectedMenu && (
        <div>
          <h2>{selectedMenu.name} Items</h2>
          {selectedMenu.items.map(item => (
            <div key={item._id}>
              <strong>{item.name}</strong> - {item.description} (${item.price})
            </div>
          ))}
        </div>
      )}
      <div>
          <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Menu Name" />
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Create Menu</button>
    </form>
      </div>
    </div>
  );
}

export default MenuPage;
