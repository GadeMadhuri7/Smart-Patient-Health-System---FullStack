import axios from "axios";

const BASE_URL = "http://localhost:8080/api/patient";

export const registerUser = (data) => axios.post(`${BASE_URL}/register`, data);
export const loginUser = (data) => axios.post(`${BASE_URL}/login`, data);
export const addRecord = (data) =>
  axios.post("http://localhost:8080/api/record/add", data);

export const getRecords = (id) =>
  axios.get(`http://localhost:8080/api/record/${id}`);
export const deleteRecord = (id) =>
  axios.delete(`http://localhost:8080/api/record/delete/${id}`);
export const updateRecord = (id, data) =>
  axios.put(`http://localhost:8080/api/record/update/${id}`, data);