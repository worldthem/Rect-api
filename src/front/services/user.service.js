import axios from 'axios';
import authHeader from './front/services/auth-header';



class UserService {
  getPublicContent() {
    return axios.get(window.API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(window.API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(window.API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(window.API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
