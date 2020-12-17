import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
class UserService extends GenericService {
  constructor() {
    super();
  }
  login = (email, password) =>
    new Promise((resolve, reject) => {
      this.post("users/login", { email, password })
        .then((token) => {
          localStorage.setItem("token", token);
          resolve(token);
        })
        .catch((err) => {
          reject(err);
        });
    });
  register = (name, email, password) =>
    this.post("users/register", { password, email, name });
  logout = () => {
    localStorage.removeItem("token");
  };
  isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };
   getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
  isAdmin = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role == "admin") return true;
      else return false;
    } else return false;
  };
  issuperAdmin = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role == "superadmin") return true;
      else return false;
    } else return false;
  };
  getUsers = () => this.get("users");
  deleteUser = (_id) => this.delete("users/" + _id);
  updateUser = (_id, data) => this.put("users/" + _id, data);
  getSingleUser=(id)=>this.get("users/"+id)
}





let userService = new UserService();
export default userService;
