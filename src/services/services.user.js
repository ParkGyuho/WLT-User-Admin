import axios from "./axios";
const USER = "mark";

class UserAPI {
  constructor() {
    async function login() {
      let response = null;
      let getData = null;

      try {
        const data = {
          login_id: USER,
          password: USER
        };
        response = await axios.post("/api/user/login", data);
        getData = await axios.get("/api/users");
        if (response.data.token) {
          const userData = {
            name: response.data.user.user_name,
            type: response.data.user.user_type,
            loginID: response.data.user.login_id,
            userID: response.data.user._id,
            token: response.data.token
          };

          sessionStorage.setItem("user", JSON.stringify(userData));
          sessionStorage.setItem("data", JSON.stringify(getData.data));

          return userData;
        }
      } catch (error) {
        throw new Error(error);
      }
      return response.data;
    }

    function logout() {
      sessionStorage.removeItem("user");
    }

    Object.defineProperties(this, {
      login: {
        value: login,
        writable: false
      },
      logout: {
        value: logout,
        writable: false
      }
    });
  }
}

export default new UserAPI();
