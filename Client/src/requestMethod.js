import axios from 'axios';

const baseURL = "http://localhost:5000/api/";
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const token = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL: baseURL
});

export const userRequest = axios.create({
    baseURL: baseURL,
    headers: { token: `Bearer ${token}` }
})