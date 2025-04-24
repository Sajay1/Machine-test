import { useEffect, useState } from 'react';
import axios from 'axios';
import MenuForm from './components/MenuForm';
import MenuItemForm from './components/MenuItemForm';
import MenuList from './components/MenuList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import form from './image/image1.png'


export default function App() {
  const [menus, setMenus] = useState([]);
  const [selectedMenuId, setSelectedMenuId] = useState(null);
  const [items, setItems] = useState([]);

  const fetchMenus = async () => {
    const res = await axios.get('http://localhost:5000/api/menus');
    setMenus(res.data);
  };

  const fetchItems = async (menuId) => {
    const res = await axios.get(`http://localhost:5000/api/menus/${menuId}/items`);
    setItems(res.data);
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  const handleMenuCreated = (menu) => {
    setMenus([...menus, menu]);
  };

  const handleItemCreated = (item) => {
    setItems([...items, item]);
  };

  const handleMenuClick = (id) => {
    setSelectedMenuId(id);
    fetchItems(id);
  };

  return (
    <div>
      <Navbar/>
      <div className="text-2xl font-bold text-blue-400 absolute top-5 left-5">DEEP <span className="text-white">NET</span> <span className="text-red absolute top-5 left-0">SOFT</span></div>
      <div className='container text-align-center font-color-primary'>
        <h1 className="text-2xl font-bold">Menu</h1>
        </div>
        <div className='p-6 align-content-center'>
        <MenuForm onMenuCreated={handleMenuCreated} />
        </div>
      <MenuList menus={menus} onMenuClick={handleMenuClick} />
      {selectedMenuId && (
        <>
          <MenuItemForm menuId={selectedMenuId} onItemCreated={handleItemCreated} />
          <img src={form} alt="" />
          <div className="border-t pt-4">
            <h2 className="text-xl font-semibold">Menu Items:</h2>
            <ul className="list-disc ml-6 mt-2">
              {items.map(item => (
                <li key={item._id}><strong>{item.name}</strong> - ${item.price} <br />{item.description}</li>
              ))}
            </ul>
          </div>
        </>
      )}
      <div>
      </div>
      <Footer/>
    </div>
  );
}