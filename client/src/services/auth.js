import { create } from 'apisauce';

const api = create({ baseURL: 'http://localhost:3001/users' });

export default api;
