import axios from "axios";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  signup = (username, password) => {
    return this.service
      .post("/signup", { username, password })
      .then((response) => response.data);
  };

  loggedin = () => {
    return this.service.get("/loggedin").then((response) => response.data);
  };

  login = (username, password) => {
    return this.service
      .post("/login", { username, password })
      .then((response) => response.data)
      .catch((err) => console.log(err));
  };

  logout = () => {
    return this.service.post("/logout", {}).then((response) => response.data).catch((error) => console.log(error));
  };

  handleUpload = file => {
  return this.service
    .post("/upload", file)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
  
}



const authService = new AuthService();

export default authService;
