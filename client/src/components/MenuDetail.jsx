import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MenuDetail() {
  const { id } = useParams();
  const [menu, setMenu] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/menus/${id}`).then(res => {
      setMenu(res.data.menu);
      setItems(res.data.items);
    });
  }, [id]);

  return (
    <div>
      <h2>{menu?.name}</h2>
      <p>{menu?.description}</p>
      {items.map(item => (
        <div key={item._id}>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default MenuDetail;
