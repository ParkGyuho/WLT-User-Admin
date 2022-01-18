import axios from "./axios";
const USER = "mark";

class UserAPI {
  constructor() {
    async function login() {
      let response = null;

      try {
        const data = {
          login_id: USER,
          password: USER
        };
        response = await axios.post("/api/user/login", data);
        if (response.data.token) {
          const userData = {
            name: response.data.user.user_name,
            type: response.data.user.user_type,
            loginID: response.data.user.login_id,
            userID: response.data.user._id,
            token: response.data.token
          };

          sessionStorage.setItem("user", JSON.stringify(userData));

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

    async function getUsers() {
      let getData = null;
      getData = await axios.get("/api/users");

      return getData.data;
    }

    Object.defineProperties(this, {
      login: {
        value: login,
        writable: false
      },
      logout: {
        value: logout,
        writable: false
      },
      getUsers: {
        value: getUsers,
        writable: false
      }
    });
  }
}

export default new UserAPI();
