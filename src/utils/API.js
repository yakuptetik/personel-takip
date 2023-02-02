import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://taskmanager.ron.digital/api',
});

export default instance;