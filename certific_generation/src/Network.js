import axios from "axios";

class Network {
  constructor() {
    // this.baseUrl = "https://certificate-generation-server.onrender.com";
    this.baseUrl = "http://localhost:3001";
  }

  signUp(data) {
    return axios.post(`${this.baseUrl}/signup`, data);
  }

  login(data) {
    return axios.post(`${this.baseUrl}/login`, data);
  }

  getAllStudents() {
    return axios.get(`${this.baseUrl}/students`);
  }

  certificateDate(data) {
    return axios.post(`${this.baseUrl}/certificateData`, data);
  }

  getCertData() {
    return axios.get(`${this.baseUrl}/getCertData`);
  }

  saveTemplateData(data) {
    return axios.post(`${this.baseUrl}/saveTemplateData`, data);
  }

  uploadFile(formData) {
    return axios.post(`${this.baseUrl}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  async generateCertificate(data) {
    return axios.post(`${this.baseUrl}/generateCertificate`, data);
  }

  async getTemplates() {
    return axios.get(`${this.baseUrl}/templates`);
  }

  async getCertificateImageData(params) {
    return await axios.get(`${this.baseUrl}/getCertificateImageData`, {
      params,
    });
  }

  async getStudentCertificates(params) {
    return axios.get(`${this.baseUrl}/getStudentCertificates`, { params });
  }

  async generatePDF(data, config) {
    return axios.post(`${this.baseUrl}/generatePDF`, data, config);
  }

  getPath() {
    return this.baseUrl;
  }

  get path() {
    return this.baseUrl;
  }
  /*getAll() {
    return axios.get(`${this.baseUrl}/signup`);
  }

  get(id) {
    return axios.get(`${this.baseUrl}/signup/${id}`);
  }

  create(data) {
    return axios.post(`${this.baseUrl}/signup`, data);
  }

  update(id, data) {
    return axios.put(`${this.baseUrl}/signup/${id}`, data);
  }

  delete(id) {
    return axios.delete(`${this.baseUrl}/signup/${id}`);
  }

  deleteAll() {
    return axios.delete(`${this.baseUrl}/signup`);
  }*/
}

export default new Network();
