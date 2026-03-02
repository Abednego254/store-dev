import axios from "axios";

const BASE_URL = "http://localhost:8082/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ======= All API Calls ========

//======================ProductLines API CALL =======================
export const fetchProductLines = () => api.get("/product-lines");

export const fetchOrders = () => api.get("/orders");

export const fetchEmployees = () => api.get("/employees");

export const fetchCustomers = () => api.get("/customers");

export const fetchPayments = () => api.get("/payments");

//=================Products API Calls =======================
export const fetchProducts = () => api.get("/products");
export const createProduct = (data) => api.post("/products", data);
export const deleteProduct = (id) => api.delete(`/products/${id}`);
export const fetchProductById = (id) => api.get(`/products/${id}`);
export const updateProduct = (id, productData) => api.put(`/products/${id}`, productData);

//================ Office API Calls ===========
export const fetchOffices = () => api.get("/offices");
export const createOffice = (data) => api.post(`/offices`, data);
export const deleteOffice = (id) => api.delete(`/offices/${id}`);
export const updateOffice = (id, officeData) => api.post(`/offices/${id}`, officeData);
export const fetchOfficeById = (id) => api.get(`/offices/${id}`);

export default api;
