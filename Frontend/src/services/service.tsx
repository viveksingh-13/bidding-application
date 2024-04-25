import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/api/v1",
});

export const Login = (name: string) => instance.post("/login", { name: name });
