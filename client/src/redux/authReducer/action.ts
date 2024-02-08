import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";
// import { LoginAction } from "../types"; // Import types as per your project structure

type LoginAction =
  | { type: "LOGIN_REQUEST" }
  | { type: "LOGIN_SUCCESS"; payload: string }
  | { type: "LOGIN_FAILURE" };

type LoginData = {
  email: string;
  password: string;
};

export const login = (data: LoginData) => (dispatch: Dispatch<LoginAction>) => {
  // Complete login logic here
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post<any, AxiosResponse<{ token: string }>>("https://reqres.in/api/login", data)
    .then((res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data.token }))
    .catch(() => dispatch({ type: LOGIN_FAILURE }));
};


// import axios, { AxiosResponse } from "axios";
// import { Dispatch } from "redux";
// import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";
// import { LoginAction } from "../types"; // Import types as per your project structure

// export const login = (data: any) => (dispatch: Dispatch<LoginAction>) => {
//   // Complete login logic here
//   dispatch({ type: LOGIN_REQUEST });
//   return axios
//     .post("https://reqres.in/api/login", data)
//     .then((res: AxiosResponse<any>) => dispatch({ type: LOGIN_SUCCESS, payload: res.data.token }))
//     .catch(() => dispatch({ type: LOGIN_FAILURE }));
// };


// import axios from "axios";
// import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";

// export const login = (data) => (dispatch) => {
//   // Complete login logic here
//   dispatch({ type: LOGIN_REQUEST });
//   return axios
//     .post("https://reqres.in/api/login", data)
//     .then((res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data.token }))
//     .catch(() => dispatch({ type: LOGIN_FAILURE }));
// };