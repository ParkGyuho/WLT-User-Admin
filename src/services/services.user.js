import axios from "./axios";
const USER = "mark";
let DEMO = "demo";

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

    async function getGroups() {
      let getGroup = null;
      getGroup = await axios.get("/api/groups");

      return getGroup.data;
    }

    async function uploadUser(pre_info, post_info) {
      let uploadedUser = null;

      try {
        const data = {
          login_id: "demo",
          new_password: post_info.login_id,
          pre_password: pre_info.login_id
        };
        uploadedUser = await axios.put("/api/user", data);
        console.log(uploadedUser);
        DEMO = data.new_password;
        console.log(DEMO);
      } catch (error) {
        throw new Error(error);
      }
    }

    async function addUser(data) {
      let response = null;

      try {
        response = await axios.post("/api/user", data);
      } catch (error) {
        throw new Error(error);
      }
      return response.data;
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
      },
      getGroups: {
        value: getGroups,
        writable: false
      },
      uploadUser: {
        value: uploadUser,
        writable: false
      },
      addUser: {
        value: addUser,
        writable: false
      }
    });
  }
}

export default new UserAPI();
