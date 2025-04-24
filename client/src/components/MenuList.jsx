import vintage from '../image/vintage-old.png'

function MenuList({ menus, onMenuClick }) {
    return (
      <div>
        <img src={vintage} alt="" className='absolute'/>
        <h2 className="flex justify-center text-xl text-white font-semibold relative">Menus:</h2>
        <p className="flex justify-center text-gray-500 relative font-kelly top-287px">Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
        <ul className="list-none ml-6 mt-2">
          {menus.map(menu => (
            <li  key={menu._id}>
              <div className="flex justify-center space-x-4 relative">
          <button className="inline text-white bg-black px-4 py-2 border border-blue-600 rounded hover:bg-blue-600 relative" onClick={() => onMenuClick(menu._id)}>{menu.name}</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default MenuList;