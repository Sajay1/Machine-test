import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MenuList() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/menus').then(res => setMenus(res.data));
  }, []);

  return (
    <div>
      {menus.map(menu => (
        <Link to={`/menu/${menu._id}`} key={menu._id}>
          <div>{menu.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default MenuList;
