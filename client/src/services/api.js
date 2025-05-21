// services/api.js
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/menus' });

export const fetchMenus = () => API.get('/');
export const fetchMenuById = (id) => API.get(`/${id}`);
export const createMenu = (menu) => API.post('/', menu);
export const addItemToMenu = (id, item) => API.post(`/${id}/items`, item);
