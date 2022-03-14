import axios from "axios";
import { Cookies } from "react-cookie";

axios.defaults.headers.common = { "x-auth-token": Cookies.get("token") };

export default axios;
