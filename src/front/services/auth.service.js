import axios from "axios";


class AuthService {

  login(email, password) {
   //alert(window.API_URL);
    return axios
      .post(window.API_URL+ "signin", {
        email,
        password
      }).then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register( email, password) {
    return axios.post(window.API_URL + "signup", {
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();